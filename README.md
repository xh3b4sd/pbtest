# pbtest

```
go get -u google.golang.org/protobuf/cmd/protoc-gen-go
go install google.golang.org/protobuf/cmd/protoc-gen-go
go get -u google.golang.org/grpc/cmd/protoc-gen-go-grpc
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc
```

```
mkdir -p ./gen/api/ && protoc --go-grpc_out=./gen/api/ --proto_path=./pbf/api/ ./pbf/api/*
mkdir -p ./gen/api/ && protoc --go_out=./gen/api/ --proto_path=./pbf/api/ ./pbf/api/*
```

```
& go run srv/main.go
&api.CreateI{Name:"create input", XXX_NoUnkeyedLiteral:struct {}{}, XXX_unrecognized:[]uint8(nil), XXX_sizecache:0}
```

```
$ go run cli/main.go
&api.CreateO{Message:"create output", XXX_NoUnkeyedLiteral:struct {}{}, XXX_unrecognized:[]uint8(nil), XXX_sizecache:0}
```
