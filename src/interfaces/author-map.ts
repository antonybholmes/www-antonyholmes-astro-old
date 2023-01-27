import { CollectionEntry } from "astro:content"

export default interface IAuthorMap {
  [key: string]: CollectionEntry<"people">
}
