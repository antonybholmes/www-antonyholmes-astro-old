import { CollectionEntry } from "astro:content"
import { join } from "path"
import IAuthor from "../../interfaces/author"
import IAuthorMap from "../../interfaces/author-map"
import IPostAuthor from "../../interfaces/post-author"
import markdownHtml from "../markdown-html"
import { getCanonicalSlug } from "../slug"
import { getUrlFriendlyTag } from "../tags"
import { getAllFiles } from "./files"
import { getAuthorFrontmatter } from "./markdown"

const PEOPLE_DIR = join(process.cwd(), "_content", "people")

export function getAuthorPaths() {
  return getAllFiles(PEOPLE_DIR)
}

export function getAuthorBySlug(slug: string): IPostAuthor {
  slug = getCanonicalSlug(slug)
  const fullPath = join(PEOPLE_DIR, `${slug}.md`)

  return { slug: slug, frontmatter: getAuthorFrontmatter(fullPath) }
}

export function getAllAuthors(): IPostAuthor[] {
  const paths = getAuthorPaths()
  const authors = paths.map(path => getAuthorBySlug(path))
  return authors
}

export function getAuthorMap(authors: CollectionEntry<"people">[]): IAuthorMap {
  return Object.fromEntries(
    authors.map(x => [getUrlFriendlyTag(x.data.name), x])
  )
}

export async function addAuthorHtml(author: IPostAuthor): Promise<IAuthor> {
  return {
    ...author,
    html: await markdownHtml(author.frontmatter.rawContent || ""),
  }
}

export function addHtmlToAuthors(authors: IPostAuthor[]): Promise<IAuthor>[] {
  return authors.map(author => addAuthorHtml(author))
}
