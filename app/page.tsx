'use client'

import { useEffect, useRef } from 'react'

import styles from './page.module.css'
import { XRApp } from '@/components/XRApp'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const app = new XRApp(container)
    app.start()

    return () => {
      app.dispose()
    }
  }, [])

  return <div ref={containerRef} className={styles.main}></div>
}
