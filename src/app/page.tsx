import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className='flex flex-col items-center mt-24'>
        <Image alt="Google Logo" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png'} width={300} height={100}/>
        <HomeSearch/>
      </div>
    </>
  );
}
