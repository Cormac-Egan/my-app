import Link from 'next/link';

export default function LandingCard({ page, link }) {
    return (
        <>
            <div className="lg:w-1/4 md:w-1/2 w-full p-4">
                <div className="p-8 rounded-xl border border-gray-200">
                    <Link href={page}><a><h4 className="mb-2 text-lg font-semibold"> {page} </h4> </a></Link>
                    <a href={link} target="_blank" rel="noopener noreferrer">View the documentation</a>
                </div>
            </div>
        </>
    )

}