import React, { forwardRef } from 'react'
import clsx from 'clsx'

type OuterContainerProps = { className: string, children: React.ReactNode}

const OuterContainer = forwardRef<HTMLDivElement, OuterContainerProps>((
  { className, children, ...rest },
  ref
) => {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...rest}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
})

const InnerContainer = forwardRef<HTMLDivElement, { children: React.ReactNode}>((
  { children, ...props },
  ref
) => {
  return (
    <div
      ref={ref}
      className={'relative px-4 sm:px-8 lg:px-12'}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
})

export const Container = forwardRef<HTMLDivElement, { children: React.ReactNode} & OuterContainerProps>((
  { children, ...props },
  ref
) => {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
})
