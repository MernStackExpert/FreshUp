import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-base-100 rounded-[2.5rem] border border-base-200 p-4 transition-all duration-300 hover:shadow-2xl hover:border-primary/20 flex flex-col h-full">
      {/* 1. Image Section */}
      <div className="relative w-full mb-4 overflow-hidden rounded-[2rem] bg-base-200 aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          unoptimized
          className="transition-transform duration-500 group-hover:scale-110 object-cover"
        />

        {/* 2. Rating Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-orange-500 px-2.5 py-1 rounded-xl text-xs font-black flex items-center gap-1 shadow-sm">
          <FaStar className="text-[10px]" /> {product.rating}
        </div>

        {/* 3. Category Badge */}
        {product.category && (
          <div className="absolute top-3 left-3 bg-primary text-primary-content px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
            {product.category}
          </div>
        )}
      </div>

      {/* 4. Content Section */}
      <div className="flex flex-col justify-between flex-1 px-2 pb-2">
        <div>
          <h3 className="text-lg font-bold text-base-content leading-tight truncate">
            {product.name}
          </h3>
          {/* Strict 1-line description clip */}
          <p className="text-sm text-gray-400 mt-1 truncate">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-5">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              Price
            </span>
            <span className="text-2xl font-black text-primary">
              ${product.price}
            </span>
          </div>
          
          <Link
            href={`/allgroceries/${product._id}`}
            className="btn btn-primary btn-md rounded-2xl px-6 shadow-lg shadow-primary/20 border-none normal-case"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}