import ProductImage from "../../assets/placeholder-600x400.jpg";


export default function ProductCard({
  data: { brand, name, sku, price, multipleSizes },
}) {
  return (
    <div className="product-card md:py-9 py-5 px-4 border border-light-gray flex flex-col h-full">
      <div className="product-image aspect-[1.38/1] relative mb-6 w-full md:order-1 order-2">
        <img
          src={ProductImage}
          alt={name}
          className="object-cover  w-[288px] h-[209px]"
        />
      </div>
      <div className="text-blue md:mb-12 mb-8 w-full md:order-2 order-1 flex-grow">
        <h6 className="mb-2 md:text-sm text-xs font-semibold">{brand}</h6>
        <h3 className="md:text-2xl text-base font-bold">{name}</h3>
      </div>
      <div className="product-info w-full order-3">
        <div className="variant flex flex-wrap gap-2 items-center justify-between mb-3 md:text-base text-sm">
          <span className="text-placeholder">SKU: {sku}</span>
          <span
            className={`text-green ${
              multipleSizes ? "opacity-1" : "opacity-0"
            }`}
          >
            Multiple Sizes Available
          </span>
        </div>
        <div className="from text-blue md:text-lg  text-base mb-1">From</div>
        <div className="price font-semibold md:text-3xl text-xl mb-2">
          ${price}
        </div>
        <button className="text-sm uppercase w-full py-4 px-3 bg-secondary rounded-sm font-semibold">
          View <span className="hidden md:inline-block">Product</span>
        </button>
      </div>
    </div>
  );
}
