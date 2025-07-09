"use client";
import React from "react";

const Item = ({ item }) => {
  return (
    <div className="food-menu-item style-two">
      <div
        className="image"
        style={{
          width: "75px",
          height: "75px",
          borderRadius: "50%",
          overflow: "hidden",
          margin: "0 auto",
          marginRight: "16px",
        }}
      >
        <img
          src={item.img}
          alt="Food Menu"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="content menu-item-content">
        <h5>
          <span className="title menu-item-title" style={{ textAlign: "left" }}>
            {item.title}
          </span>{" "}
          <span className="dots" />{" "}
          {!item.price2 && (
            <span
              className="price price-text"
              style={{ width: "175px", textWrap: "nowrap" }}
            >
              {item.price}
            </span>
          )}
          {item.price2 && (
            <div style={{ position: "relative", marginBottom: 10 }}>
              <span
                className="price price-text"
                style={{ width: "175px", textWrap: "nowrap" }}
              >
                {item.price}
              </span>
              <span
                className="price price-text"
                style={{
                  textWrap: "nowrap",
                  position: "absolute",
                  right: 0,
                  top: 24,
                }}
              >
                {item.price2}
              </span>
            </div>
          )}
        </h5>
        <p style={{ textAlign: "left" }}>{item.decs}</p>
      </div>
    </div>
  );
};

const RestaurantMenu = ({ menus }) => {
  const items = menus
    ? menus
    : [
        {
          id: 1,
          title: "Pizza",
          description:
            "bilder kun for illustrasjon, representerer ikke faktisk pizza",
          icon: "flaticon-cupcake",
          event: "food-tab1",
          items: [
            {
              id: 1,
              title: "Margarita",
              price: "medium 159kr",
              price2: "stor 209kr",
              decs: "Tomatsaus, mozarella, parmesan ost",
              img: "https://www.rakijagrill.com/wp-content/uploads/2020/07/Margherita-.jpg",
            },
            {
              id: 2,
              title: "American",
              price: "medium 169kr",
              price2: "stor 225kr",
              decs: "Marinert biff, champignon, løk",
              img: "https://img.freepik.com/premium-photo/pizza-with-beef-ham-mushrooms-tomato_105609-7354.jpg",
            },
            {
              id: 3,
              title: "Trippel",
              price: "medium 169kr",
              price2: "stor 220kr",
              decs: "Skinke, pepperoni, champignon",
              img: "https://images.deliveryhero.io/image/fd-no/products/15646092.jpg?width=%s",
            },
            {
              id: 4,
              title: "San marino",
              price: "medium 169kr",
              price2: "stor 230kr",
              decs: "Marinert biff, skinke, sopp, paprika, løk",
              img: "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/wnrygutl/35fc7bff-0c63-4631-ae92-cb9bed6d0f05.jpg",
            },
            {
              id: 5,
              title: "TACO",
              price: "medium 159kr",
              price2: "stor 220kr",
              decs: "Tacokjøtt, mais, jalapeno, nacho chips",
              img: "https://www.thereciperebel.com/wp-content/uploads/2021/03/taco-pizza-www.thereciperebel.com-600-38-of-38.jpg",
            },
            {
              id: 6,
              title: "PEPPERONI MIX",
              price: "medium 159kr",
              price2: "stor 220kr",
              decs: "Pepperoni, kjøttdeig, ananas",
              img: "https://i.redd.it/yep-i-went-there-pineapple-on-a-pepperoni-pizza-v0-v36i69mc9brc1.jpg?width=4032&format=pjpg&auto=webp&s=5214b739df46afae03e9cec941d5d8328a99d3f1",
            },
            // {
            //   id: 7,
            //   title: "QUATTRO FORMAGGI",
            //   price: "medium 149kr",
            //   price2: "stor 210kr",
            //   decs: "Gorgonzola, mozarella, parmesan, brie ost",
            //   img: "https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg",
            // },
            {
              id: 8,
              title: "Superior",
              price: "medium 159kr",
              price2: "stor 230kr",
              decs: "Marinert kylling, pepperoni, paprika, sopp",
              img: "https://metropizzachicken.ca/wp-content/uploads/2019/05/main-pizza-slide.jpg",
            },
            {
              id: 9,
              title: "HAWAI",
              price: "medium 159kr",
              price2: "stor 220kr",
              decs: "Skinke, ananas",
              img: "https://shop.eismann.nl/upload/product-detail-theme/nl/35140-pizza-hawai-F-20250304.jpg",
            },
            {
              id: 10,
              title: "Kylling spesial",
              price: "medium 159kr",
              price2: "stor 220kr",
              decs: "Marinert kylling, paprika, løk, sopp",
              img: "https://joyfoodsunshine.com/wp-content/uploads/2022/11/BBQ-chicken-pizza-recipe-9.jpg",
            },
            {
              id: 11,
              title: "Kebab pizza",
              price: "medium 159kr",
              price2: "stor 220kr",
              decs: "kebabkjøtt, mais, paprika, løk",
              img: "https://cdn.sanity.io/images/dycwrm08/production/261e6458a058af0ee1ee3af3d94d5c97b0e41dbd-1000x997.png",
            },
            {
              id: 12,
              title: "DONER pizza",
              price: "medium 169kr",
              price2: "stor 220kr",
              decs: "Donnerkjøtt, sopp, løk, paprika",
              img: "https://gadapizza.com/42-large_default/doner-kebap-pizza.jpg",
            },
            {
              id: 13,
              title: "vegetar",
              price: "stor 210kr",
              // price2: "stor 199kr",
              decs: "Paprika, løk. sopp, oliven, mais",
              img: "https://pbs.twimg.com/media/DaClp24XUAA8Bwc?format=jpg&name=4096x4096",
            },
            {
              id: 14,
              title: "FJERDINGBY SPESIAL",
              price: "medium 169kr",
              price2: "stor 230kr",
              decs: "Marinert biff, skinke, pepperoni, paprika",
              img: "https://halo-pg.com/wp-content/uploads/2021/10/Ultimate-Stuffed-Meatlovers-Pizza-1.jpg",
            },
            {
              id: 15,
              title: "Valgfri",
              price: "stor 240kr",
              // price2: "stor 240kr",
              decs: "Valgfrie ingredienser",
              img: "assets/images/food/rm-food2.png",
            },
          ],
        },
        {
          id: 2,
          title: "Grill",
          icon: "flaticon-broccoli",
          event: "food-tab2",
          items: [
            {
              id: 3,
              title: "Kebab i pita",
              price: "medium 99kr",
              price2: "stor 129kr",
              decs: "",
              img: "assets/images/food/kebab i pita_compressed.webp",
            },
            {
              id: 4,
              title: "Kebabrull",
              price: "medium 110kr",
              price2: "stor 135kr",
              decs: "",
              img: "assets/images/food/wjojsbkfp61spdk7wmxy_compressed.webp",
            },
            {
              id: 5,
              title: "kylling i pita",
              price: "medium 130kr",
              price2: "stor 140kr",
              decs: "",
              img: "assets/images/food/kebab i pita_compressed.webp",
            },
            {
              id: 6,
              title: "kyllingrull",
              price: "medium 135kr",
              price2: "stor 145kr",
              decs: "",
              img: "assets/images/food/kylling rullekebab_compressed.webp",
            },
            {
              id: 7,
              title: "Doner i pita",
              price: "medium 135kr",
              price2: "stor 145kr",
              decs: "",
              img: "assets/images/food/kebab i pita_compressed.webp",
            },
            {
              id: 8,
              title: "donerrull",
              price: "medium 135kr",
              price2: "stor 145kr",
              decs: "",
              img: "assets/images/food/q0rzbfeabbntdgkbvc2y_compressed.webp",
            },
            {
              id: 9,
              title: "Marinert kylling og doner",
              price: "medium 135kr",
              price2: "stor 145kr",
              decs: "",
              img: "assets/images/food/q0rzbfeabbntdgkbvc2y_compressed.webp",
            },
            // {
            //   id: 10,
            //   title: "marinert kylling og doner",
            //   price: "medium 125kr",
            //   price2: "stor 140kr",
            //   decs: "",
            //   img: "assets/images/food/kebab i pita_compressed.webp",
            // },
            {
              id: 11,
              title: "Sish kebabrull",
              price: "medium 120kr",
              price2: "stor 140kr",
              decs: "",
              img: "assets/images/food/q0rzbfeabbntdgkbvc2y_compressed.webp",
            },
            {
              id: 12,
              title: "Falafelrull",
              price: "medium 109kr",
              price2: "stor 130kr",
              decs: "",
              img: "assets/images/food/falaffelrull_compressed.webp",
            },
          ],
        },
        {
          id: 3,
          title: "Middagstallerken",
          icon: "flaticon-fried-potatoes",
          event: "food-tab3",
          items: [
            {
              id: 2,
              title: "kebabtallerken",
              price: "159kr",
              decs: "",
              img: "assets/images/food/kebabtallerken_compressed.webp",
            },
            {
              id: 3,
              title: "Kyllingtallerken",
              price: "179kr",
              decs: "",
              img: "assets/images/food/kylling kebabtallerken_compressed.webp",
            },
            {
              id: 4,
              title: "Donertallerken",
              price: "189kr",
              decs: "",
              img: "assets/images/food/faoyvkmvgncf0wqr07ba_compressed.webp",
            },
            {
              id: 5,
              title: "Marinert kylling og doner",
              price: "189kr",
              decs: "",
              img: "https://smilelevering.com/wp-content/uploads/2021/09/c017d2e2-7ad8-11eb-935f-cabe328652e3_kebabtallerken-1024x575.jpeg",
            },
            {
              id: 6,
              title: "Sish kebabtallerken",
              price: "160kr",
              decs: "",
              img: "assets/images/food/uuf3clwb4q8gsq0bzkog_compressed.webp",
            },
            {
              id: 7,
              title: "falafeltallerken",
              price: "149kr",
              decs: "",
              img: "assets/images/food/falaffeltallerken_compressed.webp",
            },
            {
              id: 8,
              title: "Løvstektallerken",
              price: "149kr",
              decs: "",
              img: "assets/images/food/løvstektallerken_compressed.webp",
            },
            {
              id: 9,
              title: "Biffsnadder tallerken",
              price: "189kr",
              decs: "",
              img: "https://smilelevering.com/wp-content/uploads/2021/09/c017d2e2-7ad8-11eb-935f-cabe328652e3_kebabtallerken-1024x575.jpeg",
            },
            {
              id: 10,
              title: "Nuggets tallerken (8stk)",
              price: "149kr",
              decs: "",
              img: "assets/images/food/jpbelisrqfxcpcsi5p6m_compressed.webp",
            },
          ],
        },
        {
          id: 4,
          title: "Smashburger",
          icon: "flaticon-crab",
          event: "food-tab4",
          items: [
            {
              id: 5,
              title: "Classic smashburgerr",
              price: "130kr",
              decs: "",
              img: "https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg",
            },
            {
              id: 6,
              title: "bbq meatlover smashburger",
              price: "160kr",
              decs: "",
              img: "https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg",
            },
            {
              id: 7,
              title: "Spicy smashburger",
              price: "140kr",
              decs: "",
              img: "https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg",
            },
            {
              id: 8,
              title: "Loaded animal fries",
              price: "150kr",
              decs: "",
              img: "https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg",
            },
            {
              id: 9,
              title: "tilleg med fries",
              price: "40kr",
              decs: "",
              img: "https://images.immediate.co.uk/production/volatile/sites/30/2021/03/French-fries-b9e3e0c.jpg",
            },
            {
              id: 10,
              title: "ekstra patty",
              price: "50kr",
              decs: "",
              img: "https://www.shutterstock.com/image-photo/freshly-grilled-burger-meat-isolated-600w-2394413795.jpg",
            },
          ],
        },
        {
          id: 5,
          title: "Cheeseburger",
          icon: "flaticon-poinsettia",
          event: "food-tab5",
          items: [
            {
              id: 2,
              title: "Cheeseburger",
              price: "100 gram - 109kr",
              decs: "Diverse menu features array delectable",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdp20o9NY1dVAsKfKqNUZs9XAIk5A0_ndo0A&s",
            },
            {
              id: 3,
              title: "Cheeseburger",
              price: "160 gram - 139kr",
              decs: "Diverse menu features array delectable",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdp20o9NY1dVAsKfKqNUZs9XAIk5A0_ndo0A&s",
            },
            {
              id: 4,
              title: "Cheeseburger",
              price: "200 gram - 169kr",
              decs: "Diverse menu features array delectable",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdp20o9NY1dVAsKfKqNUZs9XAIk5A0_ndo0A&s",
            },
            {
              id: 5,
              title: "Cheeseburger",
              price: "250 gram - 199kr",
              decs: "Diverse menu features array delectable",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdp20o9NY1dVAsKfKqNUZs9XAIk5A0_ndo0A&s",
            },
          ],
        },
        {
          id: 6,
          title: "Cheeseburger tallerken",
          icon: "flaticon-poinsettia",
          event: "food-tab5",
          items: [
            {
              id: 2,
              title: "burger & fries",
              price: "100 gram - 149kr",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/cheeseburger tallerken alle størrelser_compressed.webp",
            },
            {
              id: 3,
              title: "burger & fries",
              price: "160 gram - 175kr",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/cheeseburger tallerken alle størrelser_compressed.webp",
            },
            {
              id: 4,
              title: "burger & fries",
              price: "200 gram - 185kr",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/cheeseburger tallerken alle størrelser_compressed.webp",
            },
            {
              id: 5,
              title: "burger & fries",
              price: "250 gram - 199kr",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/cheeseburger tallerken alle størrelser_compressed.webp",
            },
          ],
        },
        {
          id: 7,
          title: "Crispy chicken burger",
          icon: "flaticon-poinsettia",
          event: "food-tab5",
          items: [
            {
              id: 2,
              title: "Burger",
              price: "109kr",
              decs: "",
              img: "assets/images/food/crispy chicken_compressed.webp",
            },
            {
              id: 1,
              title: "Burger & fries",
              price: "149kr",
              decs: "",
              img: "assets/images/food/crispy chicken tallerken_compressed.webp",
            },
          ],
        },
        {
          id: 8,
          title: "Tilbehør",
          icon: "flaticon-poinsettia",
          event: "food-tab5",
          items: [
            {
              id: 2,
              title: "Pommes frites",
              price: "medium 49kr",
              price2: "stor 69kr",
              decs: "",
              img: "https://www.recipetineats.com/tachyon/2022/09/Crispy-Fries_8.jpg",
            },
            {
              id: 2,
              title: "Brus",
              price: "0.5L 25kr",
              price2: "1.5L 50kr",
              decs: "",
              img: "https://www.fodors.com/wp-content/uploads/2019/03/HERO_Worlds_Best_Soda_Bundaberg_shutterstock_679079920.jpg",
            },
            {
              id: 3,
              title: "Hvitløksdressing",
              price: "25kr",
              decs: "",
              img: "https://images.matprat.no/jvzsnpaz2m-related/mobile/romme_og_urtedressing_1.jpg",
            },
            {
              id: 3,
              title: "Bbq saus",
              price: "25kr",
              decs: "",
              img: "https://www.kitchentreaty.com/wp-content/uploads/2013/04/bbq-sauce-recipe-1.jpg",
            },
            {
              id: 3,
              title: "Ekstra kjøtt",
              price: "55kr",
              decs: "",
              img: "https://linde-stories.com/wp-content/uploads/2021/03/shutterstock_1151970542.jpg",
            },
            {
              id: 3,
              title: "Ekstra ost",
              price: "40kr",
              decs: "",
              img: "https://th-thumbnailer.cdn-si-edu.com/Ic8C6eA58XhwkSsUB8CTA7b9k2A=/fit-in/1200x0/filters:focal(1060x711:1061x712)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/da/c6/dac6155f-9f9a-42dd-a4ab-31081473e684/gettyimages-1488679735.jpg",
            },
          ],
        },
      ];

  return (
    <section className="restaurant-menu-area pb-100 rpb-70 rel z-1">
      <div className="container container-1050">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="section-title text-center mb-50">
              <span className="sub-title mb-5">Vår meny</span>
              <h2>Vi server det du skulle ønske av pizza, burger og kebab</h2>
            </div>
          </div>
        </div>

        <div className="food-menu-tab-area">
          {items.map((menu) => (
            <div key={menu.id} className="menu-group mb-5 text-center">
              <h1 className="menu-title-name">{menu.title}</h1>
              <i>{menu.description}</i>
              <div className="row justify-content-center">
                {menu.items.map((item) => (
                  <div
                    className="col-lg-6 pb-30"
                    key={`${menu.id}-${menu.title}`}
                  >
                    <Item item={item} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default RestaurantMenu;
