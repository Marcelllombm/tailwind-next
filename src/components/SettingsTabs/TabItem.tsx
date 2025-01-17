import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
export interface TabItemsProps {
  value: string
  title: string
  isSelected?: boolean
}
export function TabItems({ value, title, isSelected = false }: TabItemsProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span>{title}</span>
      {isSelected && (
        <motion.div
          layoutId="11"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  )
}
