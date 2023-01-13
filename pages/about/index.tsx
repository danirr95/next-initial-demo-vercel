import { MainLayout } from "../../components/layouts/MainLayout";
import {LightLayout} from '../../components/layouts/LightLayout';

//En cada page será OBLIGATORIO que la exportación sea una exportación por defecto | En componentes dicha exportación puede ser normal -> export const Navbar = () => {}
export default function About() {
  return (
    <>
        {/* Colocamos así el nombre de la clase porque next se la servirá desde los estilso globales */}
        <div className={"description"}>
          <p>
            Edit this page on&nbsp;
            <code className={"code"}>about/index.tsx</code>
          </p>
        </div>
    </>
  );
}

//If you need multiple layouts, you can add a property 'getLayout' to your page, allowing you to return a React component for the layout. This allows you to define the layout on a per-page basis. Since we're returning a function, we can have complex nested layouts if desired | Esta funcion recibe nuestra página ya creada para así poder declararla dentro de layouts múltiples o anidados | El atributo 'page' podemos indicar que sea de tipo JSX.Element o ReactNode, los dos indican que devolverá un objeto de tipo jsx
About.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <LightLayout>
       { page }
      </LightLayout>
    </MainLayout>
  )
}