
const FoodRecipesAPIRandom = (searchType,input) => {
    const [recipe, setRecipes] = useState([]);
    useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?random.php`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setRecipes(data);
        });
    }, []);
    return (
      <div>In Fetch
      </div>
    );
  };
  export default FoodRecipesAPIRandom;