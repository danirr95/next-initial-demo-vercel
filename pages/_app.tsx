import { NextPage } from "next";
import { AppProps } from "next/app";
import "../styles/globals.css";

//Creamos un type el cual contendrá el tipo 'NextPage' importado de next, así como un objeto con props adicionales
type NextPageWithLayout = NextPage & {
  //Dicha prop es opcional (?) y devuelve una funcion, dicha funcion recibe una pagina de tipo JSX.Element o ReactNode y devuelve un JSX.Element o ReactNode
  getLayout?: ( page: JSX.Element ) => JSX.Element;
}

//Creamos un type personalizado, el cual contiene el tipo AppProps importado de next, así como un objeto con props adicionales
type AppPropsWithLayout = AppProps & {
  //Dicha prop es del tipo personalizado 'NextPageWithLayout'
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  //Retornamos el layout obtenido, ya sea el layout múltiple almacenado en la prop 'getLayout' del componente usado o el layout simple que contenga cada componente en su jsx retornado
  return getLayout(<Component {...pageProps} />);
}
