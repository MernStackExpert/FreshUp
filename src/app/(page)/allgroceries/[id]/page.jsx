import axiosInstance from "@/lib/axiosInstance";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegCheckCircle, FaArrowLeft, FaEnvelope, FaBox } from "react-icons/fa";

export default async function ProductDetails({ params }) {
  const { id } = await params;
  let product = null;

  try {
    const response = await axiosInstance.get(`/grocery/${id}`);
    product = response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-500">Product not found!</h2>
        <Link href="/allgroceries" className="btn btn-primary rounded-full">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 pt-15 pb-20">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <Link href="/allgroceries" className="flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors font-bold">
          <FaArrowLeft /> Back to All Groceries
        </Link>

        <div className="bg-base-100 rounded-[3rem] shadow-xl overflow-hidden border border-base-300">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left: Image Section */}
            <div className="relative h-[400px] lg:h-full min-h-[500px] bg-base-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-primary text-primary-content px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Right: Content Section */}
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-orange-500 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating) ? "text-orange-500" : "text-gray-300"} />
                  ))}
                </div>
                <span className="font-bold text-gray-600">({product.rating} Reviews)</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black text-base-content mb-6">
                {product.name}
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-4 p-4 bg-base-200 rounded-2xl border border-base-300">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary text-xl">
                    <FaBox />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Stock Available</p>
                    <p className="text-lg font-bold text-base-content">{product.stock} Units</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-base-200 rounded-2xl border border-base-300">
                  <div className="bg-secondary/10 p-3 rounded-xl text-secondary text-xl">
                    <FaEnvelope />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-gray-400 font-bold uppercase">Vendor Contact</p>
                    <p className="text-sm font-bold text-base-content truncate">{product.email}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-base-300">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Total Price</span>
                  <span className="text-5xl font-black text-primary">${product.price}</span>
                </div>
                <button className="btn btn-primary btn-lg flex-1 w-full rounded-2xl shadow-xl shadow-primary/20 text-white gap-3 text-lg">
                  Add To Cart
                </button>
              </div>

              <div className="mt-8 flex items-center gap-2 text-green-600 font-bold">
                <FaRegCheckCircle />
                <span>Quality Inspected & Freshness Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}