import Image from "next/image"
import { FiMessageSquare, FiPlay, FiShare } from "react-icons/fi"
import { useMemo } from "react"
import {FaHeart} from 'react-icons/fa'

const Videos = () => {
  const images = [
    "/toks/tok1.jpg",
    "/toks/tok2.jpg",
    "/toks/tok3.jpg",
    "/toks/tok4.jpg",
    "/toks/tok5.jpg",
    "/toks/tok6.jpg",
    "/toks/tok7.jpg",
    "/toks/tok8.jpg",
    "/toks/tok9.jpg",
    "/toks/tok10.jpg",
  ]
  const tiktoks = images.map((image, i) => {
    const avatars = [
      "/avatars/avatar1.jpeg.png",
      "/avatars/avatar2.jpeg.png",
      "/avatars/avatar3.jpeg.png",
      "/avatars/avatar4.jpeg.png",
      "/avatars/avatar5.jpeg.png",
      "/avatars/avatar6.jpeg.png",
      "/avatars/avatar7.jpeg.png",
      "/avatars/avatar8.jpeg.png",
      "/avatars/avatar9.jpeg.png",
      "/avatars/avatar10.jpeg.png",
    ]
    const firstNames = [
      "Alice",
      "Bob",
      "Charlie",
      "Dave",
      "Emma",
      "Frank",
      "Grace",
      "Henry",
      "Ivy",
      "Jack",
    ]
    const lastNames = [
      "Smith",
      "Jones",
      "Garcia",
      "Davis",
      "Wilson",
      "Lee",
      "Martinez",
      "Taylor",
      "Clark",
      "Perez",
    ]

    const randomNames = []

    for (let i = 0; i < 10; i++) {
      const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length)
      const randomLastNameIndex = Math.floor(Math.random() * lastNames.length)
      const randomFullName = `${firstNames[randomFirstNameIndex]} ${lastNames[randomLastNameIndex]}`
      randomNames.push(randomFullName)
    }

    const adjectives = [
      "happy",
      "sad",
      "funny",
      "serious",
      "angry",
      "brave",
      "calm",
      "clever",
      "daring",
      "eager",
    ]
    const nouns = [
      "panda",
      "unicorn",
      "tiger",
      "lion",
      "shark",
      "eagle",
      "owl",
      "wolf",
      "fox",
      "panther",
    ]

    const randomUsernames = []

    for (let i = 0; i < 10; i++) {
      const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length)
      const randomNounIndex = Math.floor(Math.random() * nouns.length)
      const randomUsername = `${adjectives[randomAdjectiveIndex]}${nouns[randomNounIndex]}`
      randomUsernames.push(randomUsername)
    }

    const captions = [
      "Life is too short to not eat dessert first 🍩 Indulge yourself, you deserve it! #TreatYoSelf #Yum",
      "I'm not arguing, I'm just explaining why I'm right 🤓 Let's have a debate and see who wins! #DebateMe #Winning",
      "I'm not lazy, I'm just on energy-saving mode ⚡️ Taking some time to recharge my batteries, back to crushing it soon! #ChillVibes #NapTime",
      "I don't always take selfies, but when I do, I make sure my pet is in them 🐶 My furry BFF always steals the show! #PetLove #SelfieTime",
      "Don't be a salty potato chip, be a sweet potato 🍠 Life's too short to not enjoy the sweeter things! #PositiveVibes #HealthyEating",
      "I may not be a morning person, but I'm definitely a coffee person ☕️ Can't start my day without my caffeine fix! #ButFirstCoffee #CaffeineAddict",
      "I'm not procrastinating, I'm just marinating on my ideas 🤔 Letting my creativity brew for the perfect project! #CreativeGenius #Inspiration",
      "Life is like a box of chocolates, you never know what you're gonna get 🍫 Embrace the unexpected and enjoy the journey! #ForrestGump #Philosophy",
      "I don't always dance, but when I do, I prefer to do it like no one's watching 🕺 Let's get groovy and express ourselves freely! #DanceLikeNoOneIsWatching #Groove",
      "Be yourself, everyone else is already taken 🦄 Unleash your unique personality and let your true self shine! #Unique #Authenticity",
    ]
    return {
      image: image,
      avatar: avatars[i],
      username: randomUsernames[i],
      name: randomNames[i],
      caption: captions[i],
    }
  })
  const videos = useMemo(() => {
    // This function will only be called once, and the result will be cached
    return tiktoks
  }, [tiktoks])

  return (
    <div className="mt-[56px] dark:bg-neutral-900    w-full px-4 lg:px-0  pb-8  grid   place-items-center lg:justify-items-center md:-ml-[88px] lg:-ml-[232px]">
      <div
        id="video-container"
        className="grid place-items-center gap-8 h-[545px] pb-8 w-full snap-mandatory justify-items-center overflow-y-scroll snap-y"
      >
        {tiktoks.map((image, i) => (
          <Tok key={i} {...image} />
        ))}
      </div>
    </div>
  )
}

export default Videos

const Tok = ({ username, name, caption, image, avatar }) => {
  return (
    <div className="relative mt-7 flex  flex-col items-center justify-center">
      {/* desktop info */}
      <div className="hidden lg:block absolute left-full ml-3 top-5 order-2 rounded-xl w-[360px] mx-auto ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-full h-14 w-14 mb-2 cursor-pointer">
              <Image
                src={avatar}
                alt="av"
                width={40}
                height={40}
                className="rounded-full w-full h-full"
              />
            </div>
            <div className="flex flex-col  -translate-y-1">
              <p className="hover:underline font-semibold text-[16px] cursor-pointer dark:text-white">
                {username}
              </p>
              <p className="text-neutral-600 text-sm cursor-pointer -translate-y-0.5 dark:text-gray-200">
                {name}
              </p>
            </div>
          </div>
          <button className="border-2 hover:bg-pink-50 border-[#FE0F51] rounded text-[#FE0F51] font-semibold py-1 px-6 text-sm self-start cursor-pointer">
            Follow
          </button>
        </div>
        <p className="text-sm dark:text-stone-100">{caption}</p>
      </div>
      {/* top when mobile */}
      <div className="left-0 px-2 absolute snap-start top-5 max-w-[320px] w-full max-h-[100px] z-20 rounded-xl lg:hidden  ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-full cursor-pointer h-14 w-14 mb-2">
              <Image
                src={avatar}
                alt="av"
                width={40}
                height={40}
                className="rounded-full w-full h-full"
              />
            </div>
            <div className="flex flex-col text-sm -translate-y-1">
              <p className="font-semibold cursor-pointer">{username}</p>
              <p className="text-xs text-neutral-600 cursor-pointer">{name}</p>
            </div>
          </div>
          <button className="border-2 border-red-400 cursor-pointer rounded text-red-400 font-semibold py-1 px-6 text-sm self-start">
            Follow
          </button>
        </div>
      </div>
      {/* video */}
      <div className="h-[545px] mt-1 rounded-xl w-[305px] bg-gray-200 snap-start relative overflow-hidden cursor-pointer">
        <Image
          className="h-full w-full object-cover rounded-xl"
          src={image}
          width={305}
          height={545}
          alt="tok"
        />
        <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-all duration-100"></div>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg ">
          <FiPlay size={60} className="text-white" />
        </div>
      </div>
      {/* buttons */}
      <div className="hidden sm:flex flex-col gap-3 absolute bottom-1 left-full ml-3">
        {/* heart icon */}
        <div className="flex flex-col justify-center items-center gap-2 cursor-pointer ">
          <div className="grid place-items-center rounded-full w-[32px] h-[32px] lg:scale-[1.35] lg:mb-2.5 bg-gray-200">
            <FaHeart size={20} className="text-red-500 order-2" />
          </div>
          <p className="text-xs font-bold dark:text-stone-200">329.2k</p>
        </div>
        {/* comment icon */}
        <div className=" cursor-pointer flex flex-col justify-center items-center gap-2">
          <div className="grid place-items-center rounded-full w-[32px] h-[32px] lg:scale-[1.35] lg:mb-2.5 bg-gray-200 lg:mt-2.5">
            <FiMessageSquare size={20} className="text-neutral-600 order-2 " />
          </div>
          <p className="text-xs font-bold dark:text-stone-200">867</p>
        </div>
        {/* share icon  */}
        <div className=" cursor-pointer flex flex-col justify-center items-center gap-2">
          <div className="grid place-items-center rounded-full w-[32px] h-[32px] lg:scale-[1.35] lg:my-2.5 bg-gray-200">
            <FiShare size={20} className="text-neutral-600 order-2" />
          </div>
          <p className="text-xs font-bold dark:text-stone-200">2564</p>
        </div>
      </div>
    </div>
  )
}
