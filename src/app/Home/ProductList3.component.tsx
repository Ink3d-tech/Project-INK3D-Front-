import ProductCard from "./ProductCard.component";

const products = [
  {
    id: 1,
    name: "pantalon corte Oversize JDM MAZDA RX7 edición limitada",
    price: "$39.900",
    description: "Edición especial para amantes del JDM",
    category: "MOTORSPORT",
    image: "/images/pantalon1.jpg",
  },
  {
    id: 2,
    name: "pantalon JDM Nissan Skyline GTR",
    price: "$42.500",
    description: "Camiseta premium con diseño exclusivo",
    category: "MOTORSPORT",
    image: "/images/pantalon1.jpg",
  },
  {
    id: 3,
    name: "pantalon corte Oversize JDM MAZDA RX7 edición limitada",
    price: "$39.900",
    description: "Edición especial para amantes del JDM",
    category: "MOTORSPORT",
    image: "/images/pantalon1.jpg",
  },
  {
    id: 4,
    name: "pantalon JDM Nissan Skyline GTR",
    price: "$42.500",
    description: "Camiseta premium con diseño exclusivo",
    category: "MOTORSPORT",
    image: "/images/pantalon1.jpg",
  },
];

const ProductList3 = () => {
  return (
    
  
    <div className="max-w-4xl my-6 mx-6 p-3 bg-white rounded-lg">
      {/* Título "Novedades" con línea decorativa */}
      <h2 className="text-2xl font-semibold p-2 text-gray-800 text-center">Novedades</h2>
      <div className="w-full h-px bg-gray-300 my-4"></div>
      {/* Contenedor de productos */}
      <div className="space-y-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
   
  );
};

export default ProductList3;
