import { Metadata } from "next"
import Image from "next/image"


export const metadata: Metadata = {
  title: "Beon Nails - 1933 State Route 35 Unit 104, NJ 07719",
  description:
    "Happy Hour and more...",
}
export default async function News() {
    return (
    <>
      <div className="w-full bg-gray-300 text-black grid gap-4 xsmall:gap-6 font-futura text-xs">
        <div className="Banner w-full h-fit xl:h-[300px] object-bottom overflow-hidden mx-auto">
          <Image src="https://webnailsbucket.s3.amazonaws.com/beon/news-banner2.png" 
          alt="banner" 
          width={1440} 
          height={300} 
          style={{
            width: '100%',
            height: 'auto',
          }}/>
        </div>

        <div className="w-full max-w-6xl min-h-screen mx-auto grid place-content-start gap-4 md:gap-6">
          <h1 className="Services-title font-normal text-xl text-black md:text-2xl uppercase drop-shadow-xl">BLOGGER BEAUTY</h1>
      
          <h1 className="Services-title font-normal text-xl text-black md:text-2xl uppercase drop-shadow-xl">NEWS AND INSPIRATION</h1>

        </div>
      
      </div>
    </>
)}
