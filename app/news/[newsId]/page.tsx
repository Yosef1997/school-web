import { newsData, emptyNewsData, NewsItem } from '@/utils/dummy'
import { Metadata } from 'next'
import DetailNews from '../_components/DetailNews'

type Props = {
  params: {
    newsId: string
  }
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { newsId } = await params
  const newsItem = newsData.find((e) => e.id === newsId)
  return {
    title: newsItem ? newsItem.title : 'News Article',
  }
}

const NewsId = async ({ params }: Props) => {
  const { newsId } = await params
  const newsItem: NewsItem =
    newsData.find((e) => e.id === newsId) || emptyNewsData

  return <DetailNews newsItem={newsItem} />
}
export default NewsId
