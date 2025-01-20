import Image from 'next/image'
import logo from '@/public/logo.webp'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { Youtube } from 'lucide-react'
import { Twitter } from 'lucide-react'
const Footer = () => {
  return (
    <div className='bg-light-grey text-secondary py-10 md:py-20'>
      <div className='flex flex-col gap-y-10  md:grid md:grid-cols-4 py-4 px-4 lg:py-10 mx'>
        <div className='md:col-span-1'>
          <Image
            className='h-52 w-auto bg-white rounded-full'
            src={logo}
            width={500}
            height={500}
            alt='school-logo'
          />
          <p className='text-xs text-secondary'>
            Jl. Siliwangi No 123, Cibadak, Cibadak, Sukabumi, Jawa Barat 43351,
            Indonesia, (0266)531333
          </p>
          <Button variant='link' title='mail address'>
            school@mail.com
          </Button>
          <Button variant='link' title='phone number'>
            (0266)531333
          </Button>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-lg md:text-2xl font-medium'>Jelajahi</h2>
          <Link className='text-sm w-fit py-2' href={'/about'}>
            Tentang Kami
          </Link>
          <Link className='text-sm w-fit py-2' href={'/news'}>
            Berita
          </Link>
          <Link className='text-sm w-fit py-2' href={'/registration'}>
            Pendaftaran
          </Link>
          <Link className='text-sm w-fit py-2' href={'/career'}>
            Karir
          </Link>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-lg md:text-2xl font-medium'>Daftar Sekolah</h2>
          <Link className='text-sm w-fit py-2' href={'/'}>
            Taman kanak-kanak
          </Link>
          <Link className='text-sm w-fit py-2' href={'/'}>
            Sekolah Dasar
          </Link>
        </div>
        <div className='gap-x-5'>
          <h2 className='text-lg md:text-2xl font-medium'>Media Sosial</h2>
          <Button variant='outline' size='icon'>
            <Instagram />
          </Button>
          <Button variant='outline' size='icon'>
            <Youtube />
          </Button>
          <Button variant='outline' size='icon'>
            <Twitter />
          </Button>
        </div>
      </div>
      <div className='flex flex-col gap-y-5 items-center border-t border-orange pt-5 mt-10  px-5 md:px-10 md:flex-row md:justify-between'>
        <p className='text-xs'>
          Copyright @2010 School-web. All Rights Reserved
        </p>
        <div className='flex gap-x-3 md:gap-x-5 text-xs'>
          <Link href={'/'}>Privacy policy</Link>
          <Link href={'/'}>Cookie notice</Link>
          <Link href={'/'}>Terms of service</Link>
        </div>
      </div>
    </div>
  )
}
export default Footer
