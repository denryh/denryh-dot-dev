type BlogProps = {
  name: string
  description: string
  createdTime: string
}

export default async function Blog({
  name,
  description,
  createdTime,
}: BlogProps) {
  return (
    <article className="w-full cursor-pointer rounded-lg p-8 transition-all hover:bg-black/5 hover:dark:bg-white/5">
      <h3 className="text-xl font-bold">{name}</h3>
      <div className="mt-2">
        <p className="text-sm text-stone-500">{createdTime}</p>
        <p className="mt-1 text-sm">{description}</p>
      </div>
    </article>
  )
}
