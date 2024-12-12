import React from 'react'

interface MainLayoutProps {
    children: React.ReactNode;
}
const MainLayout:React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="w-full min-h-[calc(100vh-238px)] bg-white">
      {children}
    </main>
  )
}

export default MainLayout
