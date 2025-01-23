import { Skeleton } from '@/components/ui/skeleton'

const CareerCardSkeleton = () => {
  return (
    <div className='border border-dark-grey rounded-md grid grid-cols-3 p-4 mb-4'>
      <div className='col-span-2 space-y-2'>
        <Skeleton className='h-5 w-3/4' />
        <Skeleton className='h-4 w-1/2' />
        <Skeleton className='h-4 w-1/2' />
        <Skeleton className='h-4 w-2/3' />
        <Skeleton className='h-4 w-1/2' />
      </div>
      <div className='relative flex justify-end'>
        <Skeleton className='h-14 w-14 md:h-24 md:w-24' />
      </div>
    </div>
  )
}
export default CareerCardSkeleton
