import "./Recipe.css";
const Recipes = ({ title, image, calories }) => {
  // title.length < 20 ? title : `${title.slice(0, 20)}...`
  return (
    <div className="">
      <h2 className="recipe-title">
        {title.length < 30 ? title : `${title.slice(0, 30)}...`}
      </h2>
      <p className="recipe-calorie">Calories: {calories}</p>
      <img src={image} alt="" className="recipe-image" />
      <p className="recipe-link">Click here to view recipe</p>
    </div>
  );
};

export default Recipes;
