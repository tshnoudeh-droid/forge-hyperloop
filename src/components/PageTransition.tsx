'use client'

import { useEffect, useState } from 'react'

export default function PageTransition() {
  const [opacity, setOpacity] = useState(1)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const fadeOut = setTimeout(() => setOpacity(0), 120)
    const remove = setTimeout(() => setGone(true), 1400)
    return () => { clearTimeout(fadeOut); clearTimeout(remove) }
  }, [])

  if (gone) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0A0A0A',
        zIndex: 9999,
        opacity,
        transition: 'opacity 1.25s cubic-bezier(0.76, 0, 0.24, 1)',
        pointerEvents: 'none',
      }}
    />
  )
}
