import { Button } from '@/components/ui/button'
import { Vacancy } from '@/utils/dummy'
import { format } from 'date-fns'
import Image from 'next/image'

const CareerDetail: React.FC<{ vacancyItem?: Vacancy }> = ({ vacancyItem }) => {
  if (!vacancyItem) {
    return <div>Vacancy not found</div>
  }

  return (
    <div className='grid md:grid-cols-2 p-14'>
      <Image
        className='h-48 md:h-96'
        width={350}
        height={250}
        priority
        src={vacancyItem.imageUrl}
        alt={`imageCareerId-${vacancyItem.id}`}
      />
      <div className='pt-4 md:pl-10 md:pt-0 lg:p-0'>
        <h1 className='font-bold md:text-lg'>{vacancyItem.position}</h1>
        <p className='text-xs md:text-base'>
          Department: {vacancyItem.department}
        </p>
        <p className='text-xs md:text-base'>
          Education level: {vacancyItem.educationLevel}
        </p>
        <p className='text-xs md:text-base'>Location: {vacancyItem.location}</p>
        <p className='text-xs md:text-base'>
          Type: {vacancyItem.employmentType}
        </p>
        <p className='text-xs md:text-base'>
          Salary: Rp {vacancyItem.salaryRange?.min} - Rp{' '}
          {vacancyItem.salaryRange?.max}
        </p>
        <p className='text-xs md:text-base'>
          Closing date: {format(vacancyItem.closingDate, 'dd MMMM yyyy')}
        </p>
        <p className='text-xs md:text-base'>Required qualifications:</p>
        {vacancyItem.requiredQualifications.map((e) => {
          return (
            <li key={e} className='text-xs md:text-base'>
              {e}
            </li>
          )
        })}

        <Button variant='default' title='Vacancy Enrollment' className='mt-4'>
          Join
        </Button>
      </div>
    </div>
  )
}
export default CareerDetail
