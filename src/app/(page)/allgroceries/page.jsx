import SearchInput from "@/Components/SearchInput";
import axiosInstance from "@/lib/axiosInstance";
import ProductCard from "@/Shared/ProductCard";
import Link from "next/link";


export default async function AllGroceries({ searchParams }) {
  const params = await searchParams;
  const search = params.search || "";
  const category = params.category || "";
  const page = Number(params.page) || 1;

  let groceryData = { grocery: [], totalPages: 1, totalGrocery: 0 };

  try {
    const response = await axiosInstance.get(`/grocery`, {
      params: { search, category, page, limit: 8 } 
    });
    groceryData = response.data;
  } catch (error) {
    console.error("Fetch Error:", error);
  }

  const categories = ["Vegetables", "Fruits", "Dairy", "Grains", "Meat", "Snacks", "Nuts", "Beverages"];

  return (
    <div className="min-h-screen bg-base-200 pt-10 pb-20">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Top Header Section */}
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-4xl font-black text-base-content italic">
            All <span className="text-primary">Groceries</span>
          </h1>
          <p className="text-gray-500 mt-2">Browse our fresh and organic collection ({groceryData.totalGrocery} items)</p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-base-100 p-6 rounded-[2.5rem] shadow-sm border border-base-300 mb-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="w-full lg:w-1/3">
              <SearchInput placeholder="Search for fresh items..." />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Link 
                href="/allgroceries" 
                className={`btn btn-sm rounded-full ${!category ? 'btn-primary' : 'btn-ghost bg-base-200'}`}
              >
                All Items
              </Link>
              {categories.map(cat => (
                <Link 
                  key={cat}
                  href={`/allgroceries?category=${cat}${search ? `&search=${search}` : ""}`} 
                  className={`btn btn-sm rounded-full ${category === cat ? 'btn-primary' : 'btn-ghost bg-base-200'}`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Product Display Grid */}
        {groceryData.grocery.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {groceryData.grocery.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-base-100 rounded-[3rem] shadow-sm border border-dashed border-base-300">
            <h2 className="text-2xl font-bold text-gray-400 italic">Oops! No groceries found.</h2>
            <Link href="/allgroceries" className="btn btn-primary mt-6 rounded-full px-8">Reset All Filters</Link>
          </div>
        )}

        {/* Dynamic Pagination Controls */}
        {groceryData.totalPages > 1 && (
          <div className="flex justify-center mt-20">
            <div className="join bg-base-100 shadow-md rounded-full p-1 border border-base-300">
              {[...Array(groceryData.totalPages)].map((_, i) => (
                <Link
                  key={i}
                  href={`/allgroceries?page=${i + 1}${search ? `&search=${search}` : ""}${category ? `&category=${category}` : ""}`}
                  className={`join-item btn btn-md rounded-full border-none px-6 ${page === i + 1 ? 'btn-primary shadow-lg shadow-primary/20' : 'btn-ghost text-gray-500'}`}
                >
                  {i + 1}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}