import Link from 'next/link'
import Blog from './Blog'
import { getBlogs } from '~/services/blogs'
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'

export default async function Blogs() {
  const blogs = (await getBlogs()).map(blogMapper)

  if (blogs.length === 0) {
    return <div className="grid h-40 place-items-center">Coming soon...</div>
  }

  return (
    <div>
      <section className="flex flex-col items-center gap-8 px-8 py-4">
        {blogs
          .filter((blog): blog is Blog => !!blog)
          .map(({ slug, ...props }) => (
            <Link key={slug} href={`/blogs/${slug}`} className="block w-full">
              <Blog {...props} />
            </Link>
          ))}
      </section>
    </div>
  )
}

export type Blog = {
  slug: string
  name: string
  description: string
  createdTime: string
}

function blogMapper(blog: PageObjectResponse | PartialPageObjectResponse) {
  if ('created_time' in blog) {
    const {
      created_time: createdTime,
      properties: { Name: name, Description: description, Slug: slug },
    } = blog

    const result: Partial<Blog> = {
      createdTime: new Date(createdTime).toDateString(),
    }

    if ('type' in name && name.type === 'title') {
      result.name = name.title[0].plain_text
    }

    if ('type' in description && description.type === 'rich_text') {
      result.description = description.rich_text[0].plain_text
    }

    if ('type' in slug && slug.type === 'rich_text') {
      result.slug = slug.rich_text[0].plain_text
    }

    return result as Blog
  }
}
