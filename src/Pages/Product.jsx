const Product = ({ product }) => {
  const { title, price, category, image } = product;
  return (
    <div className="product">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>
        <strong>{price}</strong>
      </p>
      <p>{category}</p>
    </div>
  );
};

export default Product;
