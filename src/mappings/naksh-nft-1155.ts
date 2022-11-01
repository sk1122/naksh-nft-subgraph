import { Address, BigDecimal, BigInt, store } from "@graphprotocol/graph-ts"
import { NFTData } from "../../generated/schema"
import { Mint, TransferSingle } from "../../generated/templates/Naksh1155NFT/Naksh1155NFT"

export function handleMint(event: Mint): void {
    const nft = new NFTData(`${event.params.creator.toHexString()}-${event.address.toHexString()}-${event.params.tokenId.toString()}`)
    const staleNft = new NFTData(`0xeD96FBd91FD7D942Bb8635B44Bf5aE5DFfdE3519-${event.address.toHexString()}-${event.params.tokenId.toString()}`)

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
    nft.quantity = event.params.amount
    nft.erc721 = false
    nft.isVideo = event.params.isVideo
    nft.videoUri = event.params.videoURI

    staleNft.nftAddress = event.address
    staleNft.tokenId = event.params.tokenId
    staleNft.tokenUri = event.params.imgURI
    staleNft.title = event.params.title
    staleNft.description = event.params.description
    staleNft.artistName = event.params.creator.toHexString()
    staleNft.creator = event.params.creator
    staleNft.owner = Address.fromHexString('0xeD96FBd91FD7D942Bb8635B44Bf5aE5DFfdE3519')
    staleNft.artistName = event.params.artistName
    staleNft.artistImg = event.params.artistImg
    staleNft.quantity = event.params.amount
    staleNft.erc721 = false
    staleNft.isVideo = event.params.isVideo
    staleNft.videoUri = event.params.videoURI

    nft.save()
    staleNft.save()
}

export function handleTransferSingle(event: TransferSingle): void {
    const nft = NFTData.load(`${event.params.from.toHexString()}-${event.address.toHexString()}-${event.params.id.toString()}`)

    if(!nft) return

    if(event.params.to != Address.fromHexString("0xeD96FBd91FD7D942Bb8635B44Bf5aE5DFfdE3519")) {
        const newNft = NFTData.load(`${event.params.to.toHexString()}-${event.address.toHexString()}-${event.params.id.toString()}`)

        if(newNft) {
            newNft.quantity = newNft.quantity.plus(event.params.value)

            newNft.save()
        } else {
            const newNft = new NFTData(`${event.params.to.toHexString()}-${event.address.toHexString()}-${event.params.id.toString()}`)
            
            newNft.artistImg = nft.artistImg
            newNft.artistName = nft.artistName
            newNft.nftAddress = nft.nftAddress
            newNft.tokenId = nft.tokenId
            newNft.creator = nft.creator
            newNft.description = nft.description
            newNft.title = nft.title
            newNft.tokenUri = nft.tokenUri
            newNft.owner = event.params.to
            newNft.quantity = event.params.value
            newNft.erc721 = false
            newNft.isVideo = nft.isVideo
            newNft.videoUri = nft.videoUri
    
            newNft.save()
        }
    }
}