import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import Image from 'next/image'
import { getBlogContentBySlug } from '~/services/blogs'

export default async function BlogDetailPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const blog = await getBlogContentBySlug(slug)

  if (!blog) return null

  return (
    <div className="py-8">
      <h1 className="mb-8 text-4xl font-bold">{blog.title}</h1>
      {blog.blocks.map(parseBlock)}
    </div>
  )
}

function parseBlock(block: BlockObjectResponse) {
  switch (block.type) {
    case 'paragraph':
      const contents = block.paragraph.rich_text

      return (
        <p key={block.id}>
          {contents.length > 0 ? (
            contents.map((content) =>
              content.annotations.bold ? (
                <b key={content.plain_text}>{content.plain_text}</b>
              ) : (
                content.plain_text
              )
            )
          ) : (
            <br />
          )}
        </p>
      )

    case 'image':
      if (block.image.type === 'file')
        return (
          <div className="relative my-2 h-[500px]" key={block.id}>
            <Image
              src={block.image.file.url}
              alt={block.image.caption.join('')}
              fill
            />
          </div>
        )
  }
}
