import { Address, BigInt } from "@graphprotocol/graph-ts"
import { NFTData } from "../../generated/schema"
import { Mint, Transfer } from "../../generated/templates/NakshNFT/NakshNFT"

export function handleMint(event: Mint): void {
    const nft = new NFTData(`${event.address.toHexString()}-${event.params.tokenId.toString()}`)

    nft.nftAddress = event.address
    nft.tokenId = event.params.tokenId
    nft.tokenUri = event.params.imgURI
    nft.title = event.params.title
    nft.description = event.params.description
    nft.artistName = event.params.creator.toHexString()
    nft.creator = event.params.creator
    nft.owner = event.params.creator
    nft.artistName = event.params.artistName
    nft.artistImg = event.params.artistImg
    nft.quantity = BigInt.fromI32(1)
    nft.erc721 = true
    nft.isVideo = event.params.isVideo
    nft.videoUri = event.params.videoURI

    nft.save()
}

export function handleTransfer(event: Transfer): void {
    const nft = NFTData.load(`${event.address.toHexString()}-${event.params.tokenId.toString()}`)

    if(!nft) return

    if(event.params.to != Address.fromHexString("0xa81D760658C15904281eE25a0cf8Ded505A2E172")) {
        nft.owner = event.params.to
    
        nft.save()
    }
}