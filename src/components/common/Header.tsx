import React from 'react'
import { Navbar } from '@/components/common'
import { cn } from '@/utils/clsx';

interface HeaderProps {
  className?: string;
}
const Header:React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(`bg-gray-900/80 ` , className)}>
        <Navbar />
    </header>
)
}

export default Header
