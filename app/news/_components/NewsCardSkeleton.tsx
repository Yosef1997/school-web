import { Skeleton } from '@/components/ui/skeleton'

const NewsCardSkeleton = () => {
  return (
    <div>
      <Skeleton className='h-56 md:h-64 w-full rounded-md' />
      <Skeleton className='h-6 w-[250px] mt-4' />
      <Skeleton className='h-6 w-[250px] mt-2' />
    </div>
  )
}

export default NewsCardSkeleton
