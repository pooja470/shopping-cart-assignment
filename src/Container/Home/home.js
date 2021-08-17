import React ,{useEffect} from "react";
import Carousel from "../../component/Carousel/Carousel";
import './home.scss';
import { fetchBanner } from "../../redux/banner/bannerAction";
import { fetchCategories } from "../../redux/categories/categoryAction";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Home=()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const banners = useSelector((state) => state.bannerReducer.data);
    const categories = useSelector((state) => state.categoryReducer.data);

    useEffect(() => {
        dispatch(fetchBanner());
        dispatch(fetchCategories());
        console.log("ddd",categories);
      }, []);

    const handleExplore=(id)=>{
        history.push(`/products#${id}`);
    }
    return(
        <div>
            hi
            {banners && <Carousel data={banners} />}
            <ul className="category-list">
            {categories.map((category) => (
              <li key={category.id} className="category">
                <article className="category-details">
                  <div className="category-title">{category.name}</div>
                  <div className="category-description">
                    {category.description}
                  </div>
                  <button
                    type="button"
                    className="category-explore-button"
                    onClick={() => handleExplore(category.id)}
                    tabIndex={0}
                    disabled={!category.enabled}
                    onKeyPress={() => handleExplore(category.id)}
                  >
                    Explore {category.name}
                  </button>
                </article>
                <article className="category-right">
                  <img
                    className="category-image"
                    src={category.imageUrl}
                    alt={category.name}
                    height="150"
                    width="200"
                  />
                </article>
              </li>
            ))}
          </ul>
        </div>
    )

}

export default Home;
