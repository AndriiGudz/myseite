import { useState } from 'react'
import './MorphingMenu.css'

interface MorphingMenuProps {
  onMenuToggle: (isOpen: boolean) => void;
}

function MorphingMenu({ onMenuToggle }: MorphingMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    const newState = !isOpen
    setIsOpen(newState)
    onMenuToggle(newState)
  }

  return (
    <div className={`morphing-menu ${isOpen ? 'open' : ''}`}>
      <label htmlFor="check" className="menu-label">
        <input type="checkbox" id="check" onChange={toggleMenu} checked={isOpen} />
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav className={`menu ${isOpen ? 'visible' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default MorphingMenu
