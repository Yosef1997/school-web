'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '@/public/logo.webp'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

const nav = [
  {
    name: 'Beranda',
    path: '/',
  },
  {
    name: 'Tentang Kami',
    path: '/about',
  },
  {
    name: 'Berita',
    path: '/news',
  },
  {
    name: 'Pendaftaran Murid',
    path: '/registration',
  },
  {
    name: 'Karir',
    path: '/career',
  },
]

const Navbar = () => {
  const pathname = usePathname()
  const [showBurger, setShowBurger] = useState<boolean>(false)
  const [initMenu, setInitMenu] = useState<string>('')

  useEffect(() => {
    const currentNav = nav.find((item) => item.path === pathname)
    if (currentNav) {
      setInitMenu(currentNav.name)
    }
  }, [pathname])

  return (
    <div className='sticky top-0 z-10'>
      <div className='bg-navbar flex items-center justify-between px-5 py-2.5 md:px-20 md:py-5 w-full'>
        <Image
          className='h-11 w-auto md:h-14 bg-white rounded-full'
          src={logo}
          alt='school-logo'
        />
        <div className='hidden gap-x-5 items-center bg-navbar text-white lg:flex'>
          {nav.map((e) => {
            return (
              <div key={e.name} className='relative'>
                <Link href={e.path} onClick={() => setInitMenu(e.name)}>
                  {e.name}
                </Link>
                <div
                  className={`absolute bottom-0 border-b-2 ${
                    initMenu === e.name ? 'border-white' : 'border-navbar'
                  } w-1/2 left-1/2 -translate-x-1/2`}
                />
              </div>
            )
          })}
        </div>
        <Menu
          onClick={() => setShowBurger(!showBurger)}
          size={25}
          color='white'
          className='block lg:hidden'
        />
      </div>
      {showBurger ? (
        <div className='flex flex-col bg-light-grey border-b-2 border-navbar  text-secondary p-5 md:px-20 lg:hidden max-h-screen'>
          {nav.map((e, i) => {
            return (
              <div key={i}>
                <Link
                  className='flex items-center justify-between py-1.5'
                  href={e.path}
                >
                  {e.name}
                  <span>
                    <ChevronRight color='black' />
                  </span>
                </Link>
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
export default Navbar
