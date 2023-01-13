import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

//Arreglo de items del navbar
const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

//Los nombres de los componentes (tanto la constante que les da nombre como el nombre del archivo, tendrán capitalización al inicio)
export const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {/* La clase creada en el archivo de estilos tiene un nombre no válido en javascript, así que (para que podamos usarla) éste lo indica como una propiedad computada (entre corchetes y con comillas) */}
      {menuItems.map(item =>
        <ActiveLink key={item.href} text={item.text} href={item.href} />
        )}
      {/*  
      <ActiveLink text="Home" href="/" />
      <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" />
      */}
    </nav>
  );
};
