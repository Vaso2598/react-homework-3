import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between px-10 py-2 items-center w-screen">
        <Link href="/">
          <Image
          src="/svg/airbnb-ar21.svg"
          width={102}
          height={32}
          alt="airbnb logo"
          />
        </Link>
        <div>
          <ul className="flex justify-between gap-4">
            <li className="hover:bg-neutral-100 px-4 py-2.5 rounded-full"><Link href="/">Stays</Link></li>
            <li className="hover:bg-neutral-100 px-4 py-2.5 rounded-full"><Link href="/">Experiences</Link></li>
            <li className="hover:bg-neutral-100 px-4 py-2.5 rounded-full"><Link href="/">Online Experiences</Link></li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/" className="hover:bg-neutral-100 px-4 py-2.5 rounded-full">Airbnb your home</Link>
          <button className="hover:bg-neutral-100 px-4 py-2.5 rounded-full">
            <Image src="/svg/globe-2-svgrepo-com.svg"
            width={16}
            height={16}
            alt="Language"
            />
          </button>
          <button className="hover:drop-shadow-lg">
            <div className="flex justify-around w-20 h-12 border border-neutral-300 rounded-full">
              <Image src="/svg/burger-menu-svgrepo-com.svg"
              width={16}
              height={16}
              alt="user menu"/>
              <Image src="/svg/profile-user-svgrepo-com.svg"
              width={32}
              height={32}
              alt="user menu"/>
            </div>
            <menu className="hidden">
              <li><Link href="/">Sign up</Link></li>
              <li><Link href="/">Log in</Link></li>
              <li><Link href="/">Gift cards</Link></li>
              <li><Link href="/">Airbnb your home</Link></li>
              <li><Link href="/">Help center</Link></li>
            </menu>
          </button>
        </div>
      </nav>
      <div className="flex justify-center">
        <div className="flex justify-between items-center border max-w-3xl border-neutral-300 rounded-full">
          <div><p className="hover:bg-neutral-100 py-5 px-8 rounded-full">Where</p></div>
          <div><p className="hover:bg-neutral-100 py-5 px-8 rounded-full">Check in</p></div>
          <div><p className="hover:bg-neutral-100 py-5 px-8 rounded-full">Check out</p></div>
          <div><p className="hover:bg-neutral-100 py-5 px-8 rounded-full flex items-center">Who
          <button className="rounded-full bg-rose-500 size-12 flex justify-center items-center">
            <Image
            src="/svg/search-svgrepo-com.svg"
            width={16}
            height={16}/>
          </button>
          </p></div>
        </div>
      </div>
    </header>
  )
}

export default Header