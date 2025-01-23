import { Vacancy } from '@/utils/dummy'
import Link from 'next/link'
import { format } from 'date-fns'
import { Skeleton } from '@/components/ui/skeleton'
import { useState } from 'react'
import Image from 'next/image'

const CareerCard: React.FC<Vacancy> = (vacancy) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Link href={`/career/${vacancy.id}`}>
      <div className='border border-dark-grey rounded-md grid grid-cols-3 p-4 mb-4'>
        <div className='col-span-2'>
          <h2 className='text-sm md:text-lg font-bold line-clamp-1'>
            {vacancy.position}
          </h2>
          <p className='text-xs md:text-base'>Location: {vacancy.location}</p>
          <p className='text-xs md:text-base'>Type: {vacancy.employmentType}</p>
          <p className='text-xs md:text-base'>
            Salary: Rp {vacancy.salaryRange?.min} - Rp{' '}
            {vacancy.salaryRange?.max}
          </p>
          <p className='text-xs md:text-base'>
            Closing date: {format(vacancy.closingDate, 'dd MMMM yyyy')}
          </p>
        </div>
        <div className='relative flex justify-end'>
          {isLoading && (
            <Skeleton className='h-14 w-14 md:h-24 md:w-24 absolute' />
          )}
          <Image
            className={`h-14 w-14 md:h-24 md:w-24 bg-teal-950 transition-opacity duration-200 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            src={vacancy.imageUrl || ''}
            width={96}
            height={96}
            priority
            alt={vacancy.position || 'Vacancy image'}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </Link>
  )
}
export default CareerCard
