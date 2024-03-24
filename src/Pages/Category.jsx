import { useParams } from "react-router-dom";
import Product from "./Product";
import ProductLoading from "./ProductLoading";
import { useQuery } from "@tanstack/react-query";

const Category = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${id}`
      );
      const data = await res.json();
      return data;
    },
    staleTime: 1000 * 60 * 10,
  });

  return (
    <div>
      <div className="wrapper">
        {error && <div>Something went wrong. {error.message}</div>}
        {isLoading ? (
          <>
            <h3></h3>
            <div className="skeleton-group">
              <ProductLoading />
              <ProductLoading />
              <ProductLoading />
              <ProductLoading />
            </div>
          </>
        ) : (
          <>
            <h3>{id.toUpperCase()}</h3>
            <div className="products">
              {/* {JSON.stringify(data)} */}
              {data &&
                data.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Category;
