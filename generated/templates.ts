// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class NakshNFT extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("NakshNFT", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "NakshNFT",
      [address.toHex()],
      context
    );
  }
}

export class Naksh1155NFT extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("Naksh1155NFT", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "Naksh1155NFT",
      [address.toHex()],
      context
    );
  }
}
