import { CollectionEntry } from "astro:content"
import IClassProps from "./class-props"

export default interface IPostsProps extends IClassProps {
  posts: CollectionEntry<"blog">[]
}
