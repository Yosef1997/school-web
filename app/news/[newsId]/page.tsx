import newsData, { emptyNewsData, NewsItem } from '@/utils/dummy'
import { Metadata } from 'next'
import DetailNews from '../_components/DetailNews'

type Props = {
  params: {
    newsId: number
  }
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const newsItem = newsData.find((e) => e.id === params.newsId.toString())
  return {
    title: newsItem ? newsItem.title : 'News Article',
  }
}

const NewsId = ({ params }: Props) => {
  const newsItem: NewsItem =
    newsData.find((e) => e.id === params.newsId.toString()) || emptyNewsData

  return <DetailNews newsItem={newsItem} />
}
export default NewsId
