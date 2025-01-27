import { getFilterList } from "../../util/common";
import { X } from "lucide-react";
import { useLocation, useNavigate, useSearchParams } from "react-router";

export default function Chip({
  filterKey,
  text,
  startTransition,
  filters,
  setFilters,
}) {
  const [searchParams] = useSearchParams();
  const filterValue = getFilterList(searchParams.get(filterKey));
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const onRemove = () => {
    const params = new URLSearchParams(searchParams);
    const values = filterValue.filter((val) => val !== text);
    params.delete(filterKey);
    if (values.length) params.append(filterKey, values.join(","));
    params.delete("page");
    params.append("page", "1");

    startTransition(() => {
      setFilters({...filters, [filterKey]: values})
      navigate(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div className="flex py-3 px-4 bg-light-gray gap-1 items-center rounded-sm text-sm">
      <span>{text}</span>
      <X className="cursor-pointer" strokeWidth={1} onClick={onRemove} />
    </div>
  );
}
