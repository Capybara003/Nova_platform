'use client'

import { useEffect } from 'react'

function useDebounce<T>(value: T, func: (value: T) => void, delay: number) {
  useEffect(() => {
    const timer = setTimeout(() => {
      func(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, func, delay])
}

export default useDebounce
