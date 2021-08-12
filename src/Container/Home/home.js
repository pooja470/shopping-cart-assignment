import React ,{useEffect} from "react";
import Carousel from "../../component/Carousel/Carousel";
import { fetchBanner } from "../../redux/banner/bannerAction";
import { useSelector, useDispatch } from "react-redux";

const Home=()=>{
    const dispatch = useDispatch();
    const banners = useSelector((state) => state.bannerReducer.data);
    console.log("bannnners",banners);
    useEffect(() => {
        dispatch(fetchBanner());
        console.log("bannnners+++++",banners);
      }, []);
    return(
        <div>
            hi
            {banners && <Carousel data={banners} />}
        </div>
    )

}

export default Home;
