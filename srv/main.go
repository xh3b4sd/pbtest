package main

import (
	"context"
	"fmt"
	"net"

	"github.com/xh3b4sd/tracer"
	"google.golang.org/grpc"

	"github.com/xh3b4sd/pbtest/gen/api"
)

func main() {
	err := mainE(context.Background())
	if err != nil {
		tracer.Panic(err)
	}
}

func mainE(ctx context.Context) error {
	var err error

	var l net.Listener
	{
		l, err = net.Listen("tcp", fmt.Sprintf(":%d", 7777))
		if err != nil {
			return tracer.Mask(err)
		}
	}

	var a api.APIServer
	{
		a = &API{}

		g := grpc.NewServer()
		api.RegisterAPIServer(g, a)
		err := g.Serve(l)
		if err != nil {
			return tracer.Mask(err)
		}
	}

	return nil
}

// -------------------------------------------------------------------------- //

type API struct {
	api.UnimplementedAPIServer
}

func (a *API) Create(ctx context.Context, cre *api.CreateI) (*api.CreateO, error) {
	fmt.Printf("%#v\n", cre)
	return &api.CreateO{Message: "create output"}, nil
}

func (a *API) Delete(ctx context.Context, del *api.DeleteI) (*api.DeleteO, error) {
	fmt.Printf("%#v\n", del)
	return &api.DeleteO{Message: "delete output"}, nil
}

func (a *API) Search(ctx context.Context, sea *api.SearchI) (*api.SearchO, error) {
	fmt.Printf("%#v\n", sea)
	return &api.SearchO{Message: "search output"}, nil
}

func (a *API) Update(ctx context.Context, upd *api.UpdateI) (*api.UpdateO, error) {
	fmt.Printf("%#v\n", upd)
	return &api.UpdateO{Message: "update output"}, nil
}
