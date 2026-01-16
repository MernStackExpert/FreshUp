import axiosInstance from "@/lib/axiosInstance";
import ProductCard from "@/Shared/ProductCard";

export default async function Products() {
  let featuredProducts = [];

  try {
    const response = await axiosInstance.get("/grocery");

    const { grocery } = response.data;
    
    featuredProducts = grocery?.slice(0, 8) || [];
  } catch (error) {
    console.error("Error fetching products:", error);
  }

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
            <button className="btn btn-ghost hover:bg-primary hover:text-white rounded-full px-6 text-sm font-bold uppercase">New Arrivals</button>
            <button className="btn btn-primary rounded-full px-6 shadow-lg shadow-primary/20 text-sm font-bold uppercase">Best Rated</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full py-10 text-gray-400">No products found.</p>
          )}
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