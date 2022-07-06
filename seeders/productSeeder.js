const { Template } = require("ejs");
const { Product } = require("../models");

module.exports = async () => {
  const products = [];

  products.push(
    {
      name: "Arabica Coffee",
      image: "product-images/1-1_brazilie.png",
      featured: true,
      price: 50.5,
      description:
        "Super high-quality Arabica coffee infused with the smooth flavour of almonds. This is one of our personal favourites and is just like adding a dash of Disaronno to your coffee, but without the sweetness (and the booze). Very Italian, especially with a slice of biscotti on the side.",
      stock: 13,
      categoryId: 1,
    },
    {
      name: "Decaf Coffee",
      image: "product-images/1-2_decaf.png",
      featured: true,
      price: 35.2,
      description:
        "This is our very first decaf offering that comes from 15 producers based in the region of southern Huila. The decaffeination process is carried out in DESCAFECOL factory using Ethyl Acetate derived from sugar cane. Final taste in the cup has notes of toast, vanilla, honey and cocoa. You will not be able to tell this is a decaf!",
      stock: 15,
      categoryId: 1,
    },
    {
      name: "Chroast - Bittersweet Symphony ",
      image: "product-images/1-3_chroast.png",
      featured: false,
      price: 28.2,
      description:
        "Chroast is a Czech specialty coffee roaster from Hradec Králové. We would love to be able to share with you the experience of the feeling you get when you witness your roasted coffee pouring out of the drum. It's at that moment that you realise that the coffee's long life journey is approaching the finish line.",
      stock: 19,
      categoryId: 1,
    },
    {
      name: "Ethiopian BirdSong Coffee",
      image: "product-images/1-4_ethiopian.png",
      featured: false,
      price: 23.2,
      description:
        "Our coffee journey began with an internship in Ethiopia, an interest in sustainable agriculture and a visit to Africa's first Bird Friendly® certified farm...At BirdSong Coffee, we focus on coffee that comes from forests, where they grow under the protection and shade of grown trees, in harmony with its surrounding nature. This gentle and traditional way of agriculture helps maintain a natural home environment for a variety of animal and plant species. Additionally, the forest provides small farmers with rich livelihood opportunities. Most of our coffee is certified organic and BirdFriendly (denoted by BIO + cultivation in agroforestry/shade-grown labels). ",
      stock: 11,
      categoryId: 1,
    },
    {
      name: "Brazil DaTerra",
      image: "product-images/1-5_brazildaterra.png",
      featured: false,
      price: 18.5,
      description:
        "Our coffee journey began with an internship in Ethiopia, an interest in sustainable agriculture and a visit to Africa's first Bird Friendly® certified farm...At BirdSong Coffee, we focus on coffee that comes from forests, where they grow under the protection and shade of grown trees, in harmony with its surrounding nature. This gentle and traditional way of agriculture helps maintain a natural home environment for a variety of animal and plant species. Additionally, the forest provides small farmers with rich livelihood opportunities. Most of our coffee is certified organic and BirdFriendly (denoted by BIO + cultivation in agroforestry/shade-grown labels). ",
      stock: 12,
      categoryId: 1,
    },
    {
      name: "East Timor",
      image: "product-images/1-6_east_timor.png",
      featured: false,
      price: 19.8,
      description:
        "Rebelbean gives energy to those who live life according to their own rules. Our roastery is for people who are Rebels for the cause, just like us. ",
      stock: 17,
      categoryId: 1,
    },
    {
      name: "Ethiopia Common Grounds",
      image: "product-images/1-7_ethiopia_common_grounds.png",
      featured: false,
      price: 12.7,
      description:
        "Dark Woods Coffee is an adventurous coffee roaster, Barista school, and pop-up café nestled on the edge of Marsden village in the West Yorkshire Pennines. They roast their coffee by hand on a 1950’s Probat drum roaster in a beautifully refurbished Victorian textile mill beside the Huddersfield Narrow Canal and River Colne.",
      stock: 35,
      categoryId: 1,
    },
    {
      name: "Brazil Horizont",
      image: "product-images/1-8_brazil_horizont.png",
      featured: false,
      price: 13.4,
      description:
        "Speciality Coffee Roasters from the North of Czech Republic. We know that coffee isn't just about your daily caffeine intake. We also know that it goes a long way before it gets to our cups. From the planting of the seedling to handpicking of ripe fruit, washing, peeling, meticulous drying, and finally packing into jute bags so that the beans can head on their way across the ocean into Europe. We know it's a lot of work. ",
      stock: 13,
      categoryId: 1,
    },
    {
      name: "Brazil Colombia Espresso Blend",
      image: "product-images/1-9_brazil_colombia.png",
      featured: false,
      price: 24.3,
      description:
        "The dream that fuels The Coffee Collective roasters is to systematically explore the entire world of exceptional coffee, its properties and characteristics and as a consequence improve the conditions for coffee farmers all around the world. ",
      stock: 21,
      categoryId: 1,
    },
    {
      name: "Specialty coffee Mitte DR Congo KATANA",
      image: "product-images/1-10_specialty_mitte.png",
      featured: false,
      price: 18.5,
      description:
        "Cafe Mitte (which means centre in german) was located in a historical building that was built in 1659 on Panska street no. 11, right in the centre of Brno. When we were trying to come up with a name for our Hostel and Cafe, the name Mitte was an obvious choice.",
      stock: 14,
      categoryId: 1,
    },
    {
      name: "Kmen Coffee Roasters Burundi YANDARO",
      image: "product-images/1-11_kmen_burundi.png",
      featured: false,
      price: 17.5,
      description:
        "Sweet, juicy and fragrant, but always different. We do not believe in absolute truths and we respect that everyone can enjoy something different. We are looking for the sustainability of coffee, not only as a raw material, but the whole way that the bean goes into the cup, and all those who are involved. Our coffee strain unites people who feel the same way.",
      stock: 12,
      categoryId: 1,
    },
    {
      name: "Nordbeans Colombia TUMBAGA - decaffeinated",
      image: "product-images/1-12_nordbeans_colombia.png",
      featured: false,
      price: 24.3,
      description:
        "Speciality Coffee Roasters from the North of Czech Republic.We know that coffee isn't just about your daily caffeine intake. We also know that it goes a long way before it gets to our cups. From the planting of the seedling to handpicking of ripe fruit, washing, peeling, meticulous drying, and finally packing into jute bags so that the beans can head on their way across the ocean into Europe.",
      stock: 21,
      categoryId: 1,
    },
    {
      name: "Black Tea",
      image: "product-images/2-1_black_tea.jpg",
      featured: true,
      price: 25.2,
      description:
        "Black tea O.P. from the Indian region of Darjeeling, gently flavored with pieces of bergamot. Classic afternoon blend with delicate citrus notes. It is a careful selection of strands that provides an unmistakable flavor to this traditional infusion.",
      stock: 15,
      categoryId: 2,
    },
    {
      name: "Green Tea",
      image: "product-images/2-2_green_tea.jpg",
      featured: true,
      price: 23.2,
      description:
        "Sencha and Bancha green tea with pieces of cardamom, ginger, star anise and coriander. Exotic mix whose spicy notes highlight its intense flavor, transporting us to India. Due to its properties, it is an excellent antioxidant that provides energy.",
      stock: 8,
      categoryId: 2,
    },
    {
      name: "Two blends selection with infuser",
      image: "product-images/2-3_two_blends_infuser.jpg",
      featured: false,
      price: 17.5,
      description:
        "Pack with two delicious blends in tube and infusing spoon. You can choose the two teas that you like the most within 26 options. Ideal as a gift or for those who want to try one of our varieties for the first time. Each tube contains between 12 and 18 grams, depending on the type of tea it contains, and yields approximately 6 to 8 cups.",
      stock: 8,
      categoryId: 2,
    },
    {
      name: "One blend selection",
      image: "product-images/2-4_one_blend.jpg",
      featured: false,
      price: 13.8,
      description:
        "An exquisite blend in a tube. You can choose the tea you like best within 25 options. Ideal as a gift or for those who want to try one of our varieties for the first time. You can also find the tube pack with infusing spoon here.Each tube contains between 12 and 18 grams, depending on the type of tea it contains, and yields approximately 6 to 8 cups.",
      stock: 24,
      categoryId: 2,
    },
    {
      name: "Black Noel Tea",
      image: "product-images/2-5_black_noel.jpg",
      featured: false,
      price: 23.7,
      description:
        "Black tea O.P. from Assam with pieces and peel of orange, apple, sunflower petals and hints of cinnamon. Aromatic combination where sweet and spicy notes stand out. A limited edition blend designed by Mónica Devoto to drink with the family this holiday season. Inspired by the traditional Christmas Tea. Special presentation in gold tin.",
      stock: 8,
      categoryId: 2,
    },
    {
      name: "White Lemon Tea",
      image: "product-images/2-6_white_lemon.jpg",
      featured: false,
      price: 23.7,
      description:
        "Pai Mu Tan white tea with lemon and orange slices, and hints of lemongrass. It is a sophisticated and smooth blend, with a special citrus aroma and flavor to stimulate the senses. Ideal to drink at any time of the day.",
      stock: 25,
      categoryId: 2,
    },
    {
      name: "Orange sudafrican organic Tea",
      image: "product-images/2-7_orange_sudafrican.jpg",
      featured: false,
      price: 23.7,
      description:
        "Pai Mu Tan white tea with lemon and orange slices, and hints of lemongrass. It is a sophisticated and smooth blend, with a special citrus aroma and flavor to stimulate the senses. Ideal to drink at any time of the day.",
      stock: 25,
      categoryId: 2,
    },
    {
      name: "One blend with infuser selection",
      image: "product-images/2-8_one_blend_infuser.jpg",
      featured: false,
      price: 43.5,
      description:
        "Pack with an exquisite blend in tube and infusing spoon. You can choose the tea you like best within 25 options. Ideal as a gift or for those who want to try one of our varieties for the first time.",
      stock: 8,
      categoryId: 2,
    },
    {
      name: "Citrus fruit pack",
      image: "product-images/2-9_citrus_fruit_pack.jpg",
      featured: false,
      price: 43.5,
      description:
        "A pack for lovers of classic flavors, with a fruity and citrus touch. Includes a can of Six Apples black tea -traditional with apple pieces, ideal for those who like to add a dash of milk-, a can of Citrus Intense green tea -with lemongrass and ginger that increase defenses- and an infuser spoon. A selection of blends balanced and ideal for autumn due to its ingredients and properties.",
      stock: 8,
      categoryId: 2,
    },
    {
      name: "Chinese smoked black",
      image: "product-images/2-10_chinese_smoked.jpg",
      featured: false,
      price: 38.5,
      description:
        "Chinese smoked black tea Lapsang Souchong. Its intense flavor makes it a unique ingredient for gastronomy.",
      stock: 15,
      categoryId: 2,
    },
    {
      name: "Organic green tea",
      image: "product-images/2-11_organic_green_tea.jpg",
      featured: false,
      price: 43.5,
      description:
        "Organic green tea with jasmine petals, grown in high-end gardens in China. A millenary blend with delicate floral perfume and subtly sweet notes. Its properties make it an excellent antioxidant.",
      stock: 8,
      categoryId: 2,
    },
    {
      name: "Relaxing pack",
      image: "product-images/2-12_relaxing_pack.jpg",
      featured: false,
      price: 43.5,
      description:
        "A pack to relax and feel good. Two of our favorite herbal teas to promote calm and relaxation of body and mind.  As they do not contain theine, both infusions are suitable for pregnant women. Includes infuser spoon, a can of Ikebana and a tube of Caramel Clouds.",
      stock: 8,
      categoryId: 2,
    },
    {
      name: "FrischSchoggi",
      image: "product-images/3-1_laderach_truffles.webp",
      featured: false,
      price: 50.5,
      description:
        "This FrischSchoggi made of fine milk chocolate is blended with large roasted and caramelized hazelnuts from Piedmont. This gourmet Swiss chocolate, made by Läderach chocolatier suisse, is produced at the highest quality using our chocolatier’s traditional craftsmanship. The FrischSchoggi™ is available in a quarter, half or as a whole chocolate slab. To best experience the aroma of the fresh chocolate, break and enjoy within 2-3 weeks.",
      stock: 10,
      categoryId: 3,
    },
    {
      name: "Läderach truffles",
      image: "product-images/3-2_frischschoggi_boat.webp",
      featured: false,
      price: 75.2,
      description:
        "An excellent selection of 16 pralines and truffles from Läderach chocolatier suisse. Experience unforgettable moments of joy and deliciousness with these varieties (with and without alcohol): Hazelnut Heart, Nougatine, Honey Triangle, Chessboard, Feuilletine, Truffle Dark, Truffle Champagne, Moccatine, Caramel Triangle, Carré Läderach, Truffle Capuccino, Truffle Milk, Trois Frères, Le Noir, Piedmontese and Walnut Log. (0.39 lbs)",
      stock: 15,
      categoryId: 3,
    },
    {
      name: "FrischSchoggi™ boat big",
      image: "product-images/3-2_frischschoggi_boat.webp",
      featured: false,
      price: 53.2,
      description:
        "A 1.43 lbs Läderach FrischSchoggi™ variety, this is the perfect item for sharing with a crowd, so everyone can select their favorite chocolate. Between milk chocolate with whole roasted hazelnuts, dark chocolate with whole almonds, and fruity white chocolate – there's something for everyone. Läderach chocolate is freshly made in Switzerland from bean to finished product.  Enjoy within 2-3 weeks of receipt.",
      stock: 10,
      categoryId: 3,
    },
    {
      name: "FrischSchoggi™ pouch big",
      image: "product-images/3-3_frischschoggi_pouch.webp",
      featured: true,
      price: 53.5,
      description:
        "A Läderach FrischSchoggi™ variety, this is the perfect item for sharing with a crowd, so everyone can select their favorite chocolate. Between milk chocolate with whole roasted hazelnuts, dark chocolate with whole almonds, and fruity white chocolate – there's something for everyone. Läderach chocolate is freshly made in Switzerland from bean to finished product. Enjoy within 2-3 weeks of receipt. (1.10 lbs)",
      stock: 10,
      categoryId: 3,
    },
    {
      name: "FrischSchoggi™ Almond Dark",
      image: "product-images/3-4_frischschoggi_almond_dark.webp",
      featured: false,
      price: 26.8,
      description:
        "This FrischSchoggi™ made of fresh dark chocolate is refined with large roasted and caramelised almonds from California. This Swiss gourmet chocolate is made by Läderach chocolatier suisse and processed to the highest quality using traditional chocolatier craftsmanship. The FrischSchoggi™ is available in a quarter, half or as a whole chocolate slab. To best experience the aroma of the fresh chocolate, break and enjoy within 2-3 weeks.",
      stock: 10,
      categoryId: 3,
    },
    {
      name: "Pralines assorted 11pcs heart box",
      image: "product-images/3-5_pralines_heart_box.webp",
      featured: true,
      price: 28.9,
      description:
        "Contains four different fresh heart-shaped pralines and seven fresh standard pralines from our classic product range, decorated with a bow A romantic way to show your love and affection on Valentine’s Day. (0.26 lbs)",
      stock: 10,
      categoryId: 3,
    },
    {
      name: "Truffles Classic with alcohol 18 pcs per box",
      image: "product-images/3-6_truffles_classic_alcohol.webp",
      featured: false,
      price: 36.5,
      description:
        "A delicious mix of pure chocolate truffles and alcohol-filled truffles. (0.44 lbs)",
      stock: 10,
      categoryId: 3,
    },
    {
      name: "FrischSchoggi™ pouch small",
      image: "product-images/3-7_frischschoggi_pouch_small.webp",
      featured: false,
      price: 28.5,
      description:
        "A Läderach FrischSchoggi™ variety, this is the perfect item for sharing with a crowd, so everyone can select their favorite chocolate. Between milk chocolate with whole roasted hazelnuts, dark chocolate with whole almonds, and fruity white chocolate – there's something for everyone. Läderach chocolate is freshly made in Switzerland from bean to finished product. Enjoy within 2-3 weeks of receipt. (0.55 lbs)",
      stock: 15,
      categoryId: 3,
    },
    {
      name: "Pralines Classic Assorted 4 pcs per box",
      image: "product-images/3-8_pralines_assorted_4perbox.webp",
      featured: false,
      price: 11.9,
      description:
        "A delicious selection of 4 exquisite truffles for an unforgettable taste experience. The box contains the following truffles (without alcohol): Truffle Milk, Truffle White, Truffle Caramel, Truffle Dark. (0.20 lbs)",
      stock: 35,
      categoryId: 3,
    },
    {
      name: "FrischSchoggi™ Heart Hazelnut Milk",
      image: "product-images/3-9_heart_hazelnut.webp",
      featured: false,
      price: 13.5,
      description:
        "A 200g silky smooth milk chocolate heart studded with whole, roasted and caramelised hazelnuts would make a wonderful gift of appreciation. Läderach chocolate is freshly made in Switzerland from bean to finished product. Enjoy within 2-3 weeks of receipt. (0.44 lbs)",
      stock: 19,
      categoryId: 3,
    },
    {
      name: "FrischSchoggi™ Cranberry Milk",
      image: "product-images/3-10_cranberry.webp",
      featured: false,
      price: 21.3,
      description:
        "In this FrischSchoggi™, fresh milk chocolate and whole dried cranberries are combined to create a fruity and tart chocolate delight. This gourmet Swiss chocolate, made by Läderach chocolatier suisse, is produced at the highest quality using our chocolatier’s traditional craftsmanship. The FrischSchoggi™ is available in a quarter, half or as a whole chocolate slab. To best experience the aroma of the fresh chocolate, break and enjoy within 2-3 weeks.",
      stock: 17,
      categoryId: 3,
    },
    {
      name: "Pavés Grand Cru 8 pcs per box",
      image: "product-images/3-11_paves.webp",
      featured: false,
      price: 11.9,
      description:
        "The Pavés Grand Cru are a creamy smooth, single-origin dark chocolate from Trinidad and almond gianduja cube topped with cocoa powder. For the ultimate chocolate lover, these Läderach chocolates are a can't-miss experience. (0.14 lbs)",
      stock: 35,
      categoryId: 3,
    }
  );
  console.log(products[0].name);
  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
