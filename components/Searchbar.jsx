"use client"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import {FiSearch} from 'react-icons/fi'



const Wrapper = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`

const Searchbar = () => {
  return (
    <Wrapper className="bg-gray-100 dark:bg-neutral-700 hidden md:block rounded-full overflow-hidden max-w-[40%] relative lg:max-w-[384px]">
      <input
        type="search"
        placeholder="Search"
        className="h-[40px] border focus:border-amber-400 w-full rounded-full px-4 bg-gray-100 dark:bg-neutral-800 dark:placeholder:text-stone-500 dark:border-neutral-600"
      />
      {/* search icon */}
      <FiSearch className="absolute top-1/2 right-4 text-2xl text-stone-500 -translate-y-1/2" />
      {/* vertical line */}
      <div className="absolute rounded top-1/2 -translate-y-1/2 right-14 w-[1px] h-[80%] bg-gray-300 dark:bg-neutral-600" />

    </Wrapper>
  )
}

export default Searchbar
