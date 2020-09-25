# pbtest

```
mkdir -p ./gen/api/ && protoc --go_out=plugins=grpc:./gen/api/ --proto_path=./pbf/api/ ./pbf/api/*
```

```
& go run srv/main.go
&api.CreateI{Name:"create input", XXX_NoUnkeyedLiteral:struct {}{}, XXX_unrecognized:[]uint8(nil), XXX_sizecache:0}
```

```
$ go run cli/main.go
&api.CreateO{Message:"create output", XXX_NoUnkeyedLiteral:struct {}{}, XXX_unrecognized:[]uint8(nil), XXX_sizecache:0}
```
