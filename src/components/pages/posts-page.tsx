import IFieldMap from "../../interfaces/field-map"
import IPreviewPost from "../../interfaces/preview-post"
import BaseCol from "../base-col"
import PagePagination from "../page-pagination"
import HeadPosts from "../post/head-posts"
import HeroPosts from "../post/hero-posts"
import LatestPosts from "../post/latest-posts"
import RestPosts from "../post/rest-posts"
import CategoryPosts from "../post/category-posts"
import CategoryPostsVert from "../post/category-posts-vert"

interface IProps {
  posts: IPreviewPost[]
  page: number
  pages: number
  showLatestPosts?: boolean
  sectionMap?: IFieldMap
  root?: string
}

const PostsPage = ({
  posts,
  page = 0,
  pages = 1,
  showLatestPosts = false,
  sectionMap,
  root = "/blog",
}: IProps) => {
  const heroPosts = posts.slice(0, 4)
  const headPosts = posts.slice(4, 6)
  const restPosts = posts.slice(6)

  return (
    <BaseCol className="mb-32 gap-y-16">
      <HeroPosts posts={heroPosts} />

      {/* <HeadPost post={heroPost} /> */}
      {headPosts.length > 0 && <HeadPosts posts={headPosts} />}
      {/* <HeroPost post={heroPost} /> */}
      {/* <MorePosts posts={morePosts} /> */}

      {restPosts.length > 0 && <RestPosts posts={restPosts} />}

      {/* <Pagination page={page} pages={pages} /> */}
      {pages > 1 && <PagePagination page={page} pages={pages} root={root} />}

      {showLatestPosts && <LatestPosts posts={posts} />}

      {sectionMap && (
        <>
          <CategoryPostsVert
            category="Guides & Tutorials"
            posts={sectionMap["Guides & Tutorials"]}
          />
          <CategoryPosts category="Opinions" posts={sectionMap["Opinions"]} />

          <CategoryPostsVert
            category="Retirement"
            posts={sectionMap["Retirement"]}
          />

          {/* <SectionPosts section="Reviews" posts={sectionMap['Reviews']} /> */}

          <CategoryPostsVert
            category="News & Announcements"
            posts={sectionMap["News & Announcements"]}
          />
        </>
      )}
    </BaseCol>
  )
}

// "Guides & Tutorials",
//   "Opinions",
//   "Retirement",
//   "News & Announcements",
//ightMode={index % 2 === 0}
//key={index}

export default PostsPage
