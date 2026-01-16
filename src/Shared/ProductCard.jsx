import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-base-100 rounded-[2rem] border border-base-200 p-5 transition-all duration-300 hover:shadow-2xl hover:border-primary/20 cursor-pointer flex flex-col">
      <div className="relative w-full mb-4 overflow-hidden rounded-[1.5rem] bg-base-200 aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          unoptimized
          className="transition-transform duration-500 group-hover:scale-110 object-cover"
        />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-orange-500 px-2 py-1 rounded-xl text-xs font-black flex items-center gap-1 shadow-sm">
          <FaStar className="text-[10px]" /> {product.rating}
        </div>

        {product.category && (
          <div className="absolute top-3 left-3 bg-primary text-primary-content px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
            {product.category}
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between flex-1 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-base-content leading-tight overflow-hidden whitespace-nowrap text-ellipsis">
            {product.name}
          </h3>
          <p className="text-xs text-gray-400 mt-1 font-medium italic">
            {product.email}
          </p>
        </div>

        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-tighter">
              Price
            </span>
            <span className="text-2xl font-black text-primary">
              ${product.price}
            </span>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-gray-400 block font-bold uppercase">
              Stock
            </span>
            <span className="text-sm font-bold text-base-content">
              {product.stock} units
            </span>
          </div>
        </div>

        <Link
          href={`/items/${product._id}`}
          className="btn btn-primary rounded-xl w-full text-center mt-3 shadow-md shadow-primary/10 border-none"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
