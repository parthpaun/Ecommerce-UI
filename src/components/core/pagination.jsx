import { getCurrentPage } from "../../util/common";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { startTransition, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";

const searchParamsName = "page";

export default function Pagination({ totalPages }) {
  const [searchParams] = useSearchParams();
  const currentPage = getCurrentPage(+searchParams.get(searchParamsName));
  const [page, setPage] = useState(currentPage);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const onPageChange = (type) => {
    const params = new URLSearchParams(searchParams);
    let value;
    if (type === "previous") {
      value = Math.max(page - 1, 1);
    } else {
      value = Math.min(page + 1);
    }
    params.delete(searchParamsName);
    params.append(searchParamsName, value);
    startTransition(() => {
      setPage(value);
      navigate(`${pathname}?${params.toString()}`);
    });
  };

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  return (
    <div className="flex items-center text-placeholder">
      <button
        className="lg:px-3 px-2 lg:py-3.5 py-2.5 text-sm text-gray-500  
          disabled:opacity-50  border border-dark-gray border-r-0"
        disabled={page === 1}
        onClick={() => onPageChange("previous")}
      >
        <ChevronLeft />
      </button>
      <div className="text-sm  border border-dark-gray lg:py-4 py-3 lg:px-3 px-2">
        Page <span className="font-semibold">{page}</span> of{" "}
        <span className="font-semibold">{totalPages}</span>
      </div>
      <button
        className="lg:px-3 px-2 lg:py-3.5 py-2.5 text-sm   border border-dark-gray border-l-0 disabled:opacity-50"
        onClick={() => onPageChange("next")}
        disabled={page === totalPages}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
