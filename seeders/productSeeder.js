const { Product } = require("../models");

module.exports = async () => {
  const products = [];

  products.push(
    {
      name: "Arabica Coffee",
      image:
        "https://st.kofio.co/img_product/EC71GPY3S28pKOg/8840/7WgZxq28PeHk0fiIstvw_102215.png",
      featured: true,
      price: 50.5,
      description:
        "Super high-quality Arabica coffee infused with the smooth flavour of almonds. This is one of our personal favourites and is just like adding a dash of Disaronno to your coffee, but without the sweetness (and the booze). Very Italian, especially with a slice of biscotti on the side.",
      stock: 5,
      categoryId: 1,
    },
    {
      name: "Decaf Coffee",
      image:
        "https://cdn.discordapp.com/attachments/834507024796614656/989522756745953290/decaf.png",
      featured: true,
      price: 35.2,
      description:
        "This is our very first decaf offering that comes from 15 producers based in the region of southern Huila. The decaffeination process is carried out in DESCAFECOL factory using Ethyl Acetate derived from sugar cane. Final taste in the cup has notes of toast, vanilla, honey and cocoa. You will not be able to tell this is a decaf!",
      stock: 5,
      categoryId: 1,
    },
    {
      name: "Chroast - Bittersweet Symphony ",
      image:
        "https://st.kofio.co/img_product/rSKhlc8GLBmqPZ2/8463/o2za1xrJLYGb3i49VuRK_100426.png",
      featured: false,
      price: 28.2,
      description:
        "Chroast is a Czech specialty coffee roaster from Hradec Králové. We would love to be able to share with you the experience of the feeling you get when you witness your roasted coffee pouring out of the drum. It's at that moment that you realise that the coffee's long life journey is approaching the finish line.",
      stock: 5,
      categoryId: 1,
    },
    {
      name: "Black Tea",
      image:
        "https://sinfonia.com.uy/wp-content/uploads/2016/10/Earl-Grey-Selection-Lata-con-Ingredientes-Te-Negro-Sinfonia.jpg",
      featured: true,
      price: 5.2,
      description:
        "Black tea O.P. from the Indian region of Darjeeling, gently flavored with pieces of bergamot. Classic afternoon blend with delicate citrus notes. It is a careful selection of strands that provides an unmistakable flavor to this traditional infusion.",
      stock: 15,
      categoryId: 2,
    },
    {
      name: "Green Tea",
      image:
        "https://sinfonia.com.uy/wp-content/uploads/2020/04/Jaipur-Composicion-Te-Verde-Sinfonia-1-1024x1024.jpg",
      featured: true,
      price: 3.2,
      description:
        "Sencha and Bancha green tea with pieces of cardamom, ginger, star anise and coriander. Exotic mix whose spicy notes highlight its intense flavor, transporting us to India. Due to its properties, it is an excellent antioxidant that provides energy.",
      stock: 8,
      categoryId: 2,
    },
    {
      name: "Two blends selection with infuser",
      image:
        "https://sinfonia.com.uy/wp-content/uploads/2016/11/Seleccion-2-blends-Tubos-con-Infusor-Sinfonia-1.jpg",
      featured: false,
      price: 17.5,
      description:
        "Pack with two delicious blends in tube and infusing spoon. You can choose the two teas that you like the most within 26 options. Ideal as a gift or for those who want to try one of our varieties for the first time. Each tube contains between 12 and 18 grams, depending on the type of tea it contains, and yields approximately 6 to 8 cups.",
      stock: 8,
      categoryId: 2,
    },
    {
      name: "FrischSchoggi",
      image:
        "https://laderach.com/media/catalog/product/cache/0138abb1cd045ea962ef7970969ed197/1/0/10004708_02_1.jpg",
      featured: true,
      price: 150.5,
      description:
        "This FrischSchoggi made of fine milk chocolate is blended with large roasted and caramelized hazelnuts from Piedmont. This gourmet Swiss chocolate, made by Läderach chocolatier suisse, is produced at the highest quality using our chocolatier’s traditional craftsmanship. The FrischSchoggi™ is available in a quarter, half or as a whole chocolate slab. To best experience the aroma of the fresh chocolate, break and enjoy within 2-3 weeks.",
      stock: 10,
      categoryId: 3,
    },
    {
      name: "Läderach truffles",
      image:
        "https://laderach.com/media/catalog/product/cache/0138abb1cd045ea962ef7970969ed197/1/0/10097017_T_S.png",
      featured: true,
      price: 75.2,
      description:
        "An excellent selection of 16 pralines and truffles from Läderach chocolatier suisse. Experience unforgettable moments of joy and deliciousness with these varieties (with and without alcohol): Hazelnut Heart, Nougatine, Honey Triangle, Chessboard, Feuilletine, Truffle Dark, Truffle Champagne, Moccatine, Caramel Triangle, Carré Läderach, Truffle Capuccino, Truffle Milk, Trois Frères, Le Noir, Piedmontese and Walnut Log. (0.39 lbs)",
      stock: 15,
      categoryId: 3,
    },
    {
      name: "FrischSchoggi™ boat big",
      image:
        "https://laderach.com/media/catalog/product/cache/0138abb1cd045ea962ef7970969ed197/1/0/10092577_T_S-min_1.jpg",
      featured: false,
      price: 53.2,
      description:
        "A 1.43 lbs Läderach FrischSchoggi™ variety, this is the perfect item for sharing with a crowd, so everyone can select their favorite chocolate. Between milk chocolate with whole roasted hazelnuts, dark chocolate with whole almonds, and fruity white chocolate – there's something for everyone. Läderach chocolate is freshly made in Switzerland from bean to finished product.  Enjoy within 2-3 weeks of receipt.",
      stock: 10,
      categoryId: 3,
    }
  );
  console.log(products[0].name);
  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
