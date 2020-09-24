// Code generated by protoc-gen-go. DO NOT EDIT.
// source: update.proto

package api

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type UpdateI struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UpdateI) Reset()         { *m = UpdateI{} }
func (m *UpdateI) String() string { return proto.CompactTextString(m) }
func (*UpdateI) ProtoMessage()    {}
func (*UpdateI) Descriptor() ([]byte, []int) {
	return fileDescriptor_3f0fa214029f1c21, []int{0}
}

func (m *UpdateI) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateI.Unmarshal(m, b)
}
func (m *UpdateI) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateI.Marshal(b, m, deterministic)
}
func (m *UpdateI) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateI.Merge(m, src)
}
func (m *UpdateI) XXX_Size() int {
	return xxx_messageInfo_UpdateI.Size(m)
}
func (m *UpdateI) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateI.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateI proto.InternalMessageInfo

func (m *UpdateI) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type UpdateO struct {
	Message              string   `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UpdateO) Reset()         { *m = UpdateO{} }
func (m *UpdateO) String() string { return proto.CompactTextString(m) }
func (*UpdateO) ProtoMessage()    {}
func (*UpdateO) Descriptor() ([]byte, []int) {
	return fileDescriptor_3f0fa214029f1c21, []int{1}
}

func (m *UpdateO) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateO.Unmarshal(m, b)
}
func (m *UpdateO) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateO.Marshal(b, m, deterministic)
}
func (m *UpdateO) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateO.Merge(m, src)
}
func (m *UpdateO) XXX_Size() int {
	return xxx_messageInfo_UpdateO.Size(m)
}
func (m *UpdateO) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateO.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateO proto.InternalMessageInfo

func (m *UpdateO) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func init() {
	proto.RegisterType((*UpdateI)(nil), "api.UpdateI")
	proto.RegisterType((*UpdateO)(nil), "api.UpdateO")
}

func init() { proto.RegisterFile("update.proto", fileDescriptor_3f0fa214029f1c21) }

var fileDescriptor_3f0fa214029f1c21 = []byte{
	// 91 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0x29, 0x2d, 0x48, 0x49,
	0x2c, 0x49, 0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x62, 0x4e, 0x2c, 0xc8, 0x54, 0x92, 0xe5,
	0x62, 0x0f, 0x05, 0x0b, 0x7a, 0x0a, 0x09, 0x71, 0xb1, 0xe4, 0x25, 0xe6, 0xa6, 0x4a, 0x30, 0x2a,
	0x30, 0x6a, 0x70, 0x06, 0x81, 0xd9, 0x4a, 0xca, 0x30, 0x69, 0x7f, 0x21, 0x09, 0x2e, 0xf6, 0xdc,
	0xd4, 0xe2, 0xe2, 0xc4, 0x74, 0x98, 0x0a, 0x18, 0x37, 0x89, 0x0d, 0x6c, 0x9e, 0x31, 0x20, 0x00,
	0x00, 0xff, 0xff, 0xfe, 0x6a, 0x2b, 0x4e, 0x5f, 0x00, 0x00, 0x00,
}