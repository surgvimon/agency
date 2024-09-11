import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/helpers/clsx'

interface AnimateChangeInHeightOldProps {
    children: React.ReactNode
    className?: string
  }
const AnimateChangeInHeightOld:React.FC<AnimateChangeInHeightOldProps> = ({ children, className }) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null)
    const [height, setHeight] = React.useState<number | 'auto'>('auto')
    
    React.useEffect(() => {
        if (containerRef.current) {
          const resizeObserver = new ResizeObserver((entries) => {
            // We only have one entry, so we can use entries[0].
            const observedHeight = entries[0].contentRect.height
            setHeight(observedHeight)
          })
    
          resizeObserver.observe(containerRef.current)
    
          return () => {
            // Cleanup the observer when the component is unmounted
            resizeObserver.disconnect()
          }
        }
    }, [])
    return (
        <motion.div 
          className={cn('overflow-hidden', className)} 
          style={{ height }} 
          animate={{ height }} 
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
>
        <div ref={containerRef}>{children}</div>
        </motion.div>
    )
}

export default AnimateChangeInHeightOld;
