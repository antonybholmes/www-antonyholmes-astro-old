import IPostsProps from "../../interfaces/posts-props"
import cn from "../../lib/class-names"
import HeroPostSmall from "./hero-post-small"
import PreviewPost from "./preview-post"

export default function HeroPosts({ posts }: IPostsProps) {
  const topPost = posts[0]
  const topPosts = posts.slice(1, 4)

  return (
    <section className="flex flex-col gap-12 xl:flex-row">
      <PreviewPost
        post={topPost}
        className="w-full xl:w-60/100"
        loading="eager"
      />

      <ul className="flex w-full flex-col gap-y-4 xl:w-40/100">
        {topPosts.map((post, index) => {
          return (
            <li key={index}>
              <HeroPostSmall
                post={post}
                className={cn([index > 0, "border-t border-slate-200 pt-6"])}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
