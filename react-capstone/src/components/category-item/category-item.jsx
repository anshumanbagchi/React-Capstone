import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <img src="" alt="" className="category-img" />
      <div className="category-body">
        <h2 className="category-title">{title}</h2>
        <p className="category-cta">Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
