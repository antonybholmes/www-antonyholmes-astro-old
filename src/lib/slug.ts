// export const getCanonicalPostSlug = (path: string): string => {
//   return path
//     .replace(/\.md$/, "")
//     .replaceAll("\\", "/")
//     .replace(/^.+(published|drafts)\//, "")
//     .replace(/^.+\//, "")
// }

// export const getCanonicalAuthorSlug = (path: string): string => {
//   return path
//     .replace(/\.md$/, "")
//     .replaceAll("\\", "/")
//     .replace(/^.+authors\//, "")
// }

// export const getCanonicalReviewSlug = (path: string): string => {
//   return path
//     .replace(/\.md$/, "")
//     .replaceAll("\\", "/")
//     .replace(/^.+reviews\//, "")
// }

export function getUrlFriendly(s: string): string {
  return s.trim().toLowerCase().replaceAll("&", "and").replaceAll(/ +/g, "-")
}

export function getCanonicalSlug(path: string): string {
  return getUrlFriendly(
    path.replace(/\.md$/, "").replaceAll("\\", "/").replace(/^.+\//, "")
  )
}

export function getDateFromSlug(slug: string): string {
  const match = slug.match(/(\d{4})-(\d{2})-(\d{2})/)
  return match ? match.slice(1, 4).join("-") : "2022-01-01"
}
