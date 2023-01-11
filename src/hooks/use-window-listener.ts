import { useEffect } from "preact/hooks"

export default function useWindowListener(event: string, handler: any) {
  useEffect(() => {
    window.addEventListener(event, handler)
    return () => window.removeEventListener(event, handler)
  }, [])
}
