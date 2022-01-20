import siteMetaData from "../data/siteMetaData"
import DocumentationLinks from "./documentationLinks"
export default function Footer() {
    return (
        <footer className="w-auto p-4 bottom-0 h-auto relative bg-gray-600 ">
            <div className="lg:flex  lg:mt-3 md:mx-12 lg:mx-28 lg:justify-between">
                <div className="mb-4 lg:columns-1 w-96">
                    <p className="text-white font-bold mb-1 mt-3">{siteMetaData.author}</p>
                    <p className="text-gray-200 text-sm">{siteMetaData.authorDescription}</p>
                </div>
                <div className="lg:mt-3 mb-4">
                    <h3 className="text-white font-bold mb-2 lg:mb-4"> Documentation Links:</h3>
                    <div className="">
                        <div className=" flex lg:items-center ">
                            <div className="lg:container lg:max-w-screen-lg ">
                                <div>
                                    <div className="lg:flex lg:flex-wrap gap-2 ">
                                        {
                                            siteMetaData.documentation.map((link) => {
                                                return (
                                                    <DocumentationLinks docName={link.name} docLink={link.documentation} key={link.name} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:mt-3 mb-4">
                    <h3 className="text-white font-bold mb-2 lg:mb-2">Overview</h3>
                    <div className="mb-4 lg:columns-1 w-96">
                        <p className="text-gray-200 text-sm">{siteMetaData.overview}</p>
                    </div>
                </div>                        
                
            </div>
            <div>
                <div className="flex justify-center mt-2">
                    <p className="text-gray-400"> Copyright &copy;
                        {new Date().getFullYear()} All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}