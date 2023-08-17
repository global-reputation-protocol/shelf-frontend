/* eslint-disable react/no-unescaped-entities */
"use client"

import { Web3Button } from '@web3modal/react'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [hasShelf, setHasShelf] = useState(true)
  const [reputationScore, setReputationScore] = useState(0)

  const items = [
    "aave1.svg", "aave2.svg", "aave3.svg", "aave4.svg",
    "lens1.svg", "lens2.svg", "lens3.svg", "gho.svg"
  ]

  const handleEquipItem = (item: any) => {
    const key = item.currentTarget.getAttribute('a-key')

    if (item.currentTarget.classList.value.includes("equipped")) {
      item.currentTarget.classList.remove(`equipped`)
      item.currentTarget.classList.remove(`equipped-position-${key}`)
    } else {
      item.currentTarget.classList.add(`equipped`)
      item.currentTarget.classList.add(`equipped-position-${key}`)
    }

    setReputationScore(document.querySelectorAll('.equipped').length)
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

        <p className={`text-2xl text-black font-semibold head-line`}>
          Reputation Score: <span a-key="score">{reputationScore}</span>
        </p>

        <Web3Button />
      </div>

      <div className="z-10 w-full items-right justify-between font-mono text-sm lg:flex">
        <Image
          src="/shelf.svg"
          alt="The Shelf Asset"
          className="dark p-20 mr-52"
          width={426}
          height={450}
        />

        { !hasShelf ?
          <div className="items-right">
            <h1 className={`mb-5 mt-32 text-2xl font-semibold head-line`}>
              Mint your shelf to<br />equip your reputation
            </h1>

            <p className="text-black mb-5 text-1xl inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              You don't have a shelf yet,<br/>mint a shelf before trying to equip items
            </p>

            <div>
              <a href="/shelf">
                <button className="bg-[#91CDE5] text-white py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline">Mint Shelf</button>
              </a>
            </div>
          </div>
          :
          <div className="items-right catalog">
            <h1 className={`mb-5 mt-24 text-2xl font-semibold head-line`}>
              Equip your shelf!
            </h1>

            <p className="text-black mb-5 text-1xl inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              Click the components to put them on the shelf.<br />Each Shelf has 12 slots
            </p>

            <div className="item-gallery flex-wrap" style={{width: "100%"}}>
              {items.map((item, key) =>
                <Image
                  src={`/items/${item}`}
                  alt=""
                  key={key}
                  onClick={handleEquipItem}
                  className="dark inline ml-2"
                  a-key={key}
                  width={75}
                  height={75}
                />
              )}
            </div>
          </div>
        }
      </div>
    </main>
  )
}
