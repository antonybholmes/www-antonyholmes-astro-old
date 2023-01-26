import { CollectionEntry } from "astro:content"
import IClassProps from "./class-props"

export default interface IPostProps extends IClassProps {
  post: CollectionEntry<"blog">
}
