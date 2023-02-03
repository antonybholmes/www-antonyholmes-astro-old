import IImageLoadProps from "../../interfaces/image-load-props"
import IPostProps from "../../interfaces/post-props"
import cn from "../../lib/class-names"
import { getDateFromSlug } from "../../lib/slug"
import BaseCol from "../base-col"
import CompactAvatars from "../person/compact-avatars"
import VCenterRow from "../v-center-row"
import DateFormatter from "./date-formatter"
import PostCategoryLink from "./post-category-link"
import PostImage from "./post-image"
import PostTitleLink from "./post-title-link"

interface IProps extends IPostProps, IImageLoadProps {
  imageClassName?: string
  headerClassName?: string
  innerClassName?: string
  contentClassName?: string
  showSection?: boolean
  showDescription?: boolean
  showAvatar?: boolean
  showAvatarImage?: boolean
  dateBelow?: boolean
}

export default function PreviewPost({
  post,
  className,
  imageClassName = "w-full h-64 md:h-72",
  headerClassName = "text-2xl md:text-4xl",
  innerClassName,
  contentClassName = "text-base",
  showSection = true,
  showDescription = true,
  showAvatar = true,
  showAvatarImage = true,
  dateBelow = false,
  loading = "lazy",
}: IProps) {
  const date = getDateFromSlug(post.slug)

  return (
    <article className={cn("flex flex-col gap-y-4", className)}>
      <PostImage post={post} loading={loading} className={imageClassName} />

      <BaseCol className={cn("gap-y-2", innerClassName)}>
        <BaseCol>
          {showSection && <PostCategoryLink post={post} />}
          <PostTitleLink post={post} className={headerClassName} />
        </BaseCol>
        {showDescription && (
          <p
            className={cn(
              "text-slate-600 dark:text-slate-400",
              contentClassName
            )}
          >
            {post.data.description}
          </p>
        )}

        {dateBelow ? (
          <>
            {showAvatar && (
              <CompactAvatars
                people={post.data.authors}
                showImages={showAvatarImage}
              />
            )}

            <DateFormatter date={date} />
          </>
        ) : (
          <VCenterRow className="justify-between">
            {showAvatar && (
              <CompactAvatars
                people={post.data.authors}
                showImages={showAvatarImage}
              />
            )}

            <DateFormatter date={date} />
          </VCenterRow>
        )}
      </BaseCol>
    </article>
  )
}
