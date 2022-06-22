const { Product } = require("../models");

module.exports = async () => {
  const products = [];

  products.push(
    {
      name: "Arabica Coffee",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVSsvSqCdrcSRpZsTFkpeT89fcKAESbHZhA&usqp=CAU",
      featured: false,
      price: 10.2,
      description: "lorem ipsum etc",
      stock: 5,
      categoryId: 1,
    },
    {
      name: "Robusta Coffee",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVSsvSqCdrcSRpZsTFkpeT89fcKAESbHZhA&usqp=CAU",
      featured: true,
      price: 7.2,
      description: "lorem ipsum etc",
      stock: 15,
      categoryId: 1,
    },
    {
      name: "Liberica Coffee",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVSsvSqCdrcSRpZsTFkpeT89fcKAESbHZhA&usqp=CAU",
      featured: false,
      price: 4.2,
      description: "lorem ipsum etc",
      stock: 10,
      categoryId: 2,
    }
  );
  console.log(products[0].name);
  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
