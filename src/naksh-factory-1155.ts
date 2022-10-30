import { CollectionCreated as CollectionCreatedEvent } from "../generated/Naksh1155Factory/Naksh1155Factory"
import { Collection } from "../generated/schema"
import { Naksh1155NFT } from "../generated/templates"
import { Naksh1155NFT as NakshContract } from "../generated/templates/Naksh1155NFT/Naksh1155NFT"

export function handleCollectionCreated(event: CollectionCreatedEvent): void {
  let nakshNft = NakshContract.bind(event.params.nftAddress)

  if(!nakshNft) return

  let collectionDetails = nakshNft.getCollectionDetails()
  let royalties = nakshNft.getRoyalties()
  
  let entity = new Collection(
    event.params.nftAddress.toHexString()
  )
  entity.creator = event.params.creator
  entity.name = collectionDetails.name
  entity.symbol = event.params.symbol
  entity.nftAddress = event.params.nftAddress
  entity.logo = collectionDetails.logo
  entity.coverUri = collectionDetails.cover[0].toString()
  entity.isGradient = collectionDetails.cover[1].toBoolean()
  entity.royaltyPerc = royalties.value1
  entity.description = collectionDetails.about
  entity.artistName = event.params.artistName
  entity.artistImg = event.params.artistImg
  entity.twitter = collectionDetails.social.twitter
  entity.facebook = collectionDetails.social.facebook
  entity.instagram = collectionDetails.social.instagram
  entity.website = collectionDetails.social.website
  entity.erc721 = false

  entity.save()

  Naksh1155NFT.create(event.params.nftAddress)
}
