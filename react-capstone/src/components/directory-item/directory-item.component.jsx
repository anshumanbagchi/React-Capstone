import { useNavigate } from "react-router-dom";
import { DirectoryItemContainer, BackgroundImg, Body } from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImg imageUrl={imageUrl} />
      <Body>
        <h2 className="category-title">{title}</h2>
        <p className="category-cta">Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
