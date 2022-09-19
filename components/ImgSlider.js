import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/ImgSlideBar.module.css'

function ImgSlider(){
	var settings = {
	    dots: true,
	    infinite: true,
	    speed: 500,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: true
  	};
	return(
		<Slider {...settings} className={styles.Carousel}>
			<div className={styles.Wrap}>
				<img alt="" src="images/slider-badag.jpg"/>
			</div>

			<div className={styles.Wrap}>
				<img alt="" src="images/slider-badging.jpg"/>
			</div>

			<div className={styles.Wrap}>
				<img alt="" src="images/slider-scale.jpg"/>
			</div>

			<div className={styles.Wrap}>
				<img alt="" src="images/slider-scales.jpg"/>
			</div>
		</Slider>
	)
}

export default ImgSlider