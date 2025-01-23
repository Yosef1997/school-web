import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
import { useState } from 'react'
import Link from 'next/link'
import { NewsItem } from '@/utils/dummy'

const NewsCard: React.FC<NewsItem> = (newsItem) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Link href={`/news/${newsItem.id}`}>
      <div className='relative'>
        {isLoading && <Skeleton className='h-56 md:h-64 w-full absolute' />}
        <Image
          className={`h-56 md:h-64 w-auto bg-teal-950 transition-opacity duration-200 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          src={newsItem.image}
          width={350}
          height={250}
          priority
          alt={newsItem.title}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <p className='md:text-lg font-bold line-clamp-2 mt-4'>{newsItem.title}</p>
    </Link>
  )
}
export default NewsCard
