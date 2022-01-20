import siteMetaData from "../../data/siteMetaData"
import Cors from "cors";

const cors = Cors({methods:["GET","HEAD"],});

function runMiddleWare(req, res, fn){
    return new Promise((resolve, reject) => {
        fn(req, res, (result)=>{
            if(result instanceof Error)
            {
                return reject(result)
            }
            return resolve(result);
        });
    });
}

export async function handler(req, res){
    /*const protocol = req.headers['x-forwarded-proto'] || 'http'
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ''*/

    await runMiddleWare(req, res, cors);
    //let apiResponse = await fetch(baseUrl +siteMetaData.externalAPIs.coinMarketCapFetchCoinURLWithKey);
    let apiResponse = await fetch(siteMetaData.externalAPIs.coinMarketCapFetchCoinURLWithKey);
    let data = await apiResponse.json();
    return res.send({ status: "success", data: data.data })
}

export default handler;