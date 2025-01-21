import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
import { useState } from 'react'

const NewsCard: React.FC<{ image: string; title: string }> = ({
  image,
  title,
}) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div>
      <div className='relative'>
        {isLoading && <Skeleton className='h-56 md:h-64 w-full absolute' />}
        <Image
          className={`h-56 md:h-64 w-auto bg-teal-950 transition-opacity duration-200 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          src={image}
          width={350}
          height={250}
          priority
          alt={title}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <p className='md:text-lg font-bold line-clamp-2 mt-4'>{title}</p>
    </div>
  )
}
export default NewsCard
