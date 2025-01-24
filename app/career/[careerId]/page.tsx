import { emptyVacancyData, schoolVacancies, Vacancy } from '@/utils/dummy'
import { Metadata } from 'next'
import CareerDetail from '../_components/CareerDetail'

type Props = {
  params: Promise<{
    careerId: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const careerId = (await params).careerId
  const careerItem = schoolVacancies.find((e) => e.id === careerId)
  return {
    title: careerItem ? careerItem.position : 'Vacancy',
  }
}

const CareerId = async ({ params }: Props) => {
  const careerId = (await params).careerId
  const careerItem: Vacancy =
    schoolVacancies.find((e) => e.id === careerId) || emptyVacancyData

  return <CareerDetail vacancyItem={careerItem} />
}
export default CareerId
