import {
  BarChart,
  Flag,
  Home,
  SquareStack,
  Users,
  LifeBuoy,
  Cog,
  Search,
} from 'lucide-react'

import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Input'

export function Sidebar() {
  return (
    <aside className=" flex flex-col gap-6 border-r border-zinc-200 px-5 py-8 ">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="w-5 h-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <nav className="space-y-0.5  ">
        <NavItem title="Dashboard" icon={Home} />
        <NavItem title="Projets" icon={BarChart} />
        <NavItem title="Tasks" icon={SquareStack} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>
      <div className="mt-auto flex flex-col gap-6 py-6">
        <nav className="space-y-0.5  ">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
        <UsedSpaceWidget />
        <div className="h-px bg-zinc-200 ">
          <Profile />
        </div>
      </div>
    </aside>
  )
}
