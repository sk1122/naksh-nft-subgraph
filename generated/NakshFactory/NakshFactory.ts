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

export class CollectionCreated extends ethereum.Event {
  get params(): CollectionCreated__Params {
    return new CollectionCreated__Params(this);
  }
}

export class CollectionCreated__Params {
  _event: CollectionCreated;

  constructor(event: CollectionCreated) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get symbol(): string {
    return this._event.parameters[2].value.toString();
  }

  get nftAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class NakshFactory__deployNftCollectionInputArtistStruct extends ethereum.Tuple {
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

export class NakshFactory__deployNftCollectionInputCollectionStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get symbol(): string {
    return this[1].toString();
  }

  get about(): string {
    return this[2].toString();
  }

  get logo(): string {
    return this[3].toString();
  }

  get cover(): NakshFactory__deployNftCollectionInputCollectionCoverStruct {
    return changetype<
      NakshFactory__deployNftCollectionInputCollectionCoverStruct
    >(this[4].toTuple());
  }

  get social(): NakshFactory__deployNftCollectionInputCollectionSocialStruct {
    return changetype<
      NakshFactory__deployNftCollectionInputCollectionSocialStruct
    >(this[5].toTuple());
  }
}

export class NakshFactory__deployNftCollectionInputCollectionCoverStruct extends ethereum.Tuple {
  get uri(): string {
    return this[0].toString();
  }

  get isGradient(): boolean {
    return this[1].toBoolean();
  }
}

export class NakshFactory__deployNftCollectionInputCollectionSocialStruct extends ethereum.Tuple {
  get instagram(): string {
    return this[0].toString();
  }

  get facebook(): string {
    return this[1].toString();
  }

  get twitter(): string {
    return this[2].toString();
  }

  get website(): string {
    return this[3].toString();
  }
}

export class NakshFactory extends ethereum.SmartContract {
  static bind(address: Address): NakshFactory {
    return new NakshFactory("NakshFactory", address);
  }

  artistCollections(param0: Address, param1: BigInt): Address {
    let result = super.call(
      "artistCollections",
      "artistCollections(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try_artistCollections(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "artistCollections",
      "artistCollections(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deployNftCollection(
    artist: NakshFactory__deployNftCollectionInputArtistStruct,
    collection: NakshFactory__deployNftCollectionInputCollectionStruct,
    _admin: Address,
    _creatorFees: Array<i32>,
    _creators: Array<Address>
  ): Address {
    let result = super.call(
      "deployNftCollection",
      "deployNftCollection((string,address,string),(string,string,string,string,(string,bool),(string,string,string,string)),address,uint16[],address[]):(address)",
      [
        ethereum.Value.fromTuple(artist),
        ethereum.Value.fromTuple(collection),
        ethereum.Value.fromAddress(_admin),
        ethereum.Value.fromI32Array(_creatorFees),
        ethereum.Value.fromAddressArray(_creators)
      ]
    );

    return result[0].toAddress();
  }

  try_deployNftCollection(
    artist: NakshFactory__deployNftCollectionInputArtistStruct,
    collection: NakshFactory__deployNftCollectionInputCollectionStruct,
    _admin: Address,
    _creatorFees: Array<i32>,
    _creators: Array<Address>
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployNftCollection",
      "deployNftCollection((string,address,string),(string,string,string,string,(string,bool),(string,string,string,string)),address,uint16[],address[]):(address)",
      [
        ethereum.Value.fromTuple(artist),
        ethereum.Value.fromTuple(collection),
        ethereum.Value.fromAddress(_admin),
        ethereum.Value.fromI32Array(_creatorFees),
        ethereum.Value.fromAddressArray(_creators)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getArtistCollections(_artist: Address): Array<Address> {
    let result = super.call(
      "getArtistCollections",
      "getArtistCollections(address):(address[])",
      [ethereum.Value.fromAddress(_artist)]
    );

    return result[0].toAddressArray();
  }

  try_getArtistCollections(
    _artist: Address
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getArtistCollections",
      "getArtistCollections(address):(address[])",
      [ethereum.Value.fromAddress(_artist)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }
}

export class DeployNftCollectionCall extends ethereum.Call {
  get inputs(): DeployNftCollectionCall__Inputs {
    return new DeployNftCollectionCall__Inputs(this);
  }

  get outputs(): DeployNftCollectionCall__Outputs {
    return new DeployNftCollectionCall__Outputs(this);
  }
}

export class DeployNftCollectionCall__Inputs {
  _call: DeployNftCollectionCall;

  constructor(call: DeployNftCollectionCall) {
    this._call = call;
  }

  get artist(): DeployNftCollectionCallArtistStruct {
    return changetype<DeployNftCollectionCallArtistStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get collection(): DeployNftCollectionCallCollectionStruct {
    return changetype<DeployNftCollectionCallCollectionStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }

  get _admin(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _creatorFees(): Array<i32> {
    return this._call.inputValues[3].value.toI32Array();
  }

  get _creators(): Array<Address> {
    return this._call.inputValues[4].value.toAddressArray();
  }
}

export class DeployNftCollectionCall__Outputs {
  _call: DeployNftCollectionCall;

  constructor(call: DeployNftCollectionCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DeployNftCollectionCallArtistStruct extends ethereum.Tuple {
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

export class DeployNftCollectionCallCollectionStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get symbol(): string {
    return this[1].toString();
  }

  get about(): string {
    return this[2].toString();
  }

  get logo(): string {
    return this[3].toString();
  }

  get cover(): DeployNftCollectionCallCollectionCoverStruct {
    return changetype<DeployNftCollectionCallCollectionCoverStruct>(
      this[4].toTuple()
    );
  }

  get social(): DeployNftCollectionCallCollectionSocialStruct {
    return changetype<DeployNftCollectionCallCollectionSocialStruct>(
      this[5].toTuple()
    );
  }
}

export class DeployNftCollectionCallCollectionCoverStruct extends ethereum.Tuple {
  get uri(): string {
    return this[0].toString();
  }

  get isGradient(): boolean {
    return this[1].toBoolean();
  }
}

export class DeployNftCollectionCallCollectionSocialStruct extends ethereum.Tuple {
  get instagram(): string {
    return this[0].toString();
  }

  get facebook(): string {
    return this[1].toString();
  }

  get twitter(): string {
    return this[2].toString();
  }

  get website(): string {
    return this[3].toString();
  }
}