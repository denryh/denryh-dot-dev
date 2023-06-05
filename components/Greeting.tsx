'use client'

import { useEffect, useState } from 'react'

export default function Greeting() {
  const [defaultMessage, setDefaultMessage] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    setDefaultMessage(`It\'s ${hours}:${minutes} when you visited`)

    setMessage('good evening 🌙')

    if (hours > 18) {
      return
    }

    if (hours > 12) {
      return setMessage('good afternoon 🌤️')
    }

    if (hours > 3) {
      return setMessage('good morning ⛅️')
    }
  }, [])

  return (
    <p className="cursor-default text-sm">
      <span className="hidden md:inline">{defaultMessage},</span> {message}
    </p>
  )
}
