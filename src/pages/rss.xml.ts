import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { SITE_DESCRIPTION, SITE_NAME } from "../constants"
import { getDateFromSlug } from "../lib/slug"
import { getPostBaseUrl } from "../lib/urls"

export async function get(context: { site: any }) {
  const allPosts = await getCollection("blog")

  rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: allPosts.map((post: any) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(getDateFromSlug(post.slug)),
      link: getPostBaseUrl(post.slug),
    })),
  })
}
