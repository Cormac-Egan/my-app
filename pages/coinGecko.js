import ObjectRenderer from "../components/objectRenderer";
import { useState } from "react"
import siteMetaData from "../data/siteMetaData"

export default function CoinGecko(props) {

  const [list, setList] = useState(props);

  const [searchInput, setSearchInput] = useState('');

  const [filteredResults, setFilteredResults] = useState([]);

  const fetchData = async () => {
    const res = await fetch("/api/coinGecko")
    const data = await res.json()
    return setList({ coins: data });
  };

  const handleClick = (event) => {
    event.preventDefault();
    fetchData();
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = list.coins.filter((item) => {
        if (item.symbol.toLowerCase().includes(searchInput.toLowerCase())) {
          return (Object.values(item))
        }
      })
      setFilteredResults(filteredData)
      
    }
    else {
      setFilteredResults(list.coins)
    }
  }

  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}><a>Click to refresh data</a></button>
      
      <input icon='search'
        placeholder='Search...'
        onChange={(e) => searchItems(e.target.value)}
      />
      <div className="w-full md:w-3/5 mx-auto p-8">
        <div className="shadow-md">

          {filteredResults?.map((obj) => {
            return (
              <ObjectRenderer myObject={obj} />
            );

          })}

        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(siteMetaData.externalAPIs.coinGeckoFecthCoinURL)
  const data = await res.json()
  return { props: { coins: data } }
}