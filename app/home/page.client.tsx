'use client';
import { Icon } from '@/components/Icon';
import styles from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import { SIDEBAR_MENU } from '@/data/sidebarMenu';
import Input from '@/components/ui/Input/Input';

export default function PageClient() {
  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <Sidebar menu={SIDEBAR_MENU} userName="Eldar Gezalov" />
      {/* Main Content */}
      <main className={styles.main}>
        <section className={`${styles.card} ${styles.cardLg}`}>
          <div className={styles.header}>
            <h2>Create Aurorah Account</h2>
          </div>

          <form className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <Input
                  id="firstname"
                  name="firstname"
                  label="First Name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <Input
                  id="lastname"
                  name="lastname"
                  label="Last Name"
                  required
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <Input
                id="email"
                name="email"
                type="email"
                label="Email Address"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <Input
                id="phone"
                name="phone"
                type="tel"
                label="Phone Number"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <Input
                id="password"
                name="password"
                type="password"
                label="Password"
                required
              />
            </div>
            <button className={styles.btnLogin}>
              <span>Create an Account</span>
            </button>
          </form>
          <div className={styles.divider}>
            <span>or continue with</span>
          </div>
          <div className={styles.socialLogin}>
            <button type="button" className={styles.btnSocialLogin}>
              <Icon name="Google" size={32} />
            </button>
            <button type="button" className={styles.btnSocialLogin}>
              <Icon name="Facebook" size={32} />
            </button>
            <button type="button" className={styles.btnSocialLogin}>
              <Icon name="Apple" size={32} />
            </button>
          </div>
          <div className={styles.signupLink}>
            <p>
              Already have account? <Link href="/login">Sign In</Link>
            </p>
          </div>

          <div className={styles.footer}>
            <p>
              By creating an account, you agree to our user agreement and
              acknowledge our privacy notice.
            </p>
          </div>
        </section>
        <footer>
          <button type="button" className={styles.btnIcon}>
            <Image
              src="/logo-white.png"
              alt="logo"
              width={30}
              height={30}
              priority
            />
          </button>
        </footer>
      </main>
    </div>
  );
}
