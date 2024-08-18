import { BarChart, Flag, Home, SquareStack, Users } from 'lucide-react'
import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5  ">
      <NavItem title="Dashboard" icon={Home} />
      <NavItem title="Projets" icon={BarChart} />
      <NavItem title="Tasks" icon={SquareStack} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={Users} />
    </nav>
  )
}
