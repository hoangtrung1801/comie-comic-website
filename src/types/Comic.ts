export interface Comic {
  id: string,
  title: string,
  imageSrc: string,
  author: string,
  status: string,
  categories:  string[],
  chapters : {
    chapterId: string,
    updateAt: string,
  }[]
}