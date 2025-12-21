'use client';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import styles from './Sidebar.module.scss';
import { IconName } from '../../icons/types';
import { useState } from 'react';
import { zenDots } from '@/app/fonts';
interface SidebarItem {
  label: string;
  href: string;
  icon: IconName;
}

interface SidebarProps {
  menu: SidebarItem[];
  userName: string;
}

export default function Sidebar({ menu, userName }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      {/* ================= Mobile Header ================= */}
      <header className={styles.mobileHeader}>
        <button
          aria-label="Toggle sidebar"
          className={styles.btnIcon}
          onClick={() => setMobileOpen((p) => !p)}
        >
          <Icon name={mobileOpen ? 'X' : 'List'} size={24} />
        </button>
        <div className={styles.mobileTitle}>
          <Icon name="Aurorah" size={28} />
          <h2 className={`${zenDots.className}`}>aurorah</h2>
        </div>
      </header>
      {/* ================= Overlay (Mobile) ================= */}
      {mobileOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}
      {/* ================= Sidebar ================= */}
      <aside
        className={`
        ${styles.sidebar}
        ${collapsed ? styles.collapsed : ''}
        ${mobileOpen ? styles.mobileOpen : ''}
      `}
      >
        {/* ===== Sidebar Header (Desktop/Tablet) ===== */}
        <header className={styles.header}>
          {!collapsed && <Icon name="Aurorah" size={28} />}

          <button
            aria-label="Toggle sidebar"
            className={styles.btnIcon}
            onClick={() => setCollapsed((p) => !p)}
          >
            <Icon name="Aurorah" size={28} />
            <Icon name="LayoutSidebarReverse" size={24} />
          </button>
        </header>
        {/* ================= Navigation ================= */}
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
        {/* ================= Footer ================= */}
        <footer>
          <button className={styles.btnSetting}>
            <Icon name="PeopleCircle" size={20} />
            <span>{userName}</span>
          </button>
        </footer>
      </aside>
    </>
  );
}
