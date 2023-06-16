import React from 'react'
import { AnimatePresence, AnimatePresenceProps } from 'framer-motion'

interface NewAnimatePresenceProps extends Omit<AnimatePresenceProps, 'children'> {
  children: React.ReactNode
}

//  This component is for exit animation

export function AnimatedComponent({ children }: { children: React.ReactNode }): JSX.Element {
  const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence

  return <NewAnimatePresence>{children}</NewAnimatePresence>
}
