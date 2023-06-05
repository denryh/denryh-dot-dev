export default function BlogDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <main className="flex max-h-full flex-col overflow-hidden p-4">
      <h1 className="pb-2 text-center text-2xl font-bold">
        My First Blog Ever On The Internet
      </h1>
      <div className="overflow-auto">
        <section className="flex flex-1 flex-col gap-4 ">
          <p>
            One day in June 2023, I decided to get myself together and quit my
            current job to pursue greater things.
          </p>
          <p>
            And what do I mean by that? Let&apos;s go through a quick tour about
            my unconventional past, shall we..
          </p>
          <h2 className="my-4 text-3xl font-semibold">
            From <span className="font-black">natural science</span> specialized
            student to <span className="font-black">English major</span> to{' '}
            <span className="font-black">web development</span>
          </h2>
          <p>
            Sounds like a cycle where I&apos;m tryna get out then end up going
            back to the same place that I should have started.
          </p>
          <p>
            Seems like I have been boasting about this fact for ever because
            everyone is kinda doing the samething, and anyone could do this with
            just enough effort.
          </p>
          <p>
            Took me <span className="font-bold">4 months</span> of
            self-learning, and <span className="font-bold">20M VND (~$1K)</span>{' '}
            for a bootcamp (which I didn&apos;t learn anything new) to be able
            to have a job that can make some money, and you know what, it was an
            undercover job working for corps such as{' '}
            <span className="font-bold">Whirlpool</span> &{' '}
            <span className="font-bold">Charter Communications</span>. Cool
            right?
          </p>
          <p>
            After a few months, I got bored by lacking of being recognize and
            losing my work into my employer (which is a dev that hired me to do
            his job), I quit the job and start to become a real dev by applying
            to 2 companies, <span className="font-bold">Employment Hero</span>{' '}
            (Australia) and{' '}
            <span className="font-bold">Fullerton Health Group</span>{' '}
            (Singapore).
          </p>
          <p>
            Well, this is only the first blog to introduce me to the Internet,
            and this also acts as a commitment to the choice that I made. Hope I
            will stick with this and together with great people to learn and
            build great things. Thanks!
          </p>
        </section>
      </div>
    </main>
  )
}
