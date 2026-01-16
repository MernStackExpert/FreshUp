"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchInput({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1"); 

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    
    replace(`${pathname}?${params.toString()}`);
  }, 400);

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("search")?.toString()}
        className="input input-bordered w-full rounded-full pl-6 h-14 focus:outline-primary pr-28 text-base-content"
      />
      <div className="absolute right-2 top-2">
        <button className="btn btn-primary rounded-full px-6 pointer-events-none">
          Search
        </button>
      </div>
    </div>
  );
}