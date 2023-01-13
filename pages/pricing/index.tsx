import { MainLayout } from "../../components/layouts/MainLayout";

//En cada page será OBLIGATORIO que la exportación sea una exportación por defecto | En componentes dicha exportación puede ser normal -> export const Navbar = () => {}
export default function Pricing() {
  return (
    <>
      <MainLayout>
        {/* Colocamos así el nombre de la clase porque next se la servirá desde los estilso globales */}
        <div className={"description"}>
          <p>
            Edit this page on&nbsp;
            <code className={"code"}>pricing/index.tsx</code>
          </p>
        </div>
      </MainLayout>
    </>
  );
}
