// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class NFTData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFTData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NFTData must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NFTData", id.toString(), this);
    }
  }

  static load(id: string): NFTData | null {
    return changetype<NFTData | null>(store.get("NFTData", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    return value!.toBytes();
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get tokenUri(): string {
    let value = this.get("tokenUri");
    return value!.toString();
  }

  set tokenUri(value: string) {
    this.set("tokenUri", Value.fromString(value));
  }

  get title(): string {
    let value = this.get("title");
    return value!.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get artistName(): string | null {
    let value = this.get("artistName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set artistName(value: string | null) {
    if (!value) {
      this.unset("artistName");
    } else {
      this.set("artistName", Value.fromString(<string>value));
    }
  }

  get artistImg(): string | null {
    let value = this.get("artistImg");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set artistImg(value: string | null) {
    if (!value) {
      this.unset("artistImg");
    } else {
      this.set("artistImg", Value.fromString(<string>value));
    }
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value!.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get minter(): BigInt | null {
    let value = this.get("minter");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set minter(value: BigInt | null) {
    if (!value) {
      this.unset("minter");
    } else {
      this.set("minter", Value.fromBigInt(<BigInt>value));
    }
  }

  get saleData(): string | null {
    let value = this.get("saleData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set saleData(value: string | null) {
    if (!value) {
      this.unset("saleData");
    } else {
      this.set("saleData", Value.fromString(<string>value));
    }
  }

  get auction(): string | null {
    let value = this.get("auction");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set auction(value: string | null) {
    if (!value) {
      this.unset("auction");
    } else {
      this.set("auction", Value.fromString(<string>value));
    }
  }
}

export class NFTAuction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFTAuction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NFTAuction must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NFTAuction", id.toString(), this);
    }
  }

  static load(id: string): NFTAuction | null {
    return changetype<NFTAuction | null>(store.get("NFTAuction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get startTime(): BigInt {
    let value = this.get("startTime");
    return value!.toBigInt();
  }

  set startTime(value: BigInt) {
    this.set("startTime", Value.fromBigInt(value));
  }

  get endTime(): BigInt {
    let value = this.get("endTime");
    return value!.toBigInt();
  }

  set endTime(value: BigInt) {
    this.set("endTime", Value.fromBigInt(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get nft(): string {
    let value = this.get("nft");
    return value!.toString();
  }

  set nft(value: string) {
    this.set("nft", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get highestBid(): BigInt | null {
    let value = this.get("highestBid");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set highestBid(value: BigInt | null) {
    if (!value) {
      this.unset("highestBid");
    } else {
      this.set("highestBid", Value.fromBigInt(<BigInt>value));
    }
  }

  get highestBidder(): Bytes | null {
    let value = this.get("highestBidder");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set highestBidder(value: Bytes | null) {
    if (!value) {
      this.unset("highestBidder");
    } else {
      this.set("highestBidder", Value.fromBytes(<Bytes>value));
    }
  }

  get bids(): Array<string> | null {
    let value = this.get("bids");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set bids(value: Array<string> | null) {
    if (!value) {
      this.unset("bids");
    } else {
      this.set("bids", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class SaleData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SaleData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SaleData must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SaleData", id.toString(), this);
    }
  }

  static load(id: string): SaleData | null {
    return changetype<SaleData | null>(store.get("SaleData", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nft(): string {
    let value = this.get("nft");
    return value!.toString();
  }

  set nft(value: string) {
    this.set("nft", Value.fromString(value));
  }

  get auction(): string | null {
    let value = this.get("auction");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set auction(value: string | null) {
    if (!value) {
      this.unset("auction");
    } else {
      this.set("auction", Value.fromString(<string>value));
    }
  }

  get isOnSale(): boolean {
    let value = this.get("isOnSale");
    return value!.toBoolean();
  }

  set isOnSale(value: boolean) {
    this.set("isOnSale", Value.fromBoolean(value));
  }

  get tokenFirstSale(): boolean {
    let value = this.get("tokenFirstSale");
    return value!.toBoolean();
  }

  set tokenFirstSale(value: boolean) {
    this.set("tokenFirstSale", Value.fromBoolean(value));
  }

  get salePrice(): BigInt {
    let value = this.get("salePrice");
    return value!.toBigInt();
  }

  set salePrice(value: BigInt) {
    this.set("salePrice", Value.fromBigInt(value));
  }

  get saleType(): string {
    let value = this.get("saleType");
    return value!.toString();
  }

  set saleType(value: string) {
    this.set("saleType", Value.fromString(value));
  }
}

export class BidHistory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BidHistory entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type BidHistory must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("BidHistory", id.toString(), this);
    }
  }

  static load(id: string): BidHistory | null {
    return changetype<BidHistory | null>(store.get("BidHistory", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bidder(): Bytes {
    let value = this.get("bidder");
    return value!.toBytes();
  }

  set bidder(value: Bytes) {
    this.set("bidder", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get nftAuction(): string {
    let value = this.get("nftAuction");
    return value!.toString();
  }

  set nftAuction(value: string) {
    this.set("nftAuction", Value.fromString(value));
  }
}

export class Collection extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Collection entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Collection must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Collection", id.toString(), this);
    }
  }

  static load(id: string): Collection | null {
    return changetype<Collection | null>(store.get("Collection", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    return value!.toBytes();
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value!.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get instagram(): string | null {
    let value = this.get("instagram");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set instagram(value: string | null) {
    if (!value) {
      this.unset("instagram");
    } else {
      this.set("instagram", Value.fromString(<string>value));
    }
  }

  get facebook(): string | null {
    let value = this.get("facebook");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set facebook(value: string | null) {
    if (!value) {
      this.unset("facebook");
    } else {
      this.set("facebook", Value.fromString(<string>value));
    }
  }

  get twitter(): string | null {
    let value = this.get("twitter");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set twitter(value: string | null) {
    if (!value) {
      this.unset("twitter");
    } else {
      this.set("twitter", Value.fromString(<string>value));
    }
  }

  get website(): string | null {
    let value = this.get("website");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set website(value: string | null) {
    if (!value) {
      this.unset("website");
    } else {
      this.set("website", Value.fromString(<string>value));
    }
  }

  get coverUri(): string | null {
    let value = this.get("coverUri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set coverUri(value: string | null) {
    if (!value) {
      this.unset("coverUri");
    } else {
      this.set("coverUri", Value.fromString(<string>value));
    }
  }

  get isGradient(): boolean {
    let value = this.get("isGradient");
    return value!.toBoolean();
  }

  set isGradient(value: boolean) {
    this.set("isGradient", Value.fromBoolean(value));
  }
}

export class SoldNFT extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SoldNFT entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SoldNFT must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SoldNFT", id.toString(), this);
    }
  }

  static load(id: string): SoldNFT | null {
    return changetype<SoldNFT | null>(store.get("SoldNFT", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value!.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    return value!.toBytes();
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get nft(): string {
    let value = this.get("nft");
    return value!.toString();
  }

  set nft(value: string) {
    this.set("nft", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}