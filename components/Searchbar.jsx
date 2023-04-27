"use client"
import React, { useState, useEffect } from "react"
import styled from "styled-components"

const MIN_WIDTH = 245 // Minimum width of the component
const MAX_WIDTH = 335 // Maximum width of the component
const BREAKPOINT = 688 // Breakpoint where the component appears

const Wrapper = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  min-width: ${MIN_WIDTH}px;
  max-width: ${MAX_WIDTH}px;
`

const Searchbar = () => {
  

  return (
    <Wrapper
      
      className="bg-gray-100 hidden md:block rounded-lg overflow-hidden"
    >
      <input
        type="search"
        placeholder="Search"
        className="h-[40px] w-full rounded-lg px-4 bg-gray-100"
      />
    </Wrapper>
  )
}

export default Searchbar
