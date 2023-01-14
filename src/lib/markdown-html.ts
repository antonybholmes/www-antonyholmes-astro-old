import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypePrism from "rehype-prism"
import rehypeStringify from "rehype-stringify"
import rehypeSlug from "rehype-slug"

export default async function markdownHtml(markdown: string) {
  //const result = await remark().use(html).use(prism).process(markdown)
  const result = await unified()
    .use(remarkParse)
    //.use(remarkPrism)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrism)
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown)

  return result.toString()
}
