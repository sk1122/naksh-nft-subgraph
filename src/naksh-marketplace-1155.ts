import { BigInt, store } from "@graphprotocol/graph-ts";
import { Cancelled, SalePriceSet, Sold } from "../generated/Naksh1155Marketplace/Naksh1155Marketplace";
import { NFTData, SaleData, SoldNFT } from "../generated/schema";

export function handleSalePriceSet(event: SalePriceSet): void {
  let entity = new SaleData(`${event.params._owner.toHexString()}-${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`)

  entity.salePrice = event.params._price
  entity.saleType = "0"
  entity.tokenFirstSale = event.params.tokenFirstSale
  entity.nft = `${event.params._owner.toHexString()}-${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`
  entity.isOnSale = true
  entity.timestamp = event.params.currentTimestamp
  entity.quantity = event.params._amount

  let nftEntity = NFTData.load(`${event.params._owner.toHexString()}-${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`)

  if(!nftEntity) return

  nftEntity.saleData = entity.id
  nftEntity.quantity = nftEntity.quantity.minus(event.params._amount)

  nftEntity.save()

  entity.save()    
}

export function handleSold(event: Sold): void {
  let entity = SaleData.load(`${event.params._seller.toHexString()}-${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`)
  if(!entity) return

  let nftEntity = NFTData.load(`${event.params._seller.toHexString()}-${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`)
  if(!nftEntity) return

  let soldEntity = new SoldNFT(`${event.params._seller.toHexString()}-${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`)
  soldEntity.buyer = event.params._buyer
  soldEntity.seller = nftEntity.owner
  soldEntity.price = entity.salePrice
  soldEntity.nft = `${event.params._seller.toHexString()}-${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`
  soldEntity.timestamp = event.params.timestamp
  soldEntity.quantity = event.params._amount

  const newNft = NFTData.load(`${event.params._buyer.toHexString()}-${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`)

  if(newNft) {
      newNft.quantity = newNft.quantity.plus(event.params._amount)

      newNft.save()
  } else {
      const newNft = new NFTData(`${event.params._buyer.toHexString()}-${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`)
      
      newNft.artistImg = nftEntity.artistImg
      newNft.artistName = nftEntity.artistName
      newNft.nftAddress = nftEntity.nftAddress
      newNft.tokenId = nftEntity.tokenId
      newNft.creator = nftEntity.creator
      newNft.description = nftEntity.description
      newNft.title = nftEntity.title
      newNft.tokenUri = nftEntity.tokenUri
      newNft.owner = event.params._buyer
      newNft.quantity = event.params._amount
      newNft.erc721 = false
      newNft.isVideo = nftEntity.isVideo
      newNft.videoUri = nftEntity.videoUri

      newNft.save()
  }

  if(entity.quantity.minus(event.params._amount).gt(BigInt.fromI32(0))) {
    entity.quantity = entity.quantity.minus(event.params._amount)
    
    entity.save()
  } else {
    store.remove('SaleData', entity.id)
    nftEntity.saleData = ""
    nftEntity.auction = ""
  
    nftEntity.save()
  }

  soldEntity.save()
}

export function handleCancel(event: Cancelled): void {
  let entity = SaleData.load(`${event.params._seller.toHexString()}-${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`)
  if(!entity) return

  let nftEntity = NFTData.load(`${event.params._seller.toHexString()}-${event.params._nft.toHexString()}-${event.params._tokenId.toString()}`)
  if(!nftEntity) return

  nftEntity.quantity = nftEntity.quantity.plus(entity.quantity)

  nftEntity.save()

  store.remove('SaleData', entity.id)
}