import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Bidding,
  EndedAuction,
  OwnershipTransferred,
  SalePriceSet,
  Sold,
  StartedAuction
} from "../generated/NakshMarketplace/NakshMarketplace"

export function createBiddingEvent(
  _nft: Address,
  _tokenId: BigInt,
  _bidder: Address,
  _amount: BigInt,
  timestamp: BigInt
): Bidding {
  let biddingEvent = changetype<Bidding>(newMockEvent())

  biddingEvent.parameters = new Array()

  biddingEvent.parameters.push(
    new ethereum.EventParam("_nft", ethereum.Value.fromAddress(_nft))
  )
  biddingEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  biddingEvent.parameters.push(
    new ethereum.EventParam("_bidder", ethereum.Value.fromAddress(_bidder))
  )
  biddingEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  biddingEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return biddingEvent
}

export function createEndedAuctionEvent(
  _nft: Address,
  _tokenId: BigInt,
  _buyer: Address,
  highestBID: BigInt,
  timestamp: BigInt
): EndedAuction {
  let endedAuctionEvent = changetype<EndedAuction>(newMockEvent())

  endedAuctionEvent.parameters = new Array()

  endedAuctionEvent.parameters.push(
    new ethereum.EventParam("_nft", ethereum.Value.fromAddress(_nft))
  )
  endedAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  endedAuctionEvent.parameters.push(
    new ethereum.EventParam("_buyer", ethereum.Value.fromAddress(_buyer))
  )
  endedAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "highestBID",
      ethereum.Value.fromUnsignedBigInt(highestBID)
    )
  )
  endedAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return endedAuctionEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSalePriceSetEvent(
  _nft: Address,
  _tokenId: BigInt,
  _price: BigInt,
  tokenFirstSale: boolean,
  saletype: i32
): SalePriceSet {
  let salePriceSetEvent = changetype<SalePriceSet>(newMockEvent())

  salePriceSetEvent.parameters = new Array()

  salePriceSetEvent.parameters.push(
    new ethereum.EventParam("_nft", ethereum.Value.fromAddress(_nft))
  )
  salePriceSetEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  salePriceSetEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )
  salePriceSetEvent.parameters.push(
    new ethereum.EventParam(
      "tokenFirstSale",
      ethereum.Value.fromBoolean(tokenFirstSale)
    )
  )
  salePriceSetEvent.parameters.push(
    new ethereum.EventParam(
      "saletype",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(saletype))
    )
  )

  return salePriceSetEvent
}

export function createSoldEvent(
  _nft: Address,
  _buyer: Address,
  _seller: Address,
  _amount: BigInt,
  _tokenId: BigInt,
  timestamp: BigInt
): Sold {
  let soldEvent = changetype<Sold>(newMockEvent())

  soldEvent.parameters = new Array()

  soldEvent.parameters.push(
    new ethereum.EventParam("_nft", ethereum.Value.fromAddress(_nft))
  )
  soldEvent.parameters.push(
    new ethereum.EventParam("_buyer", ethereum.Value.fromAddress(_buyer))
  )
  soldEvent.parameters.push(
    new ethereum.EventParam("_seller", ethereum.Value.fromAddress(_seller))
  )
  soldEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  soldEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  soldEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return soldEvent
}

export function createStartedAuctionEvent(
  _nft: Address,
  startTime: BigInt,
  endTime: BigInt,
  tokenId: BigInt,
  owner: Address,
  price: BigInt
): StartedAuction {
  let startedAuctionEvent = changetype<StartedAuction>(newMockEvent())

  startedAuctionEvent.parameters = new Array()

  startedAuctionEvent.parameters.push(
    new ethereum.EventParam("_nft", ethereum.Value.fromAddress(_nft))
  )
  startedAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  startedAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )
  startedAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  startedAuctionEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  startedAuctionEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return startedAuctionEvent
}
