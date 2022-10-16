import { CollectionCreated as CollectionCreatedEvent } from "../generated/NakshFactory/NakshFactory"
import { Collection } from "../generated/schema"
import { NakshNFT } from "../generated/templates"

export function handleCollectionCreated(event: CollectionCreatedEvent): void {
  let entity = new Collection(
    event.params.nftAddress.toHexString()
  )
  entity.creator = event.params.creator
  entity.name = event.params.name
  entity.symbol = event.params.symbol
  entity.nftAddress = event.params.nftAddress

  entity.save()

  NakshNFT.create(event.params.nftAddress)
}
