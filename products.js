const products = [
  {
    id: "price_1HLJHLKJadfga9uEy9j7834524R0D",
    category: "jackets",
    sex: "male",
    brand: "Moncler",
    name: "Logo Stripe Down Zip Jacket",
    price: 128500,
    currency: "AUD",
    images: [
      "/products/21-06-2022_AP_9B000-07-M1131-769_7_1.jpg",
      "/products/21-06-2022_AP_9B000-07-M1131-769_m9_1.jpg",
      "/products/21-06-2022_AP_9B000-07-M1131-769_1_1.jpg",
      "/products/21-06-2022_AP_9B000-07-M1131-769_8_1.jpg",
      "/products/21-06-2022_AP_9B000-07-M1131-769_10_1.jpg",
    ],
  },
  {
    id: "price_1JAE9uEy9j78345234mAJ9ettou4R0D",
    category: "accessories",
    sex: "uni",
    brand: "Dolce & Gabbana",
    name: "DG4403 Sunglasses",
    price: 39500,
    currency: "AUD",
    images: [
      "/products/20-06-2022_jd_0dg4403-501-8758_m9.jpg",
      "/products/15-06-2022_JC_0DG4403-501-8758_1_1.jpg",
      "/products/15-06-2022_JC_0DG4403-501-8758_2_1.jpg",
      "/products/15-06-2022_JC_0DG4403-501-8758_3_1.jpg",
      "/products/15-06-2022_JC_0DG4403-501-8758_4_1.jpg",
    ],
  },
  {
    id: "price_1JAE9cEy9j6mAJ9ettou4R0D",
    category: "tshirts",
    sex: "men",
    brand: "Studio Nicholson",
    name: "Bric Short Sleeve Shirt",
    price: 13500,
    currency: "AUD",
    images: [
      "/products/mens-incu-137_7104e4b0-5e11-4518-ae97-347dcf876e2b_1500x@2x.jpg",
      "/products/mens-incu-132_a0a1aca6-29ce-46a7-bd85-53cf46cc3e90_1500x@2x.jpg",
      "/products/mens-incu-140_6925f772-4315-417e-91fd-5a745a511fde_1500x@2x.jpg",
      "/products/mens-incu-140_6925f772-4315-417e-91fd-5a745a511fde_1500x@2x.jpg",
    ],
  },
  {
    id: "price_1JAE9cEasdgaffgmAJ9ettou4R0D",
    category: "shoes",
    sex: "men",
    brand: "Arc'teryx",
    name: "AERIOS AR MID GTX HIKING BOOT",
    price: 41900,
    currency: "AUD",
    images: [
      "/products/05-08-2022_JA_28863-BP_1_1.jpg",
      "/products/05-08-2022_JA_28863-BP_2_1.jpg",
      "/products/05-08-2022_JA_28863-BP_3_1.jpg",
      "/products/05-08-2022_JA_28863-BP_5_1.jpg",
      "/products/05-08-2022_JA_28863-BP_m9_1.jpg",
    ],
  },
  {
    id: "price_1JAE9cEaEERRSSdhjvc4R0D",
    category: "shoes",
    sex: "men",
    brand: "Salomon",
    name: "XT-6",
    price: 28500,
    currency: "AUD",
    images: [
      "/products/17-05-2022_AJ_L417098_2_1.jpg",
      "/products/17-05-2022_AJ_L417098_3_1.jpg",
      "/products/17-05-2022_AJ_L417098_4_1.jpg",
      "/products/17-05-2022_AJ_L417098_5_1.jpg",
      "/products/17-05-2022_AJ_L417098_m1_1.jpg",
    ],
  },
  {
    id: "price__1JAE9EEAAOOEaasdhjvc4R0D",
    category: "fragrance",
    sex: "men",
    brand: "Comme Des Garcons x Artek",
    name: "Standard Au De Toilette",
    price: 13900,
    currency: "AUD",
    images: [
      "/products/17-03-2022_ML_WRY3924TY_1_1.jpg",
      "/products/17-03-2022_ML_WRY3924TY_2_1.jpg",
      "/products/17-03-2022_ML_WRY3924TY_3_1.jpg",
      "/products/17-03-2022_ML_WRY3924TY_m9_1.jpg",
    ],
  },
  {
    id: "price__1JAxxUiEEIasEsdhjvc4R0D",
    category: "shirts",
    sex: "women",
    brand: "RAG & BONE",
    name: "Jordan Long Sleeve Top",
    price: 51000,
    currency: "AUD",
    images: [
      "/products/WAW22FA0367536-103-A_1500x@2x.jpg",
      "/products/WAW22FA0367536-103-C_1500x@2x.jpg",
      "/products/WAW22FA0367536-103-D_1500x@2x.jpg",
      "/products/WAW22FA0367536-103-E_1500x@2x.jpg",
      "/products/WAW22FA0367536-103-G_1500x@2x.jpg",
    ],
  },
  {
    id: "price__1JAxxUi898ncxIasEsdhjvc4R0D",
    category: "sweaters",
    sex: "women",
    brand: "Ganni",
    name: "Chain Smiley Crew SWEAT",
    price: 30500,
    currency: "AUD",
    images: [
      "/products/14-07-2022_SI_T3231-322_1_1.jpg",
      "/products/14-07-2022_SI_T3231-322_2_1.jpg",
      "/products/14-07-2022_SI_T3231-322_3_1.jpg",
      "/products/14-07-2022_SI_T3231-322_5_1.jpg",
      "/products/14-07-2022_SI_T3231-322_m4_1.jpg",
    ],
  },
  {
    id: "price__1JAxasdfdughjndncxIasEsdhjvc4R0D",
    category: "dresses",
    sex: "women",
    brand: "Max Mara",
    name: "Sports Dress",
    price: 152000,
    currency: "AUD",
    images: [
      "/products/01-08-2022_NS_12262426600-006_1_1.jpg",
      "/products/01-08-2022_NS_12262426600-006_6_1.jpg",
      "/products/01-08-2022_NS_12262426600-006_7_1.jpg",
      "/products/01-08-2022_NS_12262426600-006_9_1.jpg",
      "/products/01-08-2022_NS_12262426600-006_m8_1.jpg",
    ],
  },
  {
    id: "price_1JAEgashglaidfgdfettou4R0D",
    category: "jeans",
    sex: "women",
    brand: "Ganni",
    name: "Magni Wide-Leg Jeans",
    price: 33500,
    currency: "AUD",
    images: [
      "/products/womens-incu-43770_1500x@2x.jpg",
      "/products/womens-incu-43774_1500x@2x.jpg",
      "/products/womens-incu-43776_1500x@2x.jpg",
      "/products/womens-incu-43778_1500x@2x.jpg",
      "/products/womens-incu-43778_1500x@2x.jpg",
      "/products/womens-incu-43779_1500x@2x.jpg",
    ],
  },
];

export default products;
