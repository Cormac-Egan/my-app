import Image from "next/image"
import Next from '../public/images/logos/nextJS.png'
import Tailwind from '../public/images/logos/tailwindCSS.png'
import CoinGecko from '../public/images/logos/coinGecko.png'
import CoinMarketCap from '../public/images/logos/coinMarketCap.png'
import Ethereum from '../public/images/logos/ethereum.png'
import Ethers from '../public/images/logos/ethers.png'
import Etherscan from '../public/images/logos/etherscan.png'
import Infura from '../public/images/logos/infura.png'

const items = {
    nextJS: Next,
    tailwindCSS: Tailwind,
    coinGecko: CoinGecko,
    coinMarketCap: CoinMarketCap,
    ethereum: Ethereum,
    ethers: Ethers,
    etherscan: Etherscan,
    infura: Infura,
}

export default function DocumentationLinks({ docName, docLink }) {
    const altText = "Logo for" + docName;
    const docPng = items[docName]
    return (
        <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href={docLink}
        >
            <Image
                src={docPng.src}
                alt={altText}
                width={40}
                height={40}
            />

            < span className="sr-only" > {docName}</span >

        </a>
    )
}