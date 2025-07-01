import { Link } from "react-router-dom";
import Rating from "../components/Rating.jsx";
import { useGetProductsQuery } from "../slices/productsApiSlice.js";

function Products() {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  return (
    <div className="min-h-screen py-12 px-4 bg-purpleBg">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-goldish">
            Our Premium Collection
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-white">
            Discover our amazing collection of products carefully selected just
            for you. Quality meets affordability in every item.
          </p>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
          </div>
        ) : isError ? (
          <div className="flex flex-col items-center justify-center h-96 text-center">
            <div className="text-white text-xl mb-4">
              Oops! Something went wrong while loading products.
            </div>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-3 bg-mediumBlue text-white rounded-lg hover:opacity-90 transition-all duration-200"
            >
              Try Again
            </button>
          </div>
        ) : products && products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                to={`/product/${product._id}`}
                key={product._id}
                className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group bg-white"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-darkerBg"></div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 line-clamp-2 transition-colors duration-200 group-hover:opacity-80 text-darkerBg">
                    {product.name}
                  </h2>
                  <p className="mb-4 text-sm line-clamp-3 leading-relaxed text-mediumBlue">
                    {product.desc}
                  </p>

                  {/* Rating Component */}
                  <div className="mb-4">
                    <Rating
                      rating={product.rating}
                      numReviews={product.numreviews}
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-lightPurple">
                      ₹{product.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-96">
            <div className="text-white text-xl">
              No products found.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;