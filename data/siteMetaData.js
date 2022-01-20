const siteMetaData = {
    title: 'Next.js Solution',
    author: 'Author: Cormac Egan',
    authorDescription: 'This is my sample solution to the given design brief using NextJS.',
    overview: 'Please click on any of the items in Documenation Links to view the source documentaion used during this implementation',
    documentationTitle: 'Documentation Links',
    documentation: [
        {
            name: "nextJS",
            documentation: "https://nextjs.org/docs/getting-started",
            landingPage: false
        },
        {
            name: "tailwindCSS",
            documentation: "https://tailwindcss.com/docs/guides/nextjs",
            landingPage: false
        },
        {
            name: "coinGecko",
            documentation: "https://www.coingecko.com/en/api/documentation",
            landingPage: true
        },
        {
            name: "coinMarketCap",
            documentation: "https://coinmarketcap.com/api/documentation/v1/",
            landingPage: true
        },
        {
            name: "ethereum",
            documentation: "https://ethereum.org/en/developers/docs/standards/tokens/erc-20/",
            landingPage: false
        },
        {
            name: "ethers",
            documentation: "https://docs.ethers.io/v5/",
            landingPage: false
        },
        {
            name: "etherscan",
            documentation: "https://docs.etherscan.io/",
            landingPage: false
        }, 
        {
            name: "infura",
            documentation: "https://infura.io/docs/ethereum",
            landingPage: false
        }
    ],
    externalAPIs:{
        coinGeckoFecthListURL: "https://api.coingecko.com/api/v3/coins/list",
        coinGeckoFecthCoinURL:"https://api.coingecko.com/api/v3/coins/",
        coinMarketCapApiKey:"7cb6734b-e234-4388-82d8-f7fdb867427d",
        coinMarketCapFetchCoinURL:"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        coinMarketCapFetchCoinURLWithKey: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=7cb6734b-e234-4388-82d8-f7fdb867427d",

    },
    api:{
        coinGeckoFetch: "/api/coinGecko",
        coinMarketCapFetch: "/api/coinMarketCap"
    }
}

module.exports = siteMetaData
