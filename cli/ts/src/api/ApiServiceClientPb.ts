/**
 * @fileoverview gRPC-Web generated client stub for api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as create_pb from './create_pb';
import * as delete_pb from './delete_pb';
import * as search_pb from './search_pb';
import * as update_pb from './update_pb';


export class APIClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    create_pb.CreateO,
    (request: create_pb.CreateI) => {
      return request.serializeBinary();
    },
    create_pb.CreateO.deserializeBinary
  );

  create(
    request: create_pb.CreateI,
    metadata: grpcWeb.Metadata | null): Promise<create_pb.CreateO>;

  create(
    request: create_pb.CreateI,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: create_pb.CreateO) => void): grpcWeb.ClientReadableStream<create_pb.CreateO>;

  create(
    request: create_pb.CreateI,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: create_pb.CreateO) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.API/Create',
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.API/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
  }

  methodInfoDelete = new grpcWeb.AbstractClientBase.MethodInfo(
    delete_pb.DeleteO,
    (request: delete_pb.DeleteI) => {
      return request.serializeBinary();
    },
    delete_pb.DeleteO.deserializeBinary
  );

  delete(
    request: delete_pb.DeleteI,
    metadata: grpcWeb.Metadata | null): Promise<delete_pb.DeleteO>;

  delete(
    request: delete_pb.DeleteI,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: delete_pb.DeleteO) => void): grpcWeb.ClientReadableStream<delete_pb.DeleteO>;

  delete(
    request: delete_pb.DeleteI,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: delete_pb.DeleteO) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.API/Delete',
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.API/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

  methodInfoSearch = new grpcWeb.AbstractClientBase.MethodInfo(
    search_pb.SearchO,
    (request: search_pb.SearchI) => {
      return request.serializeBinary();
    },
    search_pb.SearchO.deserializeBinary
  );

  search(
    request: search_pb.SearchI,
    metadata: grpcWeb.Metadata | null): Promise<search_pb.SearchO>;

  search(
    request: search_pb.SearchI,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: search_pb.SearchO) => void): grpcWeb.ClientReadableStream<search_pb.SearchO>;

  search(
    request: search_pb.SearchI,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: search_pb.SearchO) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.API/Search',
        request,
        metadata || {},
        this.methodInfoSearch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.API/Search',
    request,
    metadata || {},
    this.methodInfoSearch);
  }

  methodInfoUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    update_pb.UpdateO,
    (request: update_pb.UpdateI) => {
      return request.serializeBinary();
    },
    update_pb.UpdateO.deserializeBinary
  );

  update(
    request: update_pb.UpdateI,
    metadata: grpcWeb.Metadata | null): Promise<update_pb.UpdateO>;

  update(
    request: update_pb.UpdateI,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: update_pb.UpdateO) => void): grpcWeb.ClientReadableStream<update_pb.UpdateO>;

  update(
    request: update_pb.UpdateI,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: update_pb.UpdateO) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.API/Update',
        request,
        metadata || {},
        this.methodInfoUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.API/Update',
    request,
    metadata || {},
    this.methodInfoUpdate);
  }

}

