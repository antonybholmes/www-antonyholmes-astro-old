import fs from "fs"
import path, { join } from "path"
import { PEOPLE_SLUG } from "../../constants"
import IAuthorMap from "../../interfaces/author-map"
import IPostAuthor from "../../interfaces/post-author"
import { getCanonicalAuthorSlug } from "../slug"
import { getUrlFriendlyTag } from "../tags"
import { getAllFiles } from "./files"
import { getAuthorFields } from "./markdown"

const authorsDir = join(process.cwd(), "_content", "authors")

export const getAuthorPaths = () => {
  return getAllFiles(authorsDir)
}

export const getAuthorBySlug = (slug: string): IPostAuthor => {
  slug = getCanonicalAuthorSlug(slug)
  const realPath = slug.replace(/\.md$/, "")
  const fullPath = join(authorsDir, `${realPath}.md`)

  return { slug: slug, frontmatter: getAuthorFields(fullPath) }
}

export const getAllAuthors = (): IPostAuthor[] => {
  const paths = getAuthorPaths()
  const authors = paths.map(path => getAuthorBySlug(path))
  return authors
}

export const getAuthorMap = (authors: IPostAuthor[] = []): IAuthorMap => {
  if (!authors || authors.length === 0) {
    authors = getAllAuthors()
  }

  return Object.fromEntries(authors.map(x => [x.frontmatter.name, x]))
}

export const getAuthorUrl = (author: IPostAuthor) => {
  return `${PEOPLE_SLUG}/${getUrlFriendlyTag(author.frontmatter.name)}`
}
