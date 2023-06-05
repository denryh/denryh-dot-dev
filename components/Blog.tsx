type BlogProps = {
  title: string
  subtitle: string
  date: string
}

export default function Blog({ title, subtitle, date }: BlogProps) {
  return (
    <article className="flex cursor-pointer flex-col gap-4 rounded-lg p-8 transition-all hover:bg-black/5 hover:dark:bg-white/5">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-stone-500">{subtitle}</p>
      <p className="text-sm">{date}</p>
    </article>
  )
}
