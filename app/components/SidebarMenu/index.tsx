import Link from 'next/link'
import React from 'react'
import { BiHome } from 'react-icons/bi'
import {
  FaHome,
  FaChartBar,
  FaMoneyCheck,
  FaCreditCard,
  FaTrophy,
  FaCog,
  FaUniversity,
} from 'react-icons/fa'

const Sidebar: React.FC = () => {
  const sidebarLinks = [
    { href: '#', icon: BiHome, label: 'Home' },
    { href: '#', icon: FaChartBar, label: 'Analytics Dashboard' },
    { href: '#', icon: FaMoneyCheck, label: 'Sale Hub' },
    { href: '#', icon: FaCreditCard, label: 'Spend Management' },
    { href: '#', icon: FaTrophy, label: 'Leaderboard' },
    { href: '#', icon: FaCog, label: 'Profile & Settings' },
    { href: '#', icon: FaUniversity, label: 'Bank Performance' },
  ]

  return (
    <aside className="w-64 text-white p-4 bg-gray-900 ">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Paybox360</h2>
        <p className="text-sm">by UserPriye</p>
      </div>
      <nav>
        <ul>
          {sidebarLinks.map((link, index) => (
            <li key={index} className="mb-3">
              <Link
                href={link.href}
                className="flex items-center space-x-2 hover:text-blue-500"
              >
                <link.icon />
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
