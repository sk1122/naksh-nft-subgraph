import { NFTData } from "../../generated/schema"
import { Mint, Transfer } from "../../generated/templates/NakshNFT/NakshNFT"

export function handleMint(event: Mint): void {
    const nft = new NFTData(`${event.address.toHexString()}-${event.params.tokenId.toString()}`)

    nft.nftAddress = event.address
    nft.tokenId = event.params.tokenId
    nft.tokenUri = event.params.tokenURI
    nft.title = event.params.title
    nft.description = event.params.description
    nft.artistName = event.params.creator.toHexString()
    nft.creator = event.params.creator
    nft.owner = event.params.creator
    nft.artistName = event.params.artistName
    nft.artistImg = event.params.artistImg

    nft.save()
}

export function handleTransfer(event: Transfer): void {
    const nft = NFTData.load(`${event.address.toHexString()}-${event.params.tokenId.toString()}`)

    if(!nft) return

    nft.owner = event.params.to

    nft.save()
}