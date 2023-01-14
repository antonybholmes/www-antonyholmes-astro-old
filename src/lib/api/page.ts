import { join } from "path"
import IBasePage from "../../interfaces/base-page"
import { getAllFiles } from "./files"
import { getFields, getPageFrontmatter } from "./markdown"

const PAGE_DIR = join(process.cwd(), "_content", "pages")

export const getPagePaths = () => {
  return getAllFiles(PAGE_DIR)
}

export const getPageBySlug = (slug: string): IBasePage => {
  const realPath = slug.replace(/\.md$/, "")
  const fullPath = join(PAGE_DIR, `${realPath}.md`)

  return {
    fields: getFields(-1, slug),
    frontmatter: getPageFrontmatter(fullPath),
  }
}

export const getAllPages = () => {
  const paths = getPagePaths()
  const pages = paths.map(path => getPageBySlug(path))
  // sort posts by date in descending order
  return pages
}
