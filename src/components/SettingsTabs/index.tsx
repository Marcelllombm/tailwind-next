'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItems } from './TabItem'
import { useState } from 'react'
export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItems
          value="tab1"
          isSelected={currentTab === 'tab1'}
          title="My details"
        />
        <TabItems
          value="tab2"
          isSelected={currentTab === 'tab2'}
          title="Profile"
        />
        <TabItems
          value="tab3"
          isSelected={currentTab === 'tab3'}
          title="Password"
        />
        <TabItems
          value="tab5"
          isSelected={currentTab === 'tab5'}
          title="Plan"
        />
        <TabItems
          value="tab6"
          isSelected={currentTab === 'tab6'}
          title="Billing"
        />
        <TabItems value="tab7" isSelected={currentTab === 'tab7'} title="App" />
        <TabItems
          value="tab8"
          isSelected={currentTab === 'tab8'}
          title="Email"
        />
        <TabItems
          value="tab9"
          isSelected={currentTab === 'tab9'}
          title="Notifications"
        />
        <TabItems
          value="tab10"
          isSelected={currentTab === 'tab10'}
          title="Integrations"
        />
      </Tabs.List>
    </Tabs.Root>
  )
}
