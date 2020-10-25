# pbtest



### Golang

```
go get -u google.golang.org/protobuf/cmd/protoc-gen-go
go install google.golang.org/protobuf/cmd/protoc-gen-go
go get -u google.golang.org/grpc/cmd/protoc-gen-go-grpc
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc
```

```
mkdir -p ./gen/go/api/ && protoc --go-grpc_out=./gen/go/api/ --proto_path=./pbf/api/ ./pbf/api/*
mkdir -p ./gen/go/api/ && protoc --go_out=./gen/go/api/ --proto_path=./pbf/api/ ./pbf/api/*
```

```
& go run srv/go/main.go
&api.CreateI{Name:"create input", XXX_NoUnkeyedLiteral:struct {}{}, XXX_unrecognized:[]uint8(nil), XXX_sizecache:0}
```

```
$ go run cli/go/main.go
&api.CreateO{Message:"create output", XXX_NoUnkeyedLiteral:struct {}{}, XXX_unrecognized:[]uint8(nil), XXX_sizecache:0}
```

```
$ grpcurl -plaintext 0.0.0.0:7777 list
api.API
grpc.reflection.v1alpha.ServerReflection
```

```
$ grpcurl -plaintext 0.0.0.0:7777 list api.API
api.API.Create
api.API.Delete
api.API.Search
api.API.Update
```



### Typescript

```
brew install protoc-gen-grpc-web
```

```
mkdir -p ./gen/ts/api/ && protoc --grpc-web_out=import_style=typescript,mode=grpcwebtext:./gen/ts/api/ --proto_path=./pbf/api/ ./pbf/api/*
mkdir -p ./gen/ts/api/ && protoc --js_out=import_style=commonjs,binary:./gen/ts/api/ --proto_path=./pbf/api/ ./pbf/api/*
```
