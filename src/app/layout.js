import NavLink from './NavLink';
import './globals.css';
import styles from './styles.module.css';

export const metadata = {
  title: 'PKS Web Site',
  description: 'Generated by pks',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav className={styles.nav}>
          <NavLink />
        </nav>
        {children}
      </body>
    </html>
  );
}
