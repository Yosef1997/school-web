import React from 'react'
import { NewsItem } from '@/utils/dummy'
import Image from 'next/image'

const DetailNews: React.FC<{ newsItem?: NewsItem }> = ({ newsItem }) => {
  if (!newsItem) {
    return <div>News item not found</div>
  }

  return (
    <div>
      <Image
        className='h-48 md:h-96 w-full'
        width={350}
        height={250}
        priority
        src={newsItem.image}
        alt={`imageNewsId-${newsItem.id}`}
      />
      <div className='p-4 md:p-10 lg:p-16'>
        <h1 className='font-bold md:text-lg'>{newsItem.title}</h1>
        {newsItem.date && <p className='text-xs'>Published: {newsItem.date}</p>}
        <p className='py-4 text-justify'>{newsItem.content}</p>
      </div>
    </div>
  )
}

export default DetailNews
