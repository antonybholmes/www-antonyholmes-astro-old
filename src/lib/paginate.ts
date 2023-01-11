import { range } from "lodash-es"
import { RECORDS_PER_PAGE } from "../constants"
import IFieldMap from "../interfaces/field-map"

export const paginate = (
  data: any[],
  slug: string = "",
  globalProps: IFieldMap = {}
) => {
  const paths = []

  const pages = getPageCount(data)

  // add slash to end of slug
  if (slug.endsWith("/")) {
    slug = slug.slice(0, slug.length - 2)
  }

  if (slug !== "") {
    paths.push({
      params: {
        slug,
      },
      props: {
        page: 0,
        pages,
        data: getPagePosts(data, 0),
        ...globalProps,
      },
    })
  }

  // add page to slug since we are going to generate an array of
  // slugs one for each page of results
  if (slug !== "") {
    slug = `${slug}/page/`
  }

  range(0, pages).forEach((page: number) => {
    const currentPage = page + 1

    paths.push({
      params: {
        slug: `${slug}${currentPage}`,
      },
      props: {
        page,
        pages,
        data: getPagePosts(data, page),
        ...globalProps,
      },
    })
  })

  return paths
}

export const getPageCount = (posts: any[]): number => {
  return Math.floor((posts.length + RECORDS_PER_PAGE - 1) / RECORDS_PER_PAGE)
}

export const getPagePosts = (posts: any[], page: number = 0): any[] => {
  const start = page * RECORDS_PER_PAGE
  return posts.slice(start, start + RECORDS_PER_PAGE)
}
