"use client";
import React, { createRef } from "react";
import { CSSTransition } from "react-transition-group";

class CustomFade extends React.Component {
  nodeRef = createRef();
  render() {
    const { children, className, ...props } = this.props;
    return (
      <CSSTransition
        {...props}
        nodeRef={this.nodeRef}
        classNames="fade"
        timeout={300}
      >
        <div ref={this.nodeRef} className={className}>
          {children}
        </div>
      </CSSTransition>
    );
  }
}

const Item = ({ item }) => {
  return (
    <div className="food-menu-item style-two">
<div
  className="image"
  style={{
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto',
    marginRight: "16px"
  }}
>
  <img
    src={item.img}
    alt="Food Menu"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
  />
</div>
      <div className="content">
        <h5>
          <span className="title" style={{maxWidth: 150, textAlign: "left"}}>{item.title}</span> <span className="dots" />{" "}
            {!item.price2 && <span className="price" style={{width: "175px", textWrap: "nowrap"}}>{item.price}</span>}
          {item.price2 && <div style={{ position: "relative", marginBottom: 10 }}>
            <span className="price" style={{width: "175px", textWrap: "nowrap"}}>{item.price}</span>
            <span className="price" style={{textWrap: "nowrap", position: "absolute", right: 0, top: 24 }}>{item.price2}</span>
          </div>}
        </h5>
        <p style={{textAlign: "left"}}>{item.decs}</p>
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
          icon: "flaticon-cupcake",
          event: "food-tab1",
          items: [
            {
              id: 1,
              title: "Margarita",
              price: "medium 149kr",
              price2: "stor 199kr",
              decs: "Tomatsaus, mozarella, parmesan ost",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 2,
              title: "American",
              price: "medium 149kr",
              price2: "stor 210kr",
              decs: "Marinert biff, skinke, sopp, paprika, løk",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 3,
              title: "Tripel",
              price: "medium 149kr",
              price2: "stor 210kr",
              decs: "Skinke, pepperoni, champignon",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 4,
              title: "San marino",
              price: "medium 149kr",
              price2: "stor 220kr",
              decs: "Marinert biff, skinke, sopp, paprika, løk",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 5,
              title: "TACO",
              price: "medium 149kr",
              price2: "stor 220kr",
              decs: "Tacokjøtt, mais, jalapeno, nacho chips",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 6,
              title: "PEPPERONI MIX",
              price: "medium 149kr",
              price2: "stor 210kr",
              decs: "Pepperoni, kjøttdeig, ananas",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 7,
              title: "QUATTRO FORMAGGI",
              price: "medium 149kr",
              price2: "stor 210kr",
              decs: "Gorgonzola, mozarella, parmesan, brie ost",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 8,
              title: "Superior",
              price: "medium 149kr",
              price2: "stor 220kr",
              decs: "Marinert kylling, pepperoni, paprika, sopp",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 9,
              title: "HAWAI",
              price: "medium 149kr",
              price2: "stor 210kr",
              decs: "Skinke, ananas",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 10,
              title: "HAWAI",
              price: "medium 149kr",
              price2: "stor 210kr",
              decs: "Skinke, ananas",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 11,
              title: "Kylling spesial",
              price: "medium 149kr",
              price2: "stor 210kr",
              decs: "Marinert kylling, paprika, løk, sopp",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 12,
              title: "Kebab pizza",
              price: "medium 149kr",
              price2: "stor 199kr",
              decs: "kebabkjøtt, mais, paprika, løk",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 13,
              title: "DONNER pizza",
              price: "medium 149kr",
              price2: "stor 210kr",
              decs: "Donnerkjøtt, sopp, løk, paprika",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 14,
              title: "vegetar",
              price: "medium 149kr",
              price2: "stor 199kr",
              decs: "Paprika, løk. sopp, oliven, mais",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 15,
              title: "FJERDINGBY SPESIAL",
              price: "medium 149kr",
              price2: "stor 220kr",
              decs: "Marinert biff, skinke, pepperoni, paprika",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 16,
              title: "Valgfri",
              price: "medium 149kr",
              price2: "stor 225kr",
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
              price2: "stor 120kr",
              decs: "",
              img: "https://www.gilde.no/assets/images/_heroimage/3456020/Gilde_Kebabkjott_kebab_i_pita_miljobilde_no034179_Foto_Stian_Broch.png",
            },
            {
              id: 4,
              title: "Kebabrull",
              price: "medium 110kr",
              price2: "stor 125kr",
              decs: "",
              img: "https://www.gilde.no/assets/images/_heroimage/3456020/Gilde_Kebabkjott_kebab_i_pita_miljobilde_no034179_Foto_Stian_Broch.png",
            },
            {
              id: 4,
              title: "Kebabrull",
              price: "medium 110kr",
              price2: "stor 125kr",
              decs: "",
              img: "https://www.gilde.no/assets/images/_heroimage/3456020/Gilde_Kebabkjott_kebab_i_pita_miljobilde_no034179_Foto_Stian_Broch.png",
            },
            {
              id: 5,
              title: "kylling i pita",
              price: "medium 120kr",
              price2: "stor 130kr",
              decs: "",
              img: "https://www.gilde.no/assets/images/_heroimage/3456020/Gilde_Kebabkjott_kebab_i_pita_miljobilde_no034179_Foto_Stian_Broch.png",
            },
            {
              id: 6,
              title: "kyllingrull",
              price: "medium 120kr",
              price2: "stor 135kr",
              decs: "",
              img: "https://www.gilde.no/assets/images/_heroimage/3456020/Gilde_Kebabkjott_kebab_i_pita_miljobilde_no034179_Foto_Stian_Broch.png",
            },
            {
              id: 7,
              title: "Doner i pita",
              price: "medium 120kr",
              price2: "stor 130kr",
              decs: "",
              img: "https://www.gilde.no/assets/images/_heroimage/3456020/Gilde_Kebabkjott_kebab_i_pita_miljobilde_no034179_Foto_Stian_Broch.png",
            },
            {
              id: 8,
              title: "donerrull",
              price: "medium 125kr",
              price2: "stor 135kr",
              decs: "",
              img: "https://www.gilde.no/assets/images/_heroimage/3456020/Gilde_Kebabkjott_kebab_i_pita_miljobilde_no034179_Foto_Stian_Broch.png",
            },
            {
              id: 9,
              title: "Marinert kylling og doner i rull",
              price: "medium 120kr",
              price2: "stor 130kr",
              decs: "",
              img: "https://www.gilde.no/assets/images/_heroimage/3456020/Gilde_Kebabkjott_kebab_i_pita_miljobilde_no034179_Foto_Stian_Broch.png",
            },
            {
              id: 10,
              title: "marinert kylling og doner i pita",
              price: "medium 125kr",
              price2: "stor 140kr",
              decs: "",
              img: "https://www.gilde.no/assets/images/_heroimage/3456020/Gilde_Kebabkjott_kebab_i_pita_miljobilde_no034179_Foto_Stian_Broch.png",
            },
            {
              id: 11,
              title: "Sish kebabrull",
              price: "medium 110kr",
              price2: "stor 135kr",
              decs: "",
              img: "https://www.gilde.no/assets/images/_heroimage/3456020/Gilde_Kebabkjott_kebab_i_pita_miljobilde_no034179_Foto_Stian_Broch.png",
            },
            {
              id: 12,
              title: "Falafelrull",
              price: "medium 99kr",
              price2: "stor 125kr",
              decs: "",
              img: "https://www.gilde.no/assets/images/_heroimage/3456020/Gilde_Kebabkjott_kebab_i_pita_miljobilde_no034179_Foto_Stian_Broch.png",
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
              price: "149kr",
              decs: "",
              img: "https://smilelevering.com/wp-content/uploads/2021/09/c017d2e2-7ad8-11eb-935f-cabe328652e3_kebabtallerken-1024x575.jpeg",
            },
            {
              id: 3,
              title: "Kyllingtallerken",
              price: "169kr",
              decs: "",
              img: "https://smilelevering.com/wp-content/uploads/2021/09/c017d2e2-7ad8-11eb-935f-cabe328652e3_kebabtallerken-1024x575.jpeg",
            },
            {
              id: 4,
              title: "Donertallerken",
              price: "175kr",
              decs: "",
              img: "https://smilelevering.com/wp-content/uploads/2021/09/c017d2e2-7ad8-11eb-935f-cabe328652e3_kebabtallerken-1024x575.jpeg",
            },
            {
              id: 5,
              title: "Marinert kylling og doner",
              price: "175kr",
              decs: "",
              img: "https://smilelevering.com/wp-content/uploads/2021/09/c017d2e2-7ad8-11eb-935f-cabe328652e3_kebabtallerken-1024x575.jpeg",
            },
            {
              id: 6,
              title: "Sish kebabtallerken",
              price: "160kr",
              decs: "",
              img: "https://smilelevering.com/wp-content/uploads/2021/09/c017d2e2-7ad8-11eb-935f-cabe328652e3_kebabtallerken-1024x575.jpeg",
            },
            {
              id: 7,
              title: "falafeltallerken",
              price: "139kr",
              decs: "",
              img: "https://smilelevering.com/wp-content/uploads/2021/09/c017d2e2-7ad8-11eb-935f-cabe328652e3_kebabtallerken-1024x575.jpeg",
            },
            {
              id: 8,
              title: "Løvstektallerken",
              price: "149kr",
              decs: "",
              img: "https://smilelevering.com/wp-content/uploads/2021/09/c017d2e2-7ad8-11eb-935f-cabe328652e3_kebabtallerken-1024x575.jpeg",
            },
            {
              id: 9,
              title: "Biffsnadder tallerken",
              price: "179kr",
              decs: "",
              img: "https://smilelevering.com/wp-content/uploads/2021/09/c017d2e2-7ad8-11eb-935f-cabe328652e3_kebabtallerken-1024x575.jpeg",
            },
            {
              id: 10,
              title: "Chicken nuggets tallerken (8stk)",
              price: "149kr",
              decs: "",
              img: "https://smilelevering.com/wp-content/uploads/2021/09/c017d2e2-7ad8-11eb-935f-cabe328652e3_kebabtallerken-1024x575.jpeg",
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
              price: "35kr",
              decs: "",
              img: "https://images.immediate.co.uk/production/volatile/sites/30/2021/03/French-fries-b9e3e0c.jpg",
            },
            {
              id: 10,
              title: "ekstra patty",
              price: "40kr",
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
              price: "100 gram - 99kr",
              decs: "Diverse menu features array delectable",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdp20o9NY1dVAsKfKqNUZs9XAIk5A0_ndo0A&s",
            },
            {
              id: 3,
              title: "Cheeseburger",
              price: "160 gram - 129kr",
              decs: "Diverse menu features array delectable",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdp20o9NY1dVAsKfKqNUZs9XAIk5A0_ndo0A&s",
            },
            {
              id: 4,
              title: "Cheeseburger",
              price: "200 gram - 159kr",
              decs: "Diverse menu features array delectable",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdp20o9NY1dVAsKfKqNUZs9XAIk5A0_ndo0A&s",
            },
            {
              id: 5,
              title: "Cheeseburger",
              price: "250 gram - 169kr",
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
              price: "100 gram - 129kr",
              decs: "Diverse menu features array delectable",
              img: "https://media.istockphoto.com/id/618630648/photo/homemade-cheese-smash-burger.jpg?s=612x612&w=0&k=20&c=OGgJ0M1_omgjTOrpz_uRt2S48BiHVUrGNg57Qc4ljuA=",
            },
            {
              id: 3,
              title: "burger & fries",
              price: "160 gram - 159kr",
              decs: "Diverse menu features array delectable",
              img: "https://media.istockphoto.com/id/618630648/photo/homemade-cheese-smash-burger.jpg?s=612x612&w=0&k=20&c=OGgJ0M1_omgjTOrpz_uRt2S48BiHVUrGNg57Qc4ljuA=",
            },
            {
              id: 4,
              title: "burger & fries",
              price: "200 gram - 169kr",
              decs: "Diverse menu features array delectable",
              img: "https://media.istockphoto.com/id/618630648/photo/homemade-cheese-smash-burger.jpg?s=612x612&w=0&k=20&c=OGgJ0M1_omgjTOrpz_uRt2S48BiHVUrGNg57Qc4ljuA=",
            },
            {
              id: 5,
              title: "burger & fries",
              price: "250 gram - 179kr",
              decs: "Diverse menu features array delectable",
              img: "https://media.istockphoto.com/id/618630648/photo/homemade-cheese-smash-burger.jpg?s=612x612&w=0&k=20&c=OGgJ0M1_omgjTOrpz_uRt2S48BiHVUrGNg57Qc4ljuA=",
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
              price: "99kr",
              decs: "",
              img: "https://simplehomeedit.com/wp-content/uploads/2022/09/Southern-Fried-Chicken-Burger-1.webp",
            },
            {
              id: 1,
              title: "Burger & fries",
              price: "129kr",
              decs: "",
              img: "https://d1gzhdl9p2j7j0.cloudfront.net/-/media/frenchsuk18/recipes/american-favourites/buttermilk-chicken-burger-500x322.jpg?h=322&iar=0&w=500&rev=56dab42deb8143d2af471d322a804006&hash=2BD1F0A5917E7D3E6A3D34C3ED10B4C7",
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
              price: "35kr",
              decs: "",
              img: "https://linde-stories.com/wp-content/uploads/2021/03/shutterstock_1151970542.jpg",
            },
            {
              id: 3,
              title: "Ekstra ost",
              price: "30kr",
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
      {items.map(menu => (
        <div key={menu.id} className="menu-group mb-5 text-center">
          <h1>{menu.title}</h1>
          <div className="row justify-content-center">
            {menu.items.map(item => (
              <div className="col-lg-6 pb-30" key={`${menu.id}-${menu.title}`}>
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
