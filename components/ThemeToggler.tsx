'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function ThemeToggler() {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <button onClick={toggleDarkMode}>
      <Image
        src={`/assets/${darkMode ? 'sun' : 'moon'}.svg`}
        width={24}
        height={24}
        alt="toggle dark mode"
      />
    </button>
  )
}

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false)

  function setUp() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(setUp, [])

  return {
    darkMode,
    toggleDarkMode: () => {
      if (!darkMode) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
        setDarkMode(true)
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
        setDarkMode(false)
      }
    },
  }
}
