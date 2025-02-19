import Link from "next/link";
import { Truck, ShieldCheck, List, CreditCard } from "lucide-react";
import React from "react";

const buttons = [
  { label: "Envíos Gratis", icon: <Truck />, href: "/envios" },
  { label: "Compra Protegida", icon: <ShieldCheck />, href: "/proteccion" },
  { label: "Categorías", icon: <List />, href: "/categorias" },
  { label: "Medios de Pago", icon: <CreditCard />, href: "/pagos" },
];

const Buttons = () => {
  return (
    <div className="w-full bg-black py-6 flex justify-center">
      <div className="max-w-4xl w-full flex justify-evenly">
        {buttons.map(({ label, icon, href }, index) => (
          <Link
            key={index}
            href={href}
            className="flex flex-col items-center text-white transition transform hover:scale-110"
          >
            {/* Botón circular */}
            <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full shadow-md">
              {React.cloneElement(icon, { size: 30, className: "text-blue-500" })}
            </div>
            {/* Texto debajo */}
            <span className="mt-2 text-sm">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
