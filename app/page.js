import Videos from "@/components/Videos"
import Image from "next/image"
import { AiOutlinePlus } from "react-icons/ai"
import { FaRegPaperPlane } from "react-icons/fa"
import { BiMessageAltMinus } from "react-icons/bi"
import Sidebar from "@/components/Sidebar"
import Searchbar from "@/components/Searchbar"

const Home = () => {
  return (
    <>
      <header className="bg-white z-50 fixed top-0 left-0 h-[61px] w-full border-b shadow-sm flex items-center border-gray-200 px-3 xl:pr-5">
        <div className="max-w-[1370px] relative h-14 w-full bg-white mx-auto flex items-center justify-between">
          <Image
            src="/logo.png"
            width={130}
            height={50}
            alt="logo"
            className="xs:ml-2"
          />
          <Searchbar />

          <ul className="flex gap-1 items-center">
            <li className="text-sm rounded border border-gray-200 h-[36px] px-4 gap-1 hidden lg:flex items-center justify-center font-semibold text-[#23252F]">
              <AiOutlinePlus size={19} color="#23252F" />
              Upload
            </li>
            <li className="rounded-lg h-12 w-12 cursor-pointer hover:bg-gray-100 grid place-items-center">
              <FaRegPaperPlane size={24} color="#23252F" />
            </li>
            <li className="rounded-lg h-12 w-12 cursor-pointer hover:bg-gray-100 grid place-items-center mr-1">
              <BiMessageAltMinus size={26} color="#23252F" />
            </li>
            <li className="rounded-lg h-12 w-12 cursor-pointer hover:bg-gray-100 grid place-items-center">
              <Image
                src="/selfie.jpg"
                width={34}
                height={34}
                className="rounded-full"
                alt="avatar"
              />
            </li>
          </ul>
        </div>
      </header>

      <main className="flex max-w-[1370px] mx-auto">
        <Sidebar />
        <Videos />
      </main>
    </>
  )
}

export default Home
