"use client"

import { Web3Button } from '@web3modal/react'
import Image from 'next/image'

const handleOnSubmit = (e: { preventDefault: () => void }) => {
  e.preventDefault()
  alert('Chama o contratinho do pai')
}

const redirectGithub = () => {
  window.open("https://github.com/global-reputation-protocol/the-shelf")
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-left px-48 py-36">
      <div className="z-10 w-full items-left justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://instagram.com/danimim"
            target="_blank"
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

      <h1 className={`mb-5 mt-32 text-2xl font-semibold head-line`}>
        Say hi to the governance <br />engagement
      </h1>
      <p className="mb-5 text-1xl inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        The Shelf is a global protocol that allows DAOs to track reputation
      </p>

      <div>
        <button onClick={handleOnSubmit} className="bg-[#91CDE5] text-white py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline">Mint Shelf</button>
        <button onClick={redirectGithub} className="bg-[#F3D100] ml-2 text-white py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline">Github</button>
      </div>
    </main>
  )
}
