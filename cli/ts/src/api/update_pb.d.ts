import * as jspb from 'google-protobuf'



export class UpdateI extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateI;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateI.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateI): UpdateI.AsObject;
  static serializeBinaryToWriter(message: UpdateI, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateI;
  static deserializeBinaryFromReader(message: UpdateI, reader: jspb.BinaryReader): UpdateI;
}

export namespace UpdateI {
  export type AsObject = {
    name: string,
  }
}

export class UpdateO extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): UpdateO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateO.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateO): UpdateO.AsObject;
  static serializeBinaryToWriter(message: UpdateO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateO;
  static deserializeBinaryFromReader(message: UpdateO, reader: jspb.BinaryReader): UpdateO;
}

export namespace UpdateO {
  export type AsObject = {
    message: string,
  }
}

