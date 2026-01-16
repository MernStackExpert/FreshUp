import SearchInput from "@/Components/SearchInput";
import ProductCard from "@/Shared/ProductCard";
import axiosInstance from "@/lib/axiosInstance";
import Link from "next/link";

export default async function AllGroceries({ searchParams }) {
  const params = await searchParams;
  const search = params.search || "";
  const category = params.category || "";
  const page = Number(params.page) || 1;

  let groceryData = { grocery: [], totalPages: 1 };

  try {
    const response = await axiosInstance.get(`/grocery`, {
      params: { search, category, page, limit: 8 }
    });
    groceryData = response.data;
  } catch (error) {
    console.error("Fetch Error:", error);
  }

  const categories = ["Vegetables", "Fruits", "Dairy", "Grains", "Meat", "Snacks"];

  return (
    <div className="min-h-screen bg-base-200 pt-28 pb-20">
      <div className="container mx-auto px-6">
        
        <div className="bg-base-100 p-8 rounded-[2.5rem] shadow-sm border border-base-300 mb-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="w-full lg:w-1/3">
              {/* Real-time Search Input Component */}
              <SearchInput placeholder="Search for fresh items..." />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Link href="/allgroceries" className={`btn btn-sm rounded-full ${!category ? 'btn-primary' : 'btn-ghost bg-base-200'}`}>All</Link>
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

        {/* Product Grid and Pagination remain the same... */}
        {/* ... */}
      </div>
    </div>
  );
}