import React from "react";
import "./Ecommerce.css";
import ProductCard from "./components/ProductCard";
import img1 from "./assets/images/TREND.avif";
import img2 from "./assets/images/LEWEL.avif"
import img3 from "./assets/images/FABRIPPLE.avif"
import img4 from "./assets/images/MD.avif"
import img5 from "./assets/images/Alexender.avif"

function Ecommerce() {

    const datas = [
      {
        id: 1,
        pName: "TREND Sky Pack",
        desc: "TREND SKY Pack of 2 Polyester Regular Fit Men's T-Shirt ( Multicolor )",
        price: 599,
        img: img1,
      },
      {
        id: 2,
        pName: "LEWEL",
        desc: " Cotton Blend Oversized Fit Printed 3/4th Sleeves Men's Round",
        price: 399,
        img: img2,
      },
      {
        id: 3,
        pName: "FABRIPPLE",
        desc: "FABRIPPLE Polyester Regular Fit Printed Full Sleeves Men's Round ",
        price: 799,
        img: img3,
      },
      {
        id: 4,
        pName: "Alexender",
        desc: "Alexender Cotton Regular Fit Solid Full Sleeves Men's Mandarin Collar ",
        price: 499,
        img: img4,
      },
      {
        id: 5,
        pName: "MD",
        desc: "MD By Mathra Dass Men Cotton Blend Regular Fit Printed Polo T Shirt",
        price: 399,
        img: img5,
      },
    ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          <div className="row">
            {
                datas.map((product) => {
                    return <ProductCard product={product} />;
                })
            }            
          </div>
        </div>
        <div className="col-2">right</div>
      </div>
    </div>
  );
}

export default Ecommerce;
