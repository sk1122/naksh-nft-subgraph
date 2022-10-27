import { CollectionCreated as CollectionCreatedEvent } from "../generated/NakshFactory/NakshFactory"
import { Collection } from "../generated/schema"
import { NakshNFT } from "../generated/templates"
import { NakshNFT as NakshContract } from "../generated/templates/NakshNFT/NakshNFT"

export function handleCollectionCreated(event: CollectionCreatedEvent): void {
  let nakshNft = NakshContract.bind(event.params.nftAddress)

  if(!nakshNft) return

  let collectionDetails = nakshNft.getCollectionDetails()
  let royalties = nakshNft.getRoyalties()
  
  let entity = new Collection(
    event.params.nftAddress.toHexString()
  )
  entity.creator = event.params.creator
  entity.name = event.params.name
  entity.symbol = event.params.symbol
  entity.nftAddress = event.params.nftAddress
  entity.logo = collectionDetails.logo
  entity.coverUri = collectionDetails.cover[0].toString()
  entity.isGradient = collectionDetails.cover[1].toBoolean()
  entity.royaltyPerc = royalties.value1

  entity.save()

  NakshNFT.create(event.params.nftAddress)
}
