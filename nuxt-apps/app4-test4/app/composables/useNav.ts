import type { NavItem } from '@/types/nav'

export const useNav = () => {

  const navItems: NavItem[] = [
    { id: 1, label: 'Store', url: '/store' },
    { id: 2, label: 'Mac', url: '/mac' },
    { id: 3, label: 'iPhone', url: '/iphone' },
    { id: 4, label: 'Support', url: '/support' },
  ]

  return {
      navItems,
  }
}
