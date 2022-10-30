import { Address, BigInt } from "@graphprotocol/graph-ts"
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
    nft.quantity = BigInt.fromI32(1)
    nft.erc721 = true

    nft.save()
}

export function handleTransfer(event: Transfer): void {
    const nft = NFTData.load(`${event.address.toHexString()}-${event.params.tokenId.toString()}`)

    if(!nft) return

    if(event.params.to != Address.fromHexString("0xce827749f2438767019Aa1802621Eb65b3d5DCf1")) {
        nft.owner = event.params.to
    
        nft.save()
    }
}