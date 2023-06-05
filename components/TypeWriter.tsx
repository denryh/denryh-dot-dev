'use client'

import { useEffect, useState } from 'react'

const typeSpeed = 0.05
const delay = 1

export default function TypeWriter({ content }: { content: string[] }) {
  const [current, setCurrent] = useState('')

  useEffect(() => {
    let letterIndex = 0
    let currentIndex = 0
    let maxIndex = content[currentIndex].length
    let reverse = false
    let interval: NodeJS.Timer = {} as NodeJS.Timer

    function start() {
      interval = setInterval(async () => {
        if (letterIndex === maxIndex) {
          reverse = true
          clearInterval(interval)
          setTimeout(start, delay * 1000)
        }

        if (letterIndex < 0) {
          reverse = false
          letterIndex = 0
          currentIndex =
            currentIndex + 1 === content.length ? 0 : currentIndex + 1

          maxIndex = content[currentIndex].length
        }

        setCurrent((c) => {
          if (!reverse) {
            return c + content[currentIndex][letterIndex++]
          }

          return c.slice(0, letterIndex--)
        })
      }, typeSpeed * 1000)
    }

    start()

    return () => clearInterval(interval)
  }, [content])

  return (
    <span className="relative whitespace-break-spaces pr-2 after:absolute after:top-0 after:h-full after:w-2 after:animate-typewriter-cursor after:bg-black dark:after:bg-white">
      {current || ' '}
    </span>
  )
}
