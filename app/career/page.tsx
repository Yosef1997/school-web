'use client'
import { FormEvent, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { schoolVacancies } from '@/utils/dummy'
import CareerCardSkeleton from './_components/CareerCardSkeleton'
import CareerCard from './_components/CareerCard'

const Carrier = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(search)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <div className='bg-vacancy h-36 md:h-64 w-full bg-[length:100%_192px] md:bg-[length:100%_384px] bg-no-repeat'>
        <div className='h-full w-full bg-black bg-opacity-70 flex flex-col items-center justify-center'>
          <h2 className='font-bold md:text-2xl text-white'>Karir</h2>
          <p className='text-white'>Beberapa Lowongan Pekerjaan School</p>
        </div>
      </div>
      <div className='p-4 lg:px-32 lg:pt-16'>
        <div className='flex items-center justify-between mb-3'>
          <h2 className='font-bold md:text-2xl text-secondary'>
            Lowongan Pekerjaan
          </h2>
          <Button
            variant='outline'
            size='icon'
            title='search button'
            onClick={() => setIsSearch(!isSearch)}
          >
            <Search />
          </Button>
        </div>
        {isSearch ? (
          <form onSubmit={handleSubmit}>
            <Input
              type='search'
              placeholder='Cari lowongan...'
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </form>
        ) : null}
      </div>
      <div className='p-4 lg:px-32'>
        {isLoading
          ? [...Array(6)].map((_, index) => (
              <CareerCardSkeleton key={`skeleton-${index}`} />
            ))
          : schoolVacancies.map((news) => (
              <CareerCard key={news.id} {...news} />
            ))}
      </div>
      <div className='flex justify-center mb-20'>
        <Button
          title='view more'
          className='font-semibold bg-theme text-white mx-auto'
        >
          Tampilkan lebih banyak
        </Button>
      </div>
    </div>
  )
}
export default Carrier
