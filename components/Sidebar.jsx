import Image from "next/image"
import React from "react"
import {RiHome2Fill} from "react-icons/ri"
import {  BsPeople } from "react-icons/bs"
import { MdLiveTv } from "react-icons/md"
import { Rubik, Heebo } from "next/font/google"
import Link from "next/link"
const rubik = Rubik({ subsets: ["latin"] })
const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const icons1 = [
  {
    icon: <RiHome2Fill size={23} className="text-[#FE2C55] text-2xl" />,
    name: "For You",
  },
  {
    icon: <BsPeople size={23} />,
    name: "Following",
  },
  {
    icon: <MdLiveTv size={23} />,
    name: "LIVE",
  },
]

const suggestedAccounts = [
  {
    avatar: "/suggested/therock.png",
    username: "therock",
    name: "The Rock",
  },
  {
    avatar: "/suggested/samsmith.png",
    username: "samsmith",
    name: "Sam Smith",
  },
  {
    avatar: "/suggested/karolg.png",
    username: "karolg",
    name: "Karol G",
  },
  {
    avatar: "/suggested/selenagomez.png",
    username: "selenagomez",
    name: "Selena Gomez",
  },
]

const followingAccounts = [
  {
    avatar: "/following/following1.png",
    username: "jonlovitz",
    name: "Jon Lovitz",
  },
  {
    avatar: "/following/following2.png",
    username: "ath99",
    name: "Amber Jones",
  },
  {
    avatar: "/following/following3.png",
    username: "parisbryanne",
    name: "Paris Bryanne",
  },
  {
    avatar: "/following/following4.png",
    username: "lexfridman",
    name: "Lex Fridman",
  },
  {
    avatar: "/following/following5.png",
    username: "yummyanna",
    name: "Yummy Anna",
  },
  {
    avatar: "/following/following6.png",
    username: "bunzfordays",
    name: "Faith",
  },
  {
    avatar: "/following/following7.png",
    username: "valquickly",
    name: "Sarah Hart",
  },
  {
    avatar: "/following/following8.png",
    username: "mattwalsh",
    name: "Matt Walsh",
  },
]

const Sidebar = () => {
  return (
    <div className="left-0 hidden xs:block sticky mt-[51px] top-14 overflow-y-scroll w-[88px] lg:w-[232px] border-r lg:border-r-0 border-gray-100">
      <div
        id="sidebar"
        className="grid justify-items-center pb-3 pt-5 h-[545px] w-full overflow-y-scroll overflow-visible snap-mandatory px-2"
      >
        <ul className="flex items-center pb-2 flex-col justify-start gap-1 w-full border-b">
          {icons1.map((cell, index) => (
            <li
              key={index}
              className={`min-w-[55px] w-full  ${
                cell.name === "Following" && "bg-gray-100 lg:bg-white"
              }`}
            >
              <Link href={`/`} className="flex items-center relative justify-center lg:w-full lg:justify-start h-[48px] rounded w-full hover:bg-gray-100 lg:gap-4 font-semibold   place-items-center lg:px-4">
                {cell.icon}
                <div className="lg:relative">
                  <p
                    style={heebo.style}
                    className={`hidden font-bold lg:block text-lg ${
                      cell.name === "For You" && "text-[#FE2C55]"
                    }`}
                  >
                    {cell.name}
                  </p>
                  {cell.name === "Following" && (
                    <div className="absolute top-2 lg:translate-x-5 right-2 w-[6px] h-[6px] rounded-full bg-[#FE2C55]"></div>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col w-full py-2 lg:pt-0 gap-1 border-b">
          <h3 className="text-sm font-semibold px-2 hidden  lg:flex items-center h-[40px] text-neutral-600 opacity-80">
            Suggested accounts
          </h3>
          {suggestedAccounts.map((user, index) => (
            <li
              key={index}
              className="hover:bg-gray-100 w-[55px] lg:w-full h-[48px] flex items-center justify-center lg:justify-start lg:gap-2 px-2 rounded cursor-pointer"
            >
              <Image
                src={user.avatar}
                width={34}
                className="rounded-full"
                height={34}
                alt=""
              />
              <div className="hidden lg:flex flex-col text-sm">
                <div className="relative flex gap-1">
                  <p className="font-semibold">{user.username}</p>
                  <Image src="/tick.png" width={18} height={18} alt="" />
                </div>
                <p className="text-gray-500 text-xs">{user.name}</p>
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col w-full py-2 lg:pt-0 gap-1">
          <h3 className="text-sm font-semibold px-2 hidden  lg:flex items-center h-[40px] text-neutral-600 opacity-80">
            Following accounts
          </h3>
          {followingAccounts.map((user, index) => (
            <li
              key={index}
              className="hover:bg-gray-100 w-[55px] lg:w-full h-[48px] flex items-center justify-center lg:justify-start lg:gap-2 px-2 rounded cursor-pointer"
            >
              <Image
                src={user.avatar}
                width={34}
                className="rounded-full"
                height={34}
                alt=""
              />
              <div className="hidden lg:flex flex-col text-sm">
                <div className="relative flex gap-1">
                  <p className="font-semibold">{user.username}</p>
                  <Image src="/tick.png" width={18} height={18} alt="" />
                </div>
                <p  className="text-gray-500 text-xs">
                  {user.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
