import Link from "next/link";

const CategoryBanner = () => {
  return (
    <div className="category-banner-area-two">
      <div className="container-fluid">
        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center">
          <div
            className="col"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div
              className="category-banner-item style-two"
              style={{
                backgroundImage:
                  "url(assets/images/banner/category-banner-two1.png)",
              }}
            >
              <span className="price">Kun 150kr</span>
              <h3>Kebab
                tallerken</h3>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span></span>
              </div>
              <Link href="shop" className="theme-btn style-two">
                Bestill nå <i className="far fa-arrow-alt-right" />
              </Link>
              <div className="food-image">
                <img
                  src="https://static.wixstatic.com/media/6b3973_b26b12b91d7f479783992682050bd75f~mv2.png/v1/crop/x_0,y_2,w_801,h_407/fill/w_260,h_132,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Web%20elements-08.png"
                  alt="Food"
                />
              </div>
            </div>
          </div>
          <div
            className="col"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div
              className="category-banner-item style-two color-black"
              style={{
                backgroundImage:
                  "url(assets/images/banner/category-banner-two2.png)",
              }}
            >
              <span className="price">fra 120kr</span>
              <h3>Vår spesial pizza</h3>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span></span>
              </div>
              <Link href="shop" className="theme-btn">
                Bestill nå <i className="far fa-arrow-alt-right" />
              </Link>
              <div className="food-image">
                <img
                  src="assets/images/banner/category-banner-food2.png"
                  alt="Food"
                />
              </div>
            </div>
          </div>
          <div
            className="col"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div
              className="category-banner-item style-two"
              style={{
                backgroundImage:
                  "url(assets/images/banner/category-banner-two1.png)",
              }}
            >
              <span className="price">Kun 130kr</span>
              <h3>Vegetar burger</h3>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span></span>
              </div>
              <Link href="shop" className="theme-btn style-two">
                Bestill nå <i className="far fa-arrow-alt-right" />
              </Link>
              <div className="food-image">
                <img
                  src="assets/images/banner/category-banner-food3.png"
                  alt="Food"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryBanner;
