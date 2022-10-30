import { BigInt, store } from "@graphprotocol/graph-ts"
import {
  NakshMarketplace,
  Bidding,
  EndedAuction,
  OwnershipTransferred,
  SalePriceSet,
  Sold,
  StartedAuction
} from "../generated/NakshMarketplace/NakshMarketplace"
import { BidHistory, NFTAuction, NFTData, SaleData, SoldNFT } from "../generated/schema"

export function handleBidding(event: Bidding): void {
  let bid = new BidHistory(`${event.params._bidder.toHexString()}-${event.params._tokenId.toString()}`)

  bid.bidder = event.params._bidder
  bid.amount = event.params._amount
  bid.timestamp = event.params.timestamp
  bid.nftAuction = `${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`

  bid.save()

  let auction = NFTAuction.load(`${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`)
  if(!auction) return

  let bids = auction.bids

  if(!bids) {
    bids = [bid.id]

    auction.bids = bids

    auction.save()
  } else {
    bids.push(bid.id)

    auction.bids = bids

    auction.save()
  }
}

export function handleEndedAuction(event: EndedAuction): void {
  let entity = SaleData.load(`${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`)
  if(!entity) return

  let nft = NFTData.load(entity.nft)
  if(!nft) return

  let soldEntity = new SoldNFT(`${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`)
  soldEntity.buyer = event.params._buyer
  soldEntity.seller = nft.creator
  soldEntity.price = event.params.highestBID
  soldEntity.nft = nft.id
  soldEntity.timestamp = event.params.timestamp
  soldEntity.quantity = BigInt.fromI32(1)

  store.remove('SaleData', entity.id)
  soldEntity.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleSalePriceSet(event: SalePriceSet): void {
  let entity = new SaleData(`${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`)

  entity.salePrice = event.params._price
  entity.saleType = "0"
  entity.tokenFirstSale = event.params.tokenFirstSale
  entity.nft = `${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`
  entity.isOnSale = true
  entity.timestamp = event.params.currentTimestamp
  entity.quantity = BigInt.fromI32(1)

  let nftEntity = NFTData.load(`${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`)

  if(!nftEntity) return

  nftEntity.saleData = entity.id

  nftEntity.save()

  entity.save()
}

export function handleSold(event: Sold): void {
  let entity = SaleData.load(`${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`)
  if(!entity) return

  let soldEntity = new SoldNFT(`${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`)
  soldEntity.buyer = event.params._buyer
  soldEntity.seller = event.params._seller
  soldEntity.price = entity.salePrice
  soldEntity.nft = `${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`
  soldEntity.timestamp = event.params.timestamp
  soldEntity.quantity = BigInt.fromI32(1)

  store.remove('SaleData', entity.id)
  soldEntity.save()

  let nftEntity = NFTData.load(`${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`)

  if(!nftEntity) return

  nftEntity.saleData = ""
  nftEntity.auction = ""

  nftEntity.save()
}

export function handleStartedAuction(event: StartedAuction): void {
  let auctionEntity = new NFTAuction(`${event.params._nft.toHexString()}-${event.params.tokenId.toString()}`)
  auctionEntity.endTime = event.params.endTime
  auctionEntity.startTime = event.params.startTime
  auctionEntity.tokenId = event.params.tokenId
  auctionEntity.nft = `${event.params._nft.toHexString()}-${event.params.tokenId.toString()}`
  auctionEntity.owner = event.params.owner
  auctionEntity.price = event.params.price
  auctionEntity.quantity = BigInt.fromI32(1)

  auctionEntity.save()
  
  let entity = new SaleData(`${event.params._nft.toHexString()}-${event.params.tokenId.toString()}`)

  entity.salePrice = event.params.price
  entity.saleType = "1"
  entity.tokenFirstSale = false
  entity.nft = `${event.params._nft.toHexString()}-${event.params.tokenId.toString()}`
  entity.isOnSale = true
  entity.auction = auctionEntity.id
  entity.timestamp = event.params.currentTimestamp
  entity.quantity = BigInt.fromI32(1)

  entity.save()

  let nftEntity = NFTData.load(`${event.params._nft.toHexString()}-${event.params.tokenId.toString()}`)

  if(!nftEntity) return

  nftEntity.saleData = entity.id
  nftEntity.auction = auctionEntity.id

  nftEntity.save()
}
