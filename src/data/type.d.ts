export type RightData = {
  label: string;
  name: string;
  githubs: Githubs;
}

export type ArticleList = ArticleListItem[]
export type Githubs = GithubsItem[]
export interface ArticleListItem {
  img: string
  title: string
  subtitle: string
  url: string
  from: string
  update: number
}

export interface GithubsItem {
  name: string
  github: string
  docs: string
  icon: string
}