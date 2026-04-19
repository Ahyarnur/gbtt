'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LinkCardProps
  extends Omit<React.ComponentPropsWithoutRef<'a'>, 'onDrag' | 'onDragStart' | 'onDragEnd'> {
  title: string
  description: string
  href: string
}

const LinkCard = React.forwardRef<HTMLAnchorElement, LinkCardProps>(
  ({ className, title, description, href, ...props }, ref) => {
    const cardVariants: Variants = {
      initial: { scale: 1, y: 0 },
      hover: {
        scale: 1.03,
        y: -5,
        transition: {
          type: 'spring' as const,
          stiffness: 300,
          damping: 15,
        },
      },
    }

    return (
      <motion.a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group relative flex h-64 w-full max-w-sm flex-col justify-between overflow-hidden',
          'rounded-2xl border bg-card p-6 text-card-foreground shadow-sm',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          className
        )}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        aria-label={`Link to ${title}`}
        {...props} 
        >
        <div className="z-10">
          <h3 className="mb-2 font-serif text-3xl font-medium tracking-tight text-card-foreground">
            {title}
          </h3>
          <p className="max-w-[80%] text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </motion.a>
    )
  }
)

LinkCard.displayName = 'LinkCard'

export { LinkCard }
