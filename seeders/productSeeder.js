const { Template } = require("ejs");
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
      stock: 13,
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
      stock: 15,
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
      stock: 19,
      categoryId: 1,
    },
    {
      name: "Ethiopian BirdSong Coffee",
      image:
        "https://st.kofio.co/img_product/CgFLhuwDtU8Pbsv/6244/sq_600_UiIc3j0Cg9eTAOmG2LuZ_253.png",
      featured: false,
      price: 23.2,
      description:
        "Our coffee journey began with an internship in Ethiopia, an interest in sustainable agriculture and a visit to Africa's first Bird Friendly® certified farm...At BirdSong Coffee, we focus on coffee that comes from forests, where they grow under the protection and shade of grown trees, in harmony with its surrounding nature. This gentle and traditional way of agriculture helps maintain a natural home environment for a variety of animal and plant species. Additionally, the forest provides small farmers with rich livelihood opportunities. Most of our coffee is certified organic and BirdFriendly (denoted by BIO + cultivation in agroforestry/shade-grown labels). ",
      stock: 11,
      categoryId: 1,
    },
    {
      name: "Brazil DaTerra",
      image:
        "https://st.kofio.co/img_product/wvPWgZyQNpUzKs9/8668/xEW0X4oRrgve5N93swqT_505.png",
      featured: false,
      price: 18.5,
      description:
        "Our coffee journey began with an internship in Ethiopia, an interest in sustainable agriculture and a visit to Africa's first Bird Friendly® certified farm...At BirdSong Coffee, we focus on coffee that comes from forests, where they grow under the protection and shade of grown trees, in harmony with its surrounding nature. This gentle and traditional way of agriculture helps maintain a natural home environment for a variety of animal and plant species. Additionally, the forest provides small farmers with rich livelihood opportunities. Most of our coffee is certified organic and BirdFriendly (denoted by BIO + cultivation in agroforestry/shade-grown labels). ",
      stock: 12,
      categoryId: 1,
    },
    {
      name: "East Timor",
      image:
        "https://st.kofio.co/img_product/zXxuqvMKaNLmTf4/8983/VidTz7516UxXyApHnefc_9.png",
      featured: false,
      price: 19.8,
      description:
        "Rebelbean gives energy to those who live life according to their own rules. Our roastery is for people who are Rebels for the cause, just like us. ",
      stock: 17,
      categoryId: 1,
    },
    {
      name: "Ethiopia Common Grounds",
      image:
        "https://st.kofio.co/img_product/sIrHcyXadRlOhGA/3564/sq_600_XR8MwsKA9hLGYaWgOdQx_100192.png",
      featured: false,
      price: 12.7,
      description:
        "Dark Woods Coffee is an adventurous coffee roaster, Barista school, and pop-up café nestled on the edge of Marsden village in the West Yorkshire Pennines. They roast their coffee by hand on a 1950’s Probat drum roaster in a beautifully refurbished Victorian textile mill beside the Huddersfield Narrow Canal and River Colne.",
      stock: 35,
      categoryId: 1,
    },
    {
      name: "Brazil Horizont",
      image:
        "https://st.kofio.co/img_product/6oTz9ULGdmM0DrF/6850/sq_600_ymkBhKWRagMt9DpYsifx_3.png",
      featured: false,
      price: 13.4,
      description:
        "Speciality Coffee Roasters from the North of Czech Republic. We know that coffee isn't just about your daily caffeine intake. We also know that it goes a long way before it gets to our cups. From the planting of the seedling to handpicking of ripe fruit, washing, peeling, meticulous drying, and finally packing into jute bags so that the beans can head on their way across the ocean into Europe. We know it's a lot of work. ",
      stock: 13,
      categoryId: 1,
    },
    {
      name: "Brazil Colombia Espresso Blend",
      image:
        "https://st.kofio.co/img_product/wvPWgZyQNpUzKs9/8221/sq_600_r1gtzIA0dY4HMca3R7QB_505.png",
      featured: false,
      price: 24.3,
      description:
        "The dream that fuels The Coffee Collective roasters is to systematically explore the entire world of exceptional coffee, its properties and characteristics and as a consequence improve the conditions for coffee farmers all around the world. ",
      stock: 21,
      categoryId: 1,
    },
    {
      name: "Black Tea",
      image:
        "https://sinfonia.com.uy/wp-content/uploads/2016/10/Earl-Grey-Selection-Lata-con-Ingredientes-Te-Negro-Sinfonia.jpg",
      featured: true,
      price: 25.2,
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
      price: 23.2,
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
      name: "One blend selection",
      image:
        "https://sinfonia.com.uy/wp-content/uploads/2016/11/Pasion-Tango-Tubo-con-Ingredientes-Te-Negro-Sinfonia.jpg",
      featured: false,
      price: 13.8,
      description:
        "An exquisite blend in a tube. You can choose the tea you like best within 25 options. Ideal as a gift or for those who want to try one of our varieties for the first time. You can also find the tube pack with infusing spoon here.Each tube contains between 12 and 18 grams, depending on the type of tea it contains, and yields approximately 6 to 8 cups.",
      stock: 24,
      categoryId: 2,
    },
    {
      name: "Black Noel Tea",
      image:
        "https://sinfonia.com.uy/wp-content/uploads/2019/12/Noel-Lata-con-Ingredientes-Te-Negro-Sinfonia.jpg",
      featured: false,
      price: 23.7,
      description:
        "Black tea O.P. from Assam with pieces and peel of orange, apple, sunflower petals and hints of cinnamon. Aromatic combination where sweet and spicy notes stand out. A limited edition blend designed by Mónica Devoto to drink with the family this holiday season. Inspired by the traditional Christmas Tea. Special presentation in gold tin.",
      stock: 8,
      categoryId: 2,
    },
    {
      name: "White Lemon Tea",
      image:
        "https://sinfonia.com.uy/wp-content/uploads/2016/10/Limon-Oriental-Lata-con-Ingredientes-Te-Blanco-Sinfonia.jpg",
      featured: false,
      price: 23.7,
      description:
        "Pai Mu Tan white tea with lemon and orange slices, and hints of lemongrass. It is a sophisticated and smooth blend, with a special citrus aroma and flavor to stimulate the senses. Ideal to drink at any time of the day.",
      stock: 25,
      categoryId: 2,
    },
    {
      name: "Orange sudafrican organic Tea",
      image:
        "https://sinfonia.com.uy/wp-content/uploads/2017/08/Naranja-Sudafricana-Lata-con-Ingredientes-Tisana-Sinfonia.jpg",
      featured: false,
      price: 23.7,
      description:
        "Pai Mu Tan white tea with lemon and orange slices, and hints of lemongrass. It is a sophisticated and smooth blend, with a special citrus aroma and flavor to stimulate the senses. Ideal to drink at any time of the day.",
      stock: 25,
      categoryId: 2,
    },
    {
      name: "One blend with infuser selection",
      image:
        "https://sinfonia.com.uy/wp-content/uploads/2016/11/Vals-de-Azahares-Tubo-con-Infusor-Te-Blanco-Sinfonia.jpg",
      featured: false,
      price: 43.5,
      description:
        "Pack with an exquisite blend in tube and infusing spoon. You can choose the tea you like best within 25 options. Ideal as a gift or for those who want to try one of our varieties for the first time.",
      stock: 8,
      categoryId: 2,
    },
    {
      name: "Citrus fruit pack",
      image:
        "https://sinfonia.com.uy/wp-content/uploads/2021/03/Pack-Frutal-Citrico-Infusor-con-Lata-Six-y-Lata-Citrus-Te-Sinfonia.jpg",
      featured: false,
      price: 43.5,
      description:
        "A pack for lovers of classic flavors, with a fruity and citrus touch. Includes a can of Six Apples black tea -traditional with apple pieces, ideal for those who like to add a dash of milk-, a can of Citrus Intense green tea -with lemongrass and ginger that increase defenses- and an infuser spoon. A selection of blends balanced and ideal for autumn due to its ingredients and properties.",
      stock: 8,
      categoryId: 2,
    },
    {
      name: "FrischSchoggi",
      image:
        "https://laderach.com/media/catalog/product/cache/0138abb1cd045ea962ef7970969ed197/1/0/10004708_02_1.jpg",
      featured: false,
      price: 50.5,
      description:
        "This FrischSchoggi made of fine milk chocolate is blended with large roasted and caramelized hazelnuts from Piedmont. This gourmet Swiss chocolate, made by Läderach chocolatier suisse, is produced at the highest quality using our chocolatier’s traditional craftsmanship. The FrischSchoggi™ is available in a quarter, half or as a whole chocolate slab. To best experience the aroma of the fresh chocolate, break and enjoy within 2-3 weeks.",
      stock: 10,
      categoryId: 3,
    },
    {
      name: "Läderach truffles",
      image:
        "https://laderach.com/media/catalog/product/cache/0138abb1cd045ea962ef7970969ed197/1/0/10097017_T_S.png",
      featured: false,
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
    },
    {
      name: "FrischSchoggi™ pouch big",
      image:
        "https://laderach.com/media/catalog/product/cache/0138abb1cd045ea962ef7970969ed197/1/0/10092573_01-min.jpg",
      featured: true,
      price: 53.5,
      description:
        "A Läderach FrischSchoggi™ variety, this is the perfect item for sharing with a crowd, so everyone can select their favorite chocolate. Between milk chocolate with whole roasted hazelnuts, dark chocolate with whole almonds, and fruity white chocolate – there's something for everyone. Läderach chocolate is freshly made in Switzerland from bean to finished product. Enjoy within 2-3 weeks of receipt. (1.10 lbs)",
      stock: 10,
      categoryId: 3,
    },
    {
      name: "FrischSchoggi™ Almond Dark",
      image:
        "https://laderach.com/media/catalog/product/cache/0138abb1cd045ea962ef7970969ed197/1/0/10004707_02_1.jpg",
      featured: false,
      price: 26.8,
      description:
        "This FrischSchoggi™ made of fresh dark chocolate is refined with large roasted and caramelised almonds from California. This Swiss gourmet chocolate is made by Läderach chocolatier suisse and processed to the highest quality using traditional chocolatier craftsmanship. The FrischSchoggi™ is available in a quarter, half or as a whole chocolate slab. To best experience the aroma of the fresh chocolate, break and enjoy within 2-3 weeks.",
      stock: 10,
      categoryId: 3,
    },
    {
      name: "Pralines assorted 11pcs heart box",
      image:
        "https://laderach.com/media/catalog/product/cache/0138abb1cd045ea962ef7970969ed197/1/0/10095587_01_1.jpg",
      featured: true,
      price: 28.9,
      description:
        "Contains four different fresh heart-shaped pralines and seven fresh standard pralines from our classic product range, decorated with a bow A romantic way to show your love and affection on Valentine’s Day. (0.26 lbs)",
      stock: 10,
      categoryId: 3,
    },
    {
      name: "Truffles Classic with alcohol 18 pcs per box",
      image:
        "https://laderach.com/media/catalog/product/cache/0138abb1cd045ea962ef7970969ed197/1/0/10006263_01_T_S_3_1.jpg",
      featured: false,
      price: 36.5,
      description:
        "A delicious mix of pure chocolate truffles and alcohol-filled truffles. (0.44 lbs)",
      stock: 10,
      categoryId: 3,
    },
    {
      name: "FrischSchoggi™ pouch small",
      image:
        "https://laderach.com/media/catalog/product/cache/0138abb1cd045ea962ef7970969ed197/1/0/10092573_T_S-min_1.jpg",
      featured: false,
      price: 28.5,
      description:
        "A Läderach FrischSchoggi™ variety, this is the perfect item for sharing with a crowd, so everyone can select their favorite chocolate. Between milk chocolate with whole roasted hazelnuts, dark chocolate with whole almonds, and fruity white chocolate – there's something for everyone. Läderach chocolate is freshly made in Switzerland from bean to finished product. Enjoy within 2-3 weeks of receipt. (0.55 lbs)",
      stock: 15,
      categoryId: 3,
    },
    {
      name: "Pralines Classic Assorted 4 pcs per box",
      image:
        "https://laderach.com/media/catalog/product/cache/0138abb1cd045ea962ef7970969ed197/1/0/10097136_T_S.jpg",
      featured: false,
      price: 11.9,
      description:
        "A delicious selection of 4 exquisite truffles for an unforgettable taste experience. The box contains the following truffles (without alcohol): Truffle Milk, Truffle White, Truffle Caramel, Truffle Dark. (0.20 lbs)",
      stock: 35,
      categoryId: 3,
    }
  );
  console.log(products[0].name);
  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
