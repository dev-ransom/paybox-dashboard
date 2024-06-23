import React from 'react'

interface User {
  name: string
  email: string
  avatar: string
}

interface HeaderProps {
  title: string
  user: User
}

const Header: React.FC<HeaderProps> = ({ title, user }) => {
  return (
    <header className="bg-white p-4 shadow flex items-center justify-between text-[#242424]">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center space-x-4">
        <img alt={user.name} className="w-10 h-10 rounded-full" />
        <div>
          <p className="text-sm font-semibold">{user.name}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
