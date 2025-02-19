import Image from "next/image";
import { Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  image?: string;
  category?: string;
  rating?: number;
  reviews?: number;
  installments?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  category = "MOTORSPORT",
  rating = 5.0,
  reviews = 404,
  installments = "6 cuotas de $6.650",
}) => {
  return (
    <div className="flex bg-white overflow-hidden max-w-2xl">
      {/* Imagen del producto */}
      <div className="flex items-center justify-center overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="object-cover"
          />
        ) : (
          <span className="text-gray-500">Placeholder</span>
        )}
      </div>

      {/* Información del producto */}
      <div className="w-2/3 p-4">
        {/* Categoría */}
        <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 uppercase">
          {category}
        </span>

        {/* Nombre del producto */}
        <h3 className="text-lg font-semibold mt-1">{name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-blue-500 text-sm mt-1">
          <span className="font-semibold">{rating}</span>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" stroke="none" />
          ))}
          <span className="text-gray-400 text-xs">({reviews})</span>
        </div>

        {/* Precio */}
        <p className="text-2xl font-bold mt-2">{price}</p>

        {/* Cuotas */}
        <p className="text-gray-500 text-sm">
          en <span className="font-semibold">{installments}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
