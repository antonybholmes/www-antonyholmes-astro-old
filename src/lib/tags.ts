import { capitalize } from "lodash-es"

export const getUrlFriendlyTag = (tag: string) => {
  return tag.trim().toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")
}

export const getFormattedTag = (tag: string) => {
  return tag
    .trim()
    .replaceAll("-", " ")
    .replaceAll(" and ", " & ")
    .split(" ")
    .map(tag => capitalize(tag))
    .join(" ")
}
