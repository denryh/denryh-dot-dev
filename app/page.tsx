import Blogs from './blogs/components/Blogs'
import TypeWriter from '~/components/TypeWriter'

export default function Home() {
  return (
    <main className="flex max-h-full flex-col overflow-hidden px-8 pb-8">
      <pre className="my-8 w-fit bg-black/5 p-2 text-xl font-bold dark:bg-white/5">
        <TypeWriter
          content={[
            'Hello, world!',
            "I'm Dat a.k.a denryh, a web developer.",
            'Welcome to my blog!',
          ]}
        />
      </pre>
      <div className="mx-auto h-0.5 w-4/5 bg-stone-400" />
      <Blogs />
    </main>
  )
}
