import FilterBar from "./filter-bar";
import Filters from "./filters";
import ProductCard from "./product-card";
import Pagination from "./pagination";

export default function Products({
  data = [],
  totalPages,
  totalDataLength,
  indexOfFirstProduct,
  indexOfLastProduct,
}) {
  return (
    <div className="products flex flex-grow gap-4">
      <FilterBar />
      <section className="flex-grow">
        <Filters
          totalPages={totalPages}
          totalDataLength={totalDataLength}
          indexOfFirstProduct={indexOfFirstProduct}
          indexOfLastProduct={indexOfLastProduct}
        />
        {!data.length && (
          <p className="text-center my-10 text-xl">No Product found</p>
        )}
        <div className="grid xl:grid-cols-3 grid-cols-2 w-full md:mb-8 mb-5">
          {data.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
        {data.length > 0 && (
          <div className="w-full flex flex-wrap justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        )}
      </section>
    </div>
  );
}
