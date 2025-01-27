import { startTransition, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";

const options = [
  { label: "Price: Low to High", value: "price-low" },
  { label: "Price: High to Low", value: "price-high" },
];

const searchParamsName = "sortBy";

export default function SortBy() {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(
    searchParams.get(searchParamsName) ?? ""
  );
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const onSort = (event) => {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams);
    params.delete(searchParamsName);
    params.append(searchParamsName, value);
    startTransition(() => {
      setSortBy(value);
      navigate(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div className="flex items-center justify-between gap-3">
      <label htmlFor="sort" className="font-semibold">
        Sort By:
      </label>
      <select
        id="sort"
        className="lg:p-4 p-3 lg:min-w-[210px] min-w-[180px] text-sm border border-dark-gray text-light-mid"
        value={sortBy}
        onChange={onSort}
      >
        <option value="" disabled>
          Select Sort By
        </option>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
