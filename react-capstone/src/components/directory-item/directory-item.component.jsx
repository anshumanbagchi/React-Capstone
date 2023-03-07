import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className="directory-item-container">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <img src="" alt="" className="category-img" />
      <div className="body">
        <h2 className="category-title">{title}</h2>
        <p className="category-cta">Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
