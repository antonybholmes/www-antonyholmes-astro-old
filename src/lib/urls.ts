import {
  BROKERAGE_SLUG,
  CATEGORY_SLUG,
  CREDIT_CARD_SLUG,
  PORTFOLIO_SLUG,
  REVIEW_SLUG,
  TAG_SLUG,
  PEOPLE_SLUG,
  SITE_URL,
} from "../constants"
import { getUrlFriendlyTag } from "./tags"

export const getReviewBaseUrl = (tag: string) => {
  return `${REVIEW_SLUG}/${getUrlFriendlyTag(tag)}`
}

export const getCreditCardTagUrl = (tag: string) => {
  return `${CREDIT_CARD_SLUG}/tag/${getUrlFriendlyTag(tag)}`
}

export const getBrokerageTagUrl = (tag: string) => {
  return `${BROKERAGE_SLUG}/tag/${getUrlFriendlyTag(tag)}`
}

export const getPortfolioTagUrl = (tag: string) => {
  return `${PORTFOLIO_SLUG}/tag/${getUrlFriendlyTag(tag)}`
}

export const getCategoryBaseUrl = (category: string) => {
  return `${CATEGORY_SLUG}/${getUrlFriendlyTag(category)}`
}

export const getSectionRelativeUrl = (category: string, section: string) => {
  return `${getUrlFriendlyTag(category)}/section/${getUrlFriendlyTag(section)}`
}

export const getSectionBaseUrl = (category: string, section: string) => {
  return `${CATEGORY_SLUG}/${getSectionRelativeUrl(category, section)}`
}

export const getTagBaseUrl = (tag: string) => {
  return `${TAG_SLUG}/${getUrlFriendlyTag(tag)}`
}

export const getPostRelativeUrl = (slug: string): string => {
  return `/blog/${slug}`
}

export const getPostUrl = (slug: string): string => {
  return `${SITE_URL}${slug}`
}
