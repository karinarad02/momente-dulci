import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  // ia doar primele 3 produse
  const topProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="bg-pink-50 py-20 text-center">
        <h1 className="text-5xl font-bold text-pink-600 mb-6">
          Bine ați venit la Momente Magice și Dulci
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Transformăm fiecare desert într-o experiență memorabilă. Torturi
          artizanale, prăjituri fine și deserturi personalizate pentru orice
          ocazie.
        </p>
      </section>

      {/* Produse populare */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-pink-600">
          Produse populare
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {topProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
