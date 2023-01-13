import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from 'react';

//Indicamos que nuestro objeto style es un objeto del tipo CSSProperties, lo cual nos ayuda a no introducir propiedades que no sean de css, y por tanto, no serán válidas para nuestros estilos
const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

//Interface de tipos
interface Props{
  text: string;
  href: string
}

//Indicamos que nuestro componente es de tipo FC (functional component), así como extiende la interface que hemos creado para que dicho componente tenga las props deseadas de 'text' y 'href'
export const ActiveLink: FC<Props> = ({ text, href }) => {
  //Desestructuramos de la prop 'asPath' del objeto devuelto por el useRouter(), dicha prop contiene el path actual en el que se encuentre el user | userouter() is used to access the router object
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      {/* El atributo style solo acepta un objeto de CSSProperties o undefined */}
      <span style={asPath === href ? style : undefined}>{text}</span>
    </Link>
  );
};
