import { cache } from 'react'
import { DB_ID, notion } from '~/db/notion'

import type {
  BlockObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'

export const getBlogs = cache(async () => {
  const { results: blogs } = await notion.databases.query({
    database_id: DB_ID,
  })

  return blogs
})

export const getBlogContent = cache(async (id: string) => {
  const { results } = await notion.blocks.children.list({
    block_id: id,
  })

  return results as BlockObjectResponse[]
})

export const getBlogContentBySlug = cache(async (slug: string) => {
  const blogs = await getBlogs()

  const blog = blogs.find(
    (blog) =>
      'created_time' in blog &&
      blog.properties.Slug.type === 'rich_text' &&
      blog.properties.Slug.rich_text[0].plain_text === slug
  ) as PageObjectResponse

  return {
    title:
      blog.properties.Name.type === 'title' &&
      blog.properties.Name.title[0].plain_text,
    blocks: await getBlogContent(blog.id),
  }
})
