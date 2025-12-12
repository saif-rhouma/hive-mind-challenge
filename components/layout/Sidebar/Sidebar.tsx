import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import styles from './Sidebar.module.scss';
import { IconName } from '../../icons/types';

interface SidebarItem {
  label: string;
  href: string;
  icon: IconName;
}

interface SidebarProps {
  menu: SidebarItem[];
  userName: string;
  onToggle?: () => void;
}

export default function Sidebar({ menu, userName, onToggle }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <Image src="/logo.png" alt="logo" width={28} height={28} priority />
        <button
          aria-label="Toggle sidebar"
          className={styles.btnIcon}
          onClick={onToggle}
        >
          <Icon name="LayoutSidebarReverse" size={24} />
        </button>
      </header>

      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {menu.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={styles.item}
                data-label={item.label}
              >
                <Icon name={item.icon} size={20} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <footer>
        <button className={styles.btnSetting}>
          <Icon name="PeopleCircle" size={20} />
          <span>{userName}</span>
        </button>
      </footer>
    </aside>
  );
}
