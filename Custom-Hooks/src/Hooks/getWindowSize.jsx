import { useEffect, useState } from 'react'
import useThrottle from './useThrottle'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  const throttledHandleSize = useThrottle(handleSize, 1000)

  useEffect(() => {
    window.addEventListener("resize", throttledHandleSize)

    return () => window.removeEventListener("resize", throttledHandleSize)
  }, [throttledHandleSize])

  return windowSize
}

export default useWindowSize