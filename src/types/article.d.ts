export default interface IArticle {
  id: string
  title: string
  slug: string
  thumbnail: string
  image: string
  description: string
  tags?: string[]
  href: string
};