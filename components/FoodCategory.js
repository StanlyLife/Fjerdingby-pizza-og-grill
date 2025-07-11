import Link from "next/link";

const FoodCategory = () => {
  return (
    <section className="food-category-area pb-90 rpb-65 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-9">
            <div
              className="section-title text-center mb-50"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="sub-title mb-5">Våre matretter</span>
              <h2>
                Vi sørger for ferskt kjøtt og grønnsaker hver dag
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="featured-item">
              <div className="icon">
                <i className="flaticon-recommended-food" />
              </div>
              <div className="content">
                <h4>
                  <Link href="menu-restaurant">Godt kvalitetskjøtt</Link>
                </h4>
                <p>Alle våre burgere lages av norsk storfekjøtt</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="featured-item">
              <div className="icon">
                <i className="flaticon-fast-delivery" />
              </div>
              <div className="content">
                <h4>
                  <Link href="menu-restaurant">Matlevering</Link>
                </h4>
                <p>Vi sammarbeider med foodora og wolt for å levere mat til deg</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="featured-item">
              <div className="icon">
                <i className="flaticon-cashback" />
              </div>
              <div className="content">
                <h4>
                  <Link href="menu-restaurant">Vi gir deg pengene tilbake</Link>
                </h4>
                <p>Dersom du ikke liker maten</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FoodCategory;
