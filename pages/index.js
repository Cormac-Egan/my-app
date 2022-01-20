import siteMetaData from "../data/siteMetaData"
import LandingCard from '../components/landingCard'
export default function Home() {
  return (
    <>
      {
        siteMetaData.documentation.map((item) => {
          if (item.landingPage)
          {
            return(<LandingCard page={item.name} link={item.documentation} key={item.name} />)
          }
      })}
    </>
  )
}