import rss from "@astrojs/rss"
import { SITE_DESCRIPTION, SITE_NAME } from "../constants"
import { getAuthorMap } from "../lib/api/author"
import { getAllPosts } from "../lib/api/post"

const posts = getAllPosts(getAuthorMap())

export const get = () =>
  rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: posts.map(post => ({
      link: post.fields.slug,
      title: post.frontmatter.title,
      pubDate: post.fields.date,
    })),
  })
