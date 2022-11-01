// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Cancelled extends ethereum.Event {
  get params(): Cancelled__Params {
    return new Cancelled__Params(this);
  }
}

export class Cancelled__Params {
  _event: Cancelled;

  constructor(event: Cancelled) {
    this._event = event;
  }

  get _nft(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SalePriceSet extends ethereum.Event {
  get params(): SalePriceSet__Params {
    return new SalePriceSet__Params(this);
  }
}

export class SalePriceSet__Params {
  _event: SalePriceSet;

  constructor(event: SalePriceSet) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _nft(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _price(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get currentTimestamp(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get tokenFirstSale(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }

  get saletype(): i32 {
    return this._event.parameters[7].value.toI32();
  }
}

export class Sold extends ethereum.Event {
  get params(): Sold__Params {
    return new Sold__Params(this);
  }
}

export class Sold__Params {
  _event: Sold;

  constructor(event: Sold) {
    this._event = event;
  }

  get _nft(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class Naksh1155Marketplace__getNFTonSaleResultValue0Struct extends ethereum.Tuple {
  get nft(): Naksh1155Marketplace__getNFTonSaleResultValue0NftStruct {
    return changetype<Naksh1155Marketplace__getNFTonSaleResultValue0NftStruct>(
      this[0].toTuple()
    );
  }

  get _owner(): Address {
    return this[1].toAddress();
  }

  get isOnSale(): boolean {
    return this[2].toBoolean();
  }

  get onSaleAmount(): BigInt {
    return this[3].toBigInt();
  }

  get tokenFirstSale(): boolean {
    return this[4].toBoolean();
  }

  get salePrice(): BigInt {
    return this[5].toBigInt();
  }

  get saletype(): i32 {
    return this[6].toI32();
  }
}

export class Naksh1155Marketplace__getNFTonSaleResultValue0NftStruct extends ethereum.Tuple {
  get nftAddress(): Address {
    return this[0].toAddress();
  }

  get tokenId(): BigInt {
    return this[1].toBigInt();
  }

  get amount(): BigInt {
    return this[2].toBigInt();
  }

  get imgUri(): string {
    return this[3].toString();
  }

  get videoUri(): string {
    return this[4].toString();
  }

  get title(): string {
    return this[5].toString();
  }

  get description(): string {
    return this[6].toString();
  }

  get isVideo(): boolean {
    return this[7].toBoolean();
  }

  get artist(): Naksh1155Marketplace__getNFTonSaleResultValue0NftArtistStruct {
    return changetype<
      Naksh1155Marketplace__getNFTonSaleResultValue0NftArtistStruct
    >(this[8].toTuple());
  }

  get mintedBy(): i32 {
    return this[9].toI32();
  }
}

export class Naksh1155Marketplace__getNFTonSaleResultValue0NftArtistStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get artistAddress(): Address {
    return this[1].toAddress();
  }

  get imageUrl(): string {
    return this[2].toString();
  }
}

export class Naksh1155Marketplace__getSaleDataResultValue0Struct extends ethereum.Tuple {
  get nft(): Naksh1155Marketplace__getSaleDataResultValue0NftStruct {
    return changetype<Naksh1155Marketplace__getSaleDataResultValue0NftStruct>(
      this[0].toTuple()
    );
  }

  get _owner(): Address {
    return this[1].toAddress();
  }

  get isOnSale(): boolean {
    return this[2].toBoolean();
  }

  get onSaleAmount(): BigInt {
    return this[3].toBigInt();
  }

  get tokenFirstSale(): boolean {
    return this[4].toBoolean();
  }

  get salePrice(): BigInt {
    return this[5].toBigInt();
  }

  get saletype(): i32 {
    return this[6].toI32();
  }
}

export class Naksh1155Marketplace__getSaleDataResultValue0NftStruct extends ethereum.Tuple {
  get nftAddress(): Address {
    return this[0].toAddress();
  }

  get tokenId(): BigInt {
    return this[1].toBigInt();
  }

  get amount(): BigInt {
    return this[2].toBigInt();
  }

  get imgUri(): string {
    return this[3].toString();
  }

  get videoUri(): string {
    return this[4].toString();
  }

  get title(): string {
    return this[5].toString();
  }

  get description(): string {
    return this[6].toString();
  }

  get isVideo(): boolean {
    return this[7].toBoolean();
  }

  get artist(): Naksh1155Marketplace__getSaleDataResultValue0NftArtistStruct {
    return changetype<
      Naksh1155Marketplace__getSaleDataResultValue0NftArtistStruct
    >(this[8].toTuple());
  }

  get mintedBy(): i32 {
    return this[9].toI32();
  }
}

export class Naksh1155Marketplace__getSaleDataResultValue0NftArtistStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get artistAddress(): Address {
    return this[1].toAddress();
  }

  get imageUrl(): string {
    return this[2].toString();
  }
}

export class Naksh1155Marketplace__saleDataResultNftStruct extends ethereum.Tuple {
  get nftAddress(): Address {
    return this[0].toAddress();
  }

  get tokenId(): BigInt {
    return this[1].toBigInt();
  }

  get amount(): BigInt {
    return this[2].toBigInt();
  }

  get imgUri(): string {
    return this[3].toString();
  }

  get videoUri(): string {
    return this[4].toString();
  }

  get title(): string {
    return this[5].toString();
  }

  get description(): string {
    return this[6].toString();
  }

  get isVideo(): boolean {
    return this[7].toBoolean();
  }

  get artist(): Naksh1155Marketplace__saleDataResultNftArtistStruct {
    return changetype<Naksh1155Marketplace__saleDataResultNftArtistStruct>(
      this[8].toTuple()
    );
  }

  get mintedBy(): i32 {
    return this[9].toI32();
  }
}

export class Naksh1155Marketplace__saleDataResultNftArtistStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get artistAddress(): Address {
    return this[1].toAddress();
  }

  get imageUrl(): string {
    return this[2].toString();
  }
}

export class Naksh1155Marketplace__saleDataResult {
  value0: Naksh1155Marketplace__saleDataResultNftStruct;
  value1: Address;
  value2: boolean;
  value3: BigInt;
  value4: boolean;
  value5: BigInt;
  value6: i32;

  constructor(
    value0: Naksh1155Marketplace__saleDataResultNftStruct,
    value1: Address,
    value2: boolean,
    value3: BigInt,
    value4: boolean,
    value5: BigInt,
    value6: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromTuple(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set(
      "value6",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value6))
    );
    return map;
  }

  getNft(): Naksh1155Marketplace__saleDataResultNftStruct {
    return this.value0;
  }

  get_owner(): Address {
    return this.value1;
  }

  getIsOnSale(): boolean {
    return this.value2;
  }

  getOnSaleAmount(): BigInt {
    return this.value3;
  }

  getTokenFirstSale(): boolean {
    return this.value4;
  }

  getSalePrice(): BigInt {
    return this.value5;
  }

  getSaletype(): i32 {
    return this.value6;
  }
}

export class Naksh1155Marketplace extends ethereum.SmartContract {
  static bind(address: Address): Naksh1155Marketplace {
    return new Naksh1155Marketplace("Naksh1155Marketplace", address);
  }

  Naksh_org(): Address {
    let result = super.call("Naksh_org", "Naksh_org():(address)", []);

    return result[0].toAddress();
  }

  try_Naksh_org(): ethereum.CallResult<Address> {
    let result = super.tryCall("Naksh_org", "Naksh_org():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getNFTonSale(): Array<Naksh1155Marketplace__getNFTonSaleResultValue0Struct> {
    let result = super.call(
      "getNFTonSale",
      "getNFTonSale():(((address,uint256,uint256,string,string,string,string,bool,(string,address,string),uint8),address,bool,uint256,bool,uint256,uint8)[])",
      []
    );

    return result[0].toTupleArray<
      Naksh1155Marketplace__getNFTonSaleResultValue0Struct
    >();
  }

  try_getNFTonSale(): ethereum.CallResult<
    Array<Naksh1155Marketplace__getNFTonSaleResultValue0Struct>
  > {
    let result = super.tryCall(
      "getNFTonSale",
      "getNFTonSale():(((address,uint256,uint256,string,string,string,string,bool,(string,address,string),uint8),address,bool,uint256,bool,uint256,uint8)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        Naksh1155Marketplace__getNFTonSaleResultValue0Struct
      >()
    );
  }

  getSaleData(
    _nft: Address,
    _tokenId: BigInt,
    _ownerAddr: Address
  ): Naksh1155Marketplace__getSaleDataResultValue0Struct {
    let result = super.call(
      "getSaleData",
      "getSaleData(address,uint256,address):(((address,uint256,uint256,string,string,string,string,bool,(string,address,string),uint8),address,bool,uint256,bool,uint256,uint8))",
      [
        ethereum.Value.fromAddress(_nft),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_ownerAddr)
      ]
    );

    return changetype<Naksh1155Marketplace__getSaleDataResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getSaleData(
    _nft: Address,
    _tokenId: BigInt,
    _ownerAddr: Address
  ): ethereum.CallResult<Naksh1155Marketplace__getSaleDataResultValue0Struct> {
    let result = super.tryCall(
      "getSaleData",
      "getSaleData(address,uint256,address):(((address,uint256,uint256,string,string,string,string,bool,(string,address,string),uint8),address,bool,uint256,bool,uint256,uint8))",
      [
        ethereum.Value.fromAddress(_nft),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_ownerAddr)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Naksh1155Marketplace__getSaleDataResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getSalePrice(_nft: Address, _tokenId: BigInt, _ownerAddr: Address): BigInt {
    let result = super.call(
      "getSalePrice",
      "getSalePrice(address,uint256,address):(uint256)",
      [
        ethereum.Value.fromAddress(_nft),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_ownerAddr)
      ]
    );

    return result[0].toBigInt();
  }

  try_getSalePrice(
    _nft: Address,
    _tokenId: BigInt,
    _ownerAddr: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getSalePrice",
      "getSalePrice(address,uint256,address):(uint256)",
      [
        ethereum.Value.fromAddress(_nft),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_ownerAddr)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isTokenFirstSale(
    _nftAddress: Address,
    _tokenId: BigInt,
    _ownerAddr: Address
  ): boolean {
    let result = super.call(
      "isTokenFirstSale",
      "isTokenFirstSale(address,uint256,address):(bool)",
      [
        ethereum.Value.fromAddress(_nftAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_ownerAddr)
      ]
    );

    return result[0].toBoolean();
  }

  try_isTokenFirstSale(
    _nftAddress: Address,
    _tokenId: BigInt,
    _ownerAddr: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTokenFirstSale",
      "isTokenFirstSale(address,uint256,address):(bool)",
      [
        ethereum.Value.fromAddress(_nftAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_ownerAddr)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  saleData(
    param0: Address,
    param1: BigInt,
    param2: Address
  ): Naksh1155Marketplace__saleDataResult {
    let result = super.call(
      "saleData",
      "saleData(address,uint256,address):((address,uint256,uint256,string,string,string,string,bool,(string,address,string),uint8),address,bool,uint256,bool,uint256,uint8)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
        ethereum.Value.fromAddress(param2)
      ]
    );

    return changetype<Naksh1155Marketplace__saleDataResult>(
      new Naksh1155Marketplace__saleDataResult(
        changetype<Naksh1155Marketplace__saleDataResultNftStruct>(
          result[0].toTuple()
        ),
        result[1].toAddress(),
        result[2].toBoolean(),
        result[3].toBigInt(),
        result[4].toBoolean(),
        result[5].toBigInt(),
        result[6].toI32()
      )
    );
  }

  try_saleData(
    param0: Address,
    param1: BigInt,
    param2: Address
  ): ethereum.CallResult<Naksh1155Marketplace__saleDataResult> {
    let result = super.tryCall(
      "saleData",
      "saleData(address,uint256,address):((address,uint256,uint256,string,string,string,string,bool,(string,address,string),uint8),address,bool,uint256,bool,uint256,uint8)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
        ethereum.Value.fromAddress(param2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Naksh1155Marketplace__saleDataResult>(
        new Naksh1155Marketplace__saleDataResult(
          changetype<Naksh1155Marketplace__saleDataResultNftStruct>(
            value[0].toTuple()
          ),
          value[1].toAddress(),
          value[2].toBoolean(),
          value[3].toBigInt(),
          value[4].toBoolean(),
          value[5].toBigInt(),
          value[6].toI32()
        )
      )
    );
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class BuyTokenOnSaleCall extends ethereum.Call {
  get inputs(): BuyTokenOnSaleCall__Inputs {
    return new BuyTokenOnSaleCall__Inputs(this);
  }

  get outputs(): BuyTokenOnSaleCall__Outputs {
    return new BuyTokenOnSaleCall__Outputs(this);
  }
}

export class BuyTokenOnSaleCall__Inputs {
  _call: BuyTokenOnSaleCall;

  constructor(call: BuyTokenOnSaleCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _nftAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _ownerAddr(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class BuyTokenOnSaleCall__Outputs {
  _call: BuyTokenOnSaleCall;

  constructor(call: BuyTokenOnSaleCall) {
    this._call = call;
  }
}

export class CancelSaleCall extends ethereum.Call {
  get inputs(): CancelSaleCall__Inputs {
    return new CancelSaleCall__Inputs(this);
  }

  get outputs(): CancelSaleCall__Outputs {
    return new CancelSaleCall__Outputs(this);
  }
}

export class CancelSaleCall__Inputs {
  _call: CancelSaleCall;

  constructor(call: CancelSaleCall) {
    this._call = call;
  }

  get _nft(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CancelSaleCall__Outputs {
  _call: CancelSaleCall;

  constructor(call: CancelSaleCall) {
    this._call = call;
  }
}

export class ChangeOrgAddressCall extends ethereum.Call {
  get inputs(): ChangeOrgAddressCall__Inputs {
    return new ChangeOrgAddressCall__Inputs(this);
  }

  get outputs(): ChangeOrgAddressCall__Outputs {
    return new ChangeOrgAddressCall__Outputs(this);
  }
}

export class ChangeOrgAddressCall__Inputs {
  _call: ChangeOrgAddressCall;

  constructor(call: ChangeOrgAddressCall) {
    this._call = call;
  }

  get _newOrg(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeOrgAddressCall__Outputs {
  _call: ChangeOrgAddressCall;

  constructor(call: ChangeOrgAddressCall) {
    this._call = call;
  }
}

export class ChangePriceCall extends ethereum.Call {
  get inputs(): ChangePriceCall__Inputs {
    return new ChangePriceCall__Inputs(this);
  }

  get outputs(): ChangePriceCall__Outputs {
    return new ChangePriceCall__Outputs(this);
  }
}

export class ChangePriceCall__Inputs {
  _call: ChangePriceCall;

  constructor(call: ChangePriceCall) {
    this._call = call;
  }

  get _nft(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ChangePriceCall__Outputs {
  _call: ChangePriceCall;

  constructor(call: ChangePriceCall) {
    this._call = call;
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get value3(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetSaleCall extends ethereum.Call {
  get inputs(): SetSaleCall__Inputs {
    return new SetSaleCall__Inputs(this);
  }

  get outputs(): SetSaleCall__Outputs {
    return new SetSaleCall__Outputs(this);
  }
}

export class SetSaleCall__Inputs {
  _call: SetSaleCall;

  constructor(call: SetSaleCall) {
    this._call = call;
  }

  get _nft(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class SetSaleCall__Outputs {
  _call: SetSaleCall;

  constructor(call: SetSaleCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
