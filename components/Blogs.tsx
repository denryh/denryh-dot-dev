import Link from 'next/link'
import Blog from './Blog'

type Blog = {
  id: string
  title: string
  subtitle: string
  date: string
}

export default function Blogs() {
  const blogs: Blog[] = [
    {
      id: 'my-first-blog-ever-on-the-internet',
      title: 'My First Blog Ever On The Internet',
      subtitle:
        'One day in June 2023, I decided to get myself together and quit my current job to pursue greater things.',
      date: 'Jun 5th 2023 - Ho Chi Minh, Vietnam',
    },
    {
      id: 'my-first-blog-ever-on-the-internet-2',
      title: 'My First Blog Ever On The Internet',
      subtitle:
        'One day in June 2023, I decided to get myself together and quit my current job to pursue greater things.',
      date: 'Jun 5th 2023 - Ho Chi Minh, Vietnam',
    },
  ]

  if (blogs.length === 0) {
    return <div className="grid h-40 place-items-center">Coming soon...</div>
  }

  return (
    <section className="flex flex-col items-center gap-8 px-8 py-4">
      {blogs.map(({ id, ...props }) => (
        <Link key={id} href={`/blogs/${id}`}>
          <Blog {...props} />
        </Link>
      ))}
    </section>
  )
}
