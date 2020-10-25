package main

import (
	"fmt"

	"github.com/xh3b4sd/tracer"
	"golang.org/x/net/context"
	"google.golang.org/grpc"

	"github.com/xh3b4sd/pbtest/gen/go/api"
)

func main() {
	err := mainE(context.Background())
	if err != nil {
		tracer.Panic(err)
	}
}

func mainE(ctx context.Context) error {
	var err error

	var conn *grpc.ClientConn
	{
		conn, err = grpc.Dial(":7777", grpc.WithInsecure())
		if err != nil {
			return tracer.Mask(err)
		}
		defer conn.Close()
	}

	var c api.APIClient
	{
		c = api.NewAPIClient(conn)
	}

	{
		i := &api.CreateI{
			Name: "create input",
		}

		o, err := c.Create(ctx, i)
		if err != nil {
			return tracer.Mask(err)
		}

		fmt.Printf("%#v\n", o)
	}

	return nil
}
