import ProductCard from "@/Shared/ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "Organic Red Fuji Apple",
    price: 4.99,
    oldPrice: 6.50,
    weight: "1kg",
    rating: 4.8,
    discount: 20,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Fresh Broccoli Crowns",
    price: 2.45,
    weight: "500g",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Farm Fresh Large Brown Eggs",
    price: 12.00,
    oldPrice: 15.00,
    weight: "12 pcs",
    rating: 4.9,
    discount: 15,
    image: "https://images.unsplash.com/photo-1516746924755-babd21844370?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    name: "Whole Grain Organic Bread",
    price: 3.50,
    weight: "400g",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Products() {
  return (
    <section className="pt-20 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Best Sellers</span>
            <h2 className="text-3xl md:text-5xl font-black text-base-content mt-2">
              Popular Products on <span className="text-primary">FreshUp</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button className="btn btn-ghost hover:bg-primary hover:text-white rounded-full px-6">New Arrivals</button>
            <button className="btn btn-primary rounded-full px-6 shadow-lg shadow-primary/20">Best Rated</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="btn btn-outline btn-primary rounded-full px-12 btn-lg uppercase tracking-widest text-sm font-bold">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
}