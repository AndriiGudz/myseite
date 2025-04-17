import { useState } from 'react'
import './MorphingMenu.css'
import { useTranslation } from 'react-i18next';

interface MorphingMenuProps {
  onMenuToggle: (isOpen: boolean) => void;
}

function MorphingMenu({ onMenuToggle }: MorphingMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { t } = useTranslation();

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
          <li><a href="/">{t(`home`)}</a></li>
          <li><a href="/portfolio">{t(`portfolio`)}</a></li>
          <li><a href="/resume">{t(`resume`)}</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default MorphingMenu
