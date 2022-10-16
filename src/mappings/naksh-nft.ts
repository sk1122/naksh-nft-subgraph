import { NFTData } from "../../generated/schema"
import { Mint } from "../../generated/templates/NakshNFT/NakshNFT"

export function handleMint(event: Mint): void {
    const nft = new NFTData(`${event.address.toHexString()}-${event.params.tokenId.toString()}`)

    nft.nftAddress = event.address
    nft.tokenId = event.params.tokenId
    nft.tokenUri = event.params.tokenURI
    nft.title = event.params.title
    nft.description = event.params.description
    nft.artistName = event.params.creator.toHexString()
    nft.creator = event.params.creator

    nft.save()
}