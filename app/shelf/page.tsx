/* eslint-disable react/no-unescaped-entities */
"use client"

import { Web3Button } from '@web3modal/react'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [hasShelf, setHasShelf] = useState(false)

  const handleOnSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setHasShelf(true)
  }

  return (
    <main className="flex min-h-screen flex-col items-right justify-left px-48 py-36">
      <div className="z-10 w-full items-right justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            rel="noopener noreferrer"
          >

            <Image
              src="/vercel.svg"
              alt="The Shelf Logo"
              className="dark"
              width={60}
              height={24}
              priority
            />
          </a>
        </div>

        <Web3Button className="custom" />
      </div>

      <div className="z-10 w-full items-right justify-between font-mono text-sm lg:flex">
        <Image
          src="/shelf.svg"
          alt="The Shelf Asset"
          className="dark p-20"
          width={426}
          height={450}
        />

        { !hasShelf ?
          <div className="items-right">
            <h1 className={`mb-5 mt-32 text-2xl font-semibold head-line`}>
              Mint your shelf to<br />equip your reputation
            </h1>

            <p className="text-black mb-5 text-1xl inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              This NFT is a soulbound token, that is,<br />it is non-transferable, along with its items
            </p>

            <div>
              <button onClick={handleOnSubmit} className="bg-[#91CDE5] text-white py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline">Mint Shelf</button>
            </div>
          </div>
          :
          <div className="items-right">
            <h1 className={`mb-5 mt-32 text-2xl font-semibold head-line`}>
              Congrats!
            </h1>

            <p className="text-black mb-5 text-1xl inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              Now you're a shelf owner, equip your reputation<br />by participating in the web3 ecosystem
            </p>

            <div>
              <a href="/equip">
                <button className="bg-[#91CDE5] text-white py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline">Equip Shelf</button>
              </a>
            </div>
          </div>
        }
      </div>
    </main>
  )
}
