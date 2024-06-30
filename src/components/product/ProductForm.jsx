import { useState } from "react";

const ProductForm = () => {
  const [products, setProducts] = useState([
    {
      id: 106,
      title: "Classic High-Waisted Athletic Shorts",
      price: 43,
      description:
        "Stay comfortable and stylish with our Classic High-Waisted Athletic Shorts. Designed for optimal movement and versatility, these shorts are a must-have for your workout wardrobe. Featuring a figure-flattering high waist, breathable fabric, and a secure fit that ensures they stay in place during any activity, these shorts are perfect for the gym, running, or even just casual wear.",
      images: [
        "https://i.imgur.com/eGOUveI.jpeg",
        "https://i.imgur.com/UcsGO7E.jpeg",
        "https://i.imgur.com/NLn4e7S.jpeg",
      ],
      time: new Date(),
      category: {
        id: 1,
        name: "Clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        time: new Date(),
      },
    },
    {
      id: 107,
      title: "Classic White Crew Neck T-Shirt",
      price: 39,
      description:
        "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.",
      images: [
        "https://i.imgur.com/axsyGpD.jpeg",
        "https://i.imgur.com/T8oq9X2.jpeg",
        "https://i.imgur.com/J6MinJn.jpeg",
      ],
      time: new Date(),
      category: {
        id: 1,
        name: "Clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        time: new Date(),
      },
    },
    {
      id: 108,
      title: "Classic White Tee - Timeless Style and Comfort",
      price: 73,
      description:
        "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
      images: [
        "https://i.imgur.com/Y54Bt8J.jpeg",
        "https://i.imgur.com/SZPDSgy.jpeg",
        "https://i.imgur.com/sJv4Xx0.jpeg",
      ],
      time: new Date(),
      category: {
        id: 1,
        name: "Clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        time: new Date(),
      },
    },
    {
      id: 109,
      title: "Classic Black T-Shirt",
      price: 35,
      description:
        "Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves, making it perfect for layering or wearing on its own. Durable and easy to care for, it's sure to become a favorite in your wardrobe.",
      images: [
        "https://i.imgur.com/9DqEOV5.jpeg",
        "https://i.imgur.com/ae0AEYn.jpeg",
        "https://i.imgur.com/mZ4rUjj.jpeg",
      ],
      time: new Date(),
      category: {
        id: 1,
        name: "Clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        time: new Date(),
      },
    },
    {
      id: 110,
      title: "Sleek White & Orange Wireless Gaming Controller",
      price: 69,
      description:
        "Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.",
      images: [
        "https://i.imgur.com/ZANVnHE.jpeg",
        "https://i.imgur.com/Ro5z6Tn.jpeg",
        "https://i.imgur.com/woA93Li.jpeg",
      ],
      time: new Date(),
      category: {
        id: 1,
        name: "Clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        time: new Date(),
      },
    },
    {
      id: 111,
      title: "Sleek Wireless Headphone & Inked Earbud Set",
      price: 44,
      description:
        "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
      images: [
        "https://i.imgur.com/yVeIeDa.jpeg",
        "https://i.imgur.com/jByJ4ih.jpeg",
        "https://i.imgur.com/KXj6Tpb.jpeg",
      ],
      time: new Date(),
      category: {
        id: 1,
        name: "Clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        time: new Date(),
      },
    },
    {
      id: 116,
      title: "Sleek Modern Laptop for Professionals",
      price: 97,
      description:
        "Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.",
      images: [
        "https://i.imgur.com/ItHcq7o.jpeg",
        "https://i.imgur.com/55GM3XZ.jpeg",
        "https://i.imgur.com/tcNJxoW.jpeg",
      ],
      time: new Date(),
      category: {
        id: 1,
        name: "Clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        time: new Date(),
      },
    },
    {
      id: 117,
      title: "Stylish Red & Silver Over-Ear Headphones",
      price: 39,
      description:
        "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
      images: [
        "https://i.imgur.com/YaSqa06.jpeg",
        "https://i.imgur.com/isQAliJ.jpeg",
        "https://i.imgur.com/5B8UQfh.jpeg",
      ],
      time: new Date(),
      category: {
        id: 1,
        name: "Clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        time: new Date(),
      },
    },
    {
      id: 118,
      title: "Sleek Mirror Finish Phone Case",
      price: 27,
      description:
        "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
      images: [
        "https://i.imgur.com/yb9UQKL.jpeg",
        "https://i.imgur.com/m2owtQG.jpeg",
        "https://i.imgur.com/bNiORct.jpeg",
      ],
      time: new Date(),
      category: {
        id: 1,
        name: "Clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        time: new Date(),
      },
    },
    {
      id: 119,
      title: "Sleek Smartwatch with Vibrant Display",
      price: 16,
      description:
        "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
      images: [
        "https://i.imgur.com/LGk9Jn2.jpeg",
        "https://i.imgur.com/1ttYWaI.jpeg",
        "https://i.imgur.com/sPRWnJH.jpeg",
      ],
      time: new Date(),
      category: {
        id: 1,
        name: "Clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        time: new Date(),
      },
    },
    {
      id: 120,
      title: "Mid-Century Modern Wooden Dining Table",
      price: 24,
      description:
        "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
      images: [
        "https://i.imgur.com/DMQHGA0.jpeg",
        "https://i.imgur.com/qrs9QBg.jpeg",
        "https://i.imgur.com/XVp8T1I.jpeg",
      ],
      time: new Date(),
      category: {
        id: 1,
        name: "Clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        time: new Date(),
      },
    },
    {
      id: 121,
      title: "Sleek Modern Leather Sofa",
      price: 53,
      description:
        "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
      images: [
        "https://i.imgur.com/Qphac99.jpeg",
        "https://i.imgur.com/dJjpEgG.jpeg",
        "https://i.imgur.com/MxJyADq.jpeg",
      ],
      time: new Date(),
      category: {
        id: 1,
        name: "Clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        time: new Date(),
      },
    },
    {
      id: 122,
      title: "Test",
      price: 1500,
      description: "Test",
      images: ["https://picsum.photos/200"],
      time: new Date(),
      category: {
        id: 2,
        name: "porfavor",
        image:
          "https://www.google.com/imgres?q=cars&imgurl=https%3A%2F%2Fprod-ripcut-delivery.disney-plus.net%2Fv1%2Fvariant%2Fdisney%2F25DAB0174DD0628DA9F43E863EE46348131275F683AF7A8F74AA7BEDAE39E777%2Fscale%3Fwidth%3D440%26aspectRatio%3D1.78%26format%3Dwebp&imgrefurl=https%3A%2F%2Fwww.disneyplus.com%2Fes-es%2Fmovies%2Fcars%2F41KYquQjLwge&docid=_4uRktr_vLEJVM&tbnid=GuVynRqmxli1hM&vet=12ahUKEwjTkMPG6fqGAxVWRzABHc0lBRoQM3oECDMQAA..i&w=440&h=248&hcb=2&ved=2ahUKEwjTkMPG6fqGAxVWRzABHc0lBRoQM3oECDMQAA",
        time: new Date(),
      },
    },
    {
      id: 123,
      title: "xxx",
      price: 1500,
      description: "xxx",
      images: ["https://picsum.photos/200"],
      time: new Date(),
      category: {
        id: 1,
        name: "Clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        time: new Date(),
      },
    },
    {
      id: 124,
      title: "My External Item",
      price: 999,
      description: "My External Item",
      images: ["https://picsum.photos/200"],
      time: new Date(),
      category: {
        id: 1,
        name: "Clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        time: new Date(),
      },
    },
    {
      id: 125,
      title: "iphone",
      price: 999,
      description: "loremadskjdas",
      images: [
        "https://openshop.uz/public/storage/uploads/products/photos/202210/LAeHdDTNTM9Ao4rMLczeZGQMJRrcvdrkNPtEebcn.jpg",
      ],
      time: new Date(),
      category: {
        id: 2,
        name: "porfavor",
        image:
          "https://www.google.com/imgres?q=cars&imgurl=https%3A%2F%2Fprod-ripcut-delivery.disney-plus.net%2Fv1%2Fvariant%2Fdisney%2F25DAB0174DD0628DA9F43E863EE46348131275F683AF7A8F74AA7BEDAE39E777%2Fscale%3Fwidth%3D440%26aspectRatio%3D1.78%26format%3Dwebp&imgrefurl=https%3A%2F%2Fwww.disneyplus.com%2Fes-es%2Fmovies%2Fcars%2F41KYquQjLwge&docid=_4uRktr_vLEJVM&tbnid=GuVynRqmxli1hM&vet=12ahUKEwjTkMPG6fqGAxVWRzABHc0lBRoQM3oECDMQAA..i&w=440&h=248&hcb=2&ved=2ahUKEwjTkMPG6fqGAxVWRzABHc0lBRoQM3oECDMQAA",
        time: new Date(),
      },
    },
  ]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/add-products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("There was an error inserting the products!", error);
    }
  };

  return (
    <div>
      <h1>Insert Products</h1>
      <button onClick={handleSubmit}>Insert Products button</button>
    </div>
  );
};

export default ProductForm;
