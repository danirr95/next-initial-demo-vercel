import { FC, PropsWithChildren } from "react";

//Indicamos que nuestro functional component será de dicho tipo con : FC | Debemos indicar el tipo 'PropsWithChildren' para poder hacer uso de la prop 'children' del componente que nosotros creamos 'LightLAyout'
export const LightLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.6)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Light-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
