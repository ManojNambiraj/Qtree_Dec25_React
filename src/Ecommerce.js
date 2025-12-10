import React from "react";
import "./Ecommerce.css";
import ProductCard from "./components/ProductCard";
import img1 from "./assets/images/TREND.avif";
import img2 from "./assets/images/LEWEL.avif"
import img3 from "./assets/images/FABRIPPLE.avif"
import img4 from "./assets/images/MD.avif"
import img5 from "./assets/images/Alexender.avif"
import CartItems from "./components/CartItems";

function Ecommerce() {

    const datas = [
      {
        id: 1,
        pName: "TREND Sky Pack",
        desc: "TREND SKY Pack of 2 Polyester Regular Fit Men's T-Shirt ( Multicolor )",
        price: 599,
        img: img1,
        isStock: true,
      },
      {
        id: 2,
        pName: "LEWEL",
        desc: " Cotton Blend Oversized Fit Printed 3/4th Sleeves Men's Round",
        price: 399,
        img: img2,
        isStock: false,
      },
      {
        id: 3,
        pName: "FABRIPPLE",
        desc: "FABRIPPLE Polyester Regular Fit Printed Full Sleeves Men's Round ",
        price: 799,
        img: img3,
        isStock: true,
      },
      {
        id: 4,
        pName: "Alexender",
        desc: "Alexender Cotton Regular Fit Solid Full Sleeves Men's Mandarin Collar ",
        price: 499,
        img: img4,
        isStock: false,
      },
      {
        id: 5,
        pName: "MD",
        desc: "MD By Mathra Dass Men Cotton Blend Regular Fit Printed Polo T Shirt",
        price: 399,
        img: img5,
        isStock: true,
      },
    ];

  return (
    <div className="main container-fluid">
      <div className="row">
        <div className="left col-10">
          <div className="row">
            {datas.map((product) => {
              return <ProductCard product={product} />;
            })}
          </div>
        </div>
        <div className="right col-2">
          <ol class="list-group list-group-numbered">
            <CartItems />
            
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
