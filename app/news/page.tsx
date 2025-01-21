'use client'
import { FormEvent, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import NewsCard from '@/components/NewsCard'
import newsData from '@/utils/dummy'
import NewsCardSkeleton from './_components/NewsCardSkeleton'

const News = () => {
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
      <div className='bg-jumbotron1 h-36 md:h-64 w-full bg-cover'>
        <div className='h-full w-full bg-black bg-opacity-70 flex flex-col items-center justify-center'>
          <h2 className='font-bold md:text-2xl text-white'>Berita</h2>
          <p className='text-white'>Beberapa Berita Pembelajaran School</p>
        </div>
      </div>
      <div className='p-4'>
        <div className='flex items-center justify-between mb-3'>
          <h2 className='font-bold md:text-2xl text-secondary'>Berita Baru</h2>
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
              placeholder='Cari berita...'
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </form>
        ) : null}
      </div>
      <div className='p-4 grid md:grid-cols-3 gap-7'>
        {isLoading
          ? // Show skeletons while loading
            [...Array(6)].map((_, index) => (
              <NewsCardSkeleton key={`skeleton-${index}`} />
            ))
          : // Show actual news cards
            newsData.map((news) => (
              <NewsCard key={news.id} image={news.image} title={news.title} />
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
export default News
