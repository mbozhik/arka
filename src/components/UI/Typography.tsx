'use client'

import type {HTMLAttributes} from 'react'

import React from 'react'
import {AnimatePresence, motion, Variants, HTMLMotionProps, useInView} from 'motion/react'

import {cn} from '@/lib/utils'
import {useMediaQuery} from '@/utils/use-media-query'

type Props = {
  type: TypoTypes
  className?: string
  children: React.ReactNode
  animated?: boolean
  by?: 'word' | 'line'
  offset?: number
} & (HTMLAttributes<HTMLHeadingElement> | HTMLAttributes<HTMLParagraphElement> | HTMLAttributes<HTMLSpanElement>)

export type TypoTypes = keyof typeof typoClasses

export const typoClasses = {
  h1: cn('text-[130px] xl:text-[90px] sm:text-[45px] sm:!leading-[1.25] font-semibold', 'font-serif'),
  h2: cn('text-[52px] xl:text-4xl sm:text-xl font-medium sm:font-normal', 'font-serif'),
  h3: cn('text-6xl xl:text-4xl sm:text-2xl font-semibold !leading-[1.205]', 'font-serif'),
  h4: cn('text-[40px] xl:text-3xl sm:text-2xl font-semibold !leading-[1.15]', 'font-serif'),
  h5: cn('text-3xl xl:text-2xl sm:text-xl font-semibold', 'font-serif'),
  h6: cn('text-xl sm:text-base font-semibold uppercase', 'font-serif'),
  p: cn('text-xl xl:text-lg !leading-[1.3]', 'font-sans'),
  span: cn('text-sm uppercase', 'font-sans', 'inline-block'),
} as const

export const H1 = createTypography('h1')
export const H2 = createTypography('h2')
export const H3 = createTypography('h3')
export const H4 = createTypography('h4')
export const H5 = createTypography('h5')
export const H6 = createTypography('h6')
export const P = createTypography('p')
export const SPAN = createTypography('span')

const variants = {
  item: {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: (duration: number) => ({
      opacity: 1,
      y: 0,
      transition: {duration},
    }),
  },
  container: {
    hidden: {opacity: 0},
    visible: (stagger: number) => ({
      opacity: 1,
      transition: {staggerChildren: stagger},
    }),
  },
} as const

const variantConfigs = {
  default: {
    item: {
      ...variants.item,
      visible: variants.item.visible(0.4),
    },
    container: {
      ...variants.container,
      visible: variants.container.visible(0.2),
    },
  },
  word: {
    item: {
      ...variants.item,
      visible: variants.item.visible(0.2),
    },
    container: {
      ...variants.container,
      visible: variants.container.visible(0.1),
    },
  },
} as const

const {
  default: {item: defaultVariants, container: containerVariants},
  word: {item: wordVariants, container: wordContainerVariants},
} = variantConfigs

type ElementType = HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement

type MotionElementType = {
  [K in TypoTypes]: (typeof motion)[K]
}[TypoTypes]

function Typography({type, className, children, animated = true, by = 'line', offset, ...props}: Props) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const offsetValue = offset ?? (isDesktop ? 100 : 25)

  const Element = type
  const ref = React.useRef<ElementType>(null)
  const isInView = useInView(ref, {
    once: true,
    margin: `${-offsetValue}px 0px`,
  })

  if (!animated) {
    return (
      <Element className={cn(typoClasses[type], className)} {...props}>
        {children}
      </Element>
    )
  }

  const MotionElement = motion[type] as MotionElementType

  if (by === 'word') {
    const processContent = (child: React.ReactNode): React.ReactNode[] => {
      if (typeof child === 'string') {
        return child.split(/(\s+)/).map((part) => part)
      }
      if (React.isValidElement(child)) {
        return [child]
      }
      return []
    }

    const content = React.Children.toArray(children).flatMap(processContent)

    return (
      <AnimatePresence mode="wait">
        <MotionElement
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={wordContainerVariants} // Use word-specific container variants
          className={cn(typoClasses[type], className)}
          {...(props as any)}
        >
          {content.map((segment, index) => {
            if (React.isValidElement(segment)) {
              return segment
            }
            return (
              <span key={`word-${index}`} className="inline-block overflow-hidden">
                <motion.span variants={wordVariants} className="block whitespace-pre">
                  {segment}
                </motion.span>
              </span>
            )
          })}
        </MotionElement>
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <MotionElement
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'} // trigger when in view
        variants={containerVariants}
        className={cn(typoClasses[type], className)}
        {...(props as any)}
      >
        <span className="block overflow-hidden">
          <motion.span variants={defaultVariants} className="block">
            {children}
          </motion.span>
        </span>
      </MotionElement>
    </AnimatePresence>
  )
}

function createTypography(type: TypoTypes) {
  const Component = ({className, children, animated, by, offset, ...props}: Omit<Props, 'type'>) => (
    <Typography type={type} className={className} animated={animated} by={by} offset={offset} {...props}>
      {children}
    </Typography>
  )
  Component.displayName = `Typography(${type.toUpperCase()})`
  return Component
}
