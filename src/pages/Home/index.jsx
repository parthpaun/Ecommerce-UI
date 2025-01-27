import { useSearchParams } from "react-router";
import Heading from "../../components/core/heading";
import ProductsList from "../../components/core/products";
import { Products as allProducts } from "../../data/products";
import Breadcrumbs from "../../components/core/breadcrumbs";
import {
  getCurrentPage,
  getFilterList,
  perPage,
} from "../../util/common";

export default function Home() {
  const [searchParams] = useSearchParams();

  const currentPage = getCurrentPage(searchParams.get("page"));
  const sortBy = searchParams.get("sortBy");

  const filterBrands = getFilterList(searchParams.get("brand") ?? "");
  const filterViscosity = getFilterList(
    searchParams.get("viscosity") ?? ""
  );
  const filterSize = getFilterList(searchParams.get("size") ?? "");
  const filteredProducts = allProducts
    .filter(
      ({ brand }) => filterBrands.length === 0 || filterBrands.includes(brand)
    )
    .filter(
      ({ viscosity }) =>
        filterViscosity.length === 0 || filterViscosity.includes(viscosity)
    )
    .filter(
      ({ size }) => filterSize.length === 0 || filterSize.includes(size)
    );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-high") {
      return b.price - a.price;
    } else if (sortBy === "price-low") {
      return a.price - b.price;
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / perPage);

  const totalDataLength = sortedProducts.length;

  const indexOfLastProduct = currentPage * perPage;
  const indexOfFirstProduct = indexOfLastProduct - perPage;

  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <Breadcrumbs />
      <div className="pb-5 md:pb-10 xl:pb-14">
        <div className="container">
          <Heading />
          <ProductsList
            data={currentProducts}
            totalPages={totalPages}
            indexOfFirstProduct={
              currentProducts.length ? indexOfFirstProduct + 1 : 0
            }
            indexOfLastProduct={indexOfLastProduct}
            totalDataLength={totalDataLength}
          />
        </div>
      </div>
    </>
  );
}
