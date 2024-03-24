import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductLoading = () => {
  return (
    <div className="product-skeleton">
      <Skeleton height={200} />
      <Skeleton height={30} />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

export default ProductLoading;
