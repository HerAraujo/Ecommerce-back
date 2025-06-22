const { Product } = require("../models");

module.exports = async () => {
  const products = [
    //craft
    {
      name: "Blonde Ale",
      description:
        "Blonde beer made with light malts such as Malt Pilsner or Premium Pilsner. Has a slight aroma of hops with soft and fresh notes.",
      price: 4.51,
      stock: 20,
      featured: true,
      slug: "blond-ale",
      images: [
        {
          name: "belgian-style-blonde-ale.jpeg",
          title: "belgian-style-blonde-ale",
        },
        {
          name: "american-cream-ale.jpeg",
          title: "american-cream-ale",
        },
        {
          name: "german-style-hefeweizen.jpeg",
          title: "german-style-hefeweizen",
        },
      ],
      categoryId: 1,
    },
    {
      name: "Dubbel",
      description:
        "The Belgian-style dubbel ranges from brown to very dark in color. They have a malty sweetness and can have cocoa and caramel aromas and flavors. ",
      price: 3.98,
      stock: 25,
      featured: true,
      slug: "dubbel",
      images: [
        {
          name: "belgian-style-dubbel.jpeg",
          title: "belgian-style-dubbel",
        },
      ],
      categoryId: 1,
    },
    {
      name: "Golden Strong Ale",
      description:
        "The Belgian-style golden strong ale is fruity, complex and often on the higher end of the ABV spectrum, yet are approachable to many different palates.",
      price: 2.99,
      stock: 30,
      slug: "golden-strong-ale",
      images: [
        {
          name: "belgian-style-golden-strong-ale.jpeg",
          title: "belgian-style-golden-strong-ale",
        },
      ],
      categoryId: 1,
    },
    {
      name: "Pale Ale",
      description:
        "The Belgian-style pale ale is gold to copper in color and can have caramel or toasted malt flavor. The style is characterized by low but noticeable hop bitterness, flavor and aroma.",
      price: 5.65,
      stock: 40,
      slug: "pale-ale",
      images: [
        {
          name: "belgian-style-pale-ale.jpeg",
          title: "belgian-style-pale-ale",
        },
      ],
      categoryId: 1,
    },
    {
      name: "Quadrupel",
      description:
        "The Belgian-style Quadrupel is amber to dark brown in color. Caramel, dark sugar and malty sweet flavors dominate, with medium-low to medium-high hop bitterness.",
      price: 3.25,
      stock: 36,
      slug: "quadrupel",
      images: [
        {
          name: "belgian-style-quadrupel.jpeg",
          title: "belgian-style-quadrupel",
        },
      ],
      categoryId: 1,
    },
    {
      name: "Saison",
      description:
        "Belgian-style saison may have Brettanomyces or lactic character, and fruity, horsey, goaty and/or leather-like aromas and flavors.",
      price: 4.36,
      stock: 24,
      slug: "saison",
      images: [
        {
          name: "belgian-style-saison.jpeg",
          title: "belgian-style-saison",
        },
      ],
      categoryId: 1,
    },
    {
      name: "Tripel",
      description:
        "Complex, sometimes mild spicy flavor characterizes this style. Yeast-driven complexity is common. Tripels are often on the higher end of the ABV spectrum, yet are approachable to many different palates. ",
      price: 4.56,
      stock: 24,
      slug: "tripel",
      images: [
        {
          name: "belgian-style-tripel.jpeg",
          title: "belgian-style-tripel",
        },
      ],
      categoryId: 1,
    },
    //dark
    {
      name: "American Amber Lager",
      description:
        "A widely available, sessionable craft beer style that showcases both malt and hops. Amber lagers are a medium-bodied lager with a toasty or caramel-like malt character. Hop bitterness can range from very low to medium-high. Brewers may use decoction mash and dry-hopping to achieve advanced flavors.",
      price: 3.66,
      stock: 24,
      slug: "american-amber-lager",
      images: [
        {
          name: "american-amber-lager.jpeg",
          title: "american-amber-lager",
        },
      ],
      categoryId: 3,
    },
    {
      name: "Dunkel",
      description:
        "The German-style dunkel is a bottom-fermented lager style beer. The word “dunkel” is German for “dark,” and this dark beer style offers beer lovers balanced flavors of chocolate, bread crust and caramel. The dunkel is a classic German lager that craft brewers are fond of brewing and countless people across the world are fond of enjoying. Like most German beers, dunkel beer is a great candidate for food pairing, matching up well to grilled meats.",
      price: 4.5,
      stock: 24,
      slug: "dunkel",
      images: [
        {
          name: "german-style-dunkel.jpeg",
          title: "german-style-dunkel",
        },
      ],
      categoryId: 3,
    },
    {
      name: "Marzen",
      description:
        "A beer rich in malt with a balance of clean, hop bitterness, similar to the Vienna lager. Toasted bread or biscuit-like malt aroma and flavor is to be expected. Originating in Germany, this style was traditionally brewed in the spring (“Marzen” meaning “March”) and aged, or lagered, throughout the summer.",
      price: 5.44,
      stock: 24,
      slug: "marzen",
      images: [
        {
          name: "german-style-marzen-oktoberfest.jpeg",
          title: "german-style-marzen-oktoberfest",
        },
      ],
      categoryId: 3,
    },
    {
      name: "Schwarzbier",
      description:
        "Sometimes called black lagers, they may remind some of German-style dunkels, but schwarzbiers are drier, darker and more roast-oriented.These very dark brown to black beers have a surprisingly pale-colored foam head (not excessively brown) with good cling quality. They have a mild roasted malt character without the associated bitterness. Malt flavor and aroma is at low to medium levels of sweetness.",
      price: 2.54,
      stock: 24,
      slug: "schwarzbier",
      images: [
        {
          name: "german-style-schwarzbier.jpeg",
          title: "german-style-schwarzbier",
        },
      ],
      categoryId: 3,
    },
    {
      name: "Lager",
      description:
        "Vienna Lager ranges from copper to reddish brown in color. The beer is characterized by malty aroma and slight malt sweetness. The malt aroma and flavor should have a notable degree of toasted and/or slightly roasted malt character. Hop bitterness is low to medium-low.",
      price: 3.74,
      stock: 24,
      slug: "lager",
      images: [
        {
          name: "vienna-style-lager.jpeg",
          title: "vienna-style-lager",
        },
      ],
      categoryId: 3,
    },

    //hybrid
    {
      name: "American Cream Ale",
      description:
        "The American cream ale is a mild, pale, light-bodied ale, made using a warm fermentation (top or bottom fermenting yeast) and cold lagering. Despite being called an ale, when being judged in competitions it is acceptable for brewers to use lager yeast.",
      price: 5.54,
      stock: 24,
      featured: true,
      slug: "american-cream-ale",
      images: [
        {
          name: "american-cream-ale.jpeg",
          title: "american-cream-ale",
        },
      ],
      categoryId: 2,
    },
    {
      name: "Biere de Garde",
      description:
        "Biere de Garde translates as “beer for keeping.” This style is popping up more and more from U.S. producers. Blond, amber and brown versions exist. Biere de garde examples are light amber to chestnut brown or red in color. This style is characterized by a toasted malt aroma and slight malt sweetness. Flavor of alcohol is evident. Often bottle-conditioned, with some yeast character.",
      price: 4.54,
      stock: 24,
      slug: "biere-de-garde",
      images: [
        {
          name: "biere-de-garde.jpeg",
          title: "biere-de-garde",
        },
      ],
      categoryId: 2,
    },
    {
      name: "California Common",
      description:
        "The California common is brewed with lager yeast but fermented at ale fermentation temperatures. There is a noticeable degree of toasted malt and/or caramel-like malt character in flavor and often in aroma. Often referred to as “steam beer” and made famous by San Francisco’s Anchor Brewing Company. Seek out woody and mint flavor from the Northern Brewer hops.",
      price: 5.56,
      stock: 24,
      featured: true,
      slug: "california-common",
      images: [
        {
          name: "california-common.jpeg",
          title: "california-common",
        },
      ],
      categoryId: 2,
    },
    {
      name: "Altbier",
      description:
        "Originally from the Düsseldorf area of Germany, the German-Style Altbier strikes a balance between hop and malt flavors and aromas, but can have low fruity esters and some peppery and floral hop aromas. Before Germany had lager beer, it had ales. Alt, meaning “old,” pays homage to one rebel region in Germany which did not lean into lagering. U.S. producers celebrate the ale revolution beautifully with this top-fermented German beer style.",
      price: 3.52,
      stock: 24,
      slug: "altbier",
      images: [
        {
          name: "german-style-brownaltbier.jpeg",
          title: "german-style-brownaltbier",
        },
      ],
      categoryId: 2,
    },
    {
      name: "Kolsch",
      description:
        "Crisp, delicate and oh-so-drinkable, the German-style Kolsch is a beer hybrid, meaning that its production and subsequent beer drinking experience saddles qualities of both lager beers and ale beers. These light and refreshing ale-lager hybrids are perfect for warm summer days and have become a favored style by American craft brewers and beer lovers alike. In addition to their thirst quenching ability, they also are a fun beer to enjoy with food, including traditional German sausages and kraut.",
      price: 2.98,
      stock: 24,
      slug: "kolsch",
      images: [
        {
          name: "german-style-kolsch.jpeg",
          title: "german-style-kolsch",
        },
      ],
      categoryId: 2,
    },
    {
      name: "Red Beer",
      description:
        "Irish red ale is known for its unique malty taste and is on the lower side of the bitterness and alcohol content scales. If you love American craft beer, the Irish red ale beer remains a great style for beer lovers to seek out and appreciate.",
      price: 4.58,
      stock: 24,
      slug: "red-beer",
      images: [
        {
          name: "irish-style-red.jpeg",
          title: "irish-style-red",
        },
      ],
      categoryId: 2,
    },
    //wheat
    {
      name: "Wheat Wine Ale",
      description:
        "Part of the “strong ale” category, the American-Style Wheat Wine Ale is not derived from grapes as its name might suggest. Made with at least 50 percent wheat malt, this full-bodied beer features bready and candy flavors, and finishes with a great deal of malty sweetness. These beers may be oak-aged and sometimes have small amounts of darker malts added.",
      price: 3.25,
      stock: 24,
      featured: true,
      slug: "wheat-wine-ale",
      images: [
        {
          name: "american-style-wheat-wine-ale.jpeg",
          title: "american-style-wheat-wine-ale",
        },
      ],
      categoryId: 4,
    },
    {
      name: "American Wheat",
      description:
        "American wheat beers are some of the most approachable beers in the craft beer world, and the versatility of wheat beer allows it to be combined with a variety of ingredients or enjoyed on its own alongside a wide variety of food options. The sizable portion of wheat malt used to brew wheat beer lends a lighter, distinctive experience compared to beers brewed with barley exclusively.",
      price: 3.58,
      stock: 36,
      featured: true,
      slug: "american-wheat",
      images: [
        {
          name: "american-wheat.jpeg",
          title: "american-wheat",
        },
      ],
      categoryId: 4,
    },
    {
      name: "Witbier",
      description:
        "Belgian-style witbier is brewed using unmalted wheat, sometimes oats and malted barley. Witbiers are spiced with coriander and orange peel. A style that dates back hundreds of years, it fell into relative obscurity until it was revived by Belgian brewer Pierre Celis in the 1960s. This style is currently enjoying a renaissance, especially in the American market. “Wit” means “white.”",
      price: 2.58,
      stock: 18,
      featured: true,
      slug: "witbier",
      images: [
        {
          id: 6,
          name: "belgian-style-wit.jpeg",
          title: "belgian-style-wit",
        },
      ],
      categoryId: 4,
    },
    {
      name: "Weisse",
      description:
        "Low in alcohol, refreshingly tart, and often served with a flavored syrup like Woodruff or raspberry, the Berliner-style Weisse presents a harmony between yeast and lactic acid. These beers are very pale in color, and may be cloudy as they are often unfiltered. Hops are not a feature of this style, but these beers often do showcase esters.",
      price: 2.58,
      stock: 18,
      featured: true,
      slug: "weisse",
      images: [
        {
          name: "berliner-style-weisse.jpeg",
          title: "berliner-style-weisse",
        },
      ],
      categoryId: 4,
    },
    {
      name: "Dunkelweizen",
      description:
        "The German-style Dunkelweizen can be considered a cross between a German-style dunkel and a hefeweizen. Distinguished by its sweet maltiness and chocolate-like character, it can also have banana and clove (and occasionally vanilla or bubblegum) esters from weizen ale yeast.",
      price: 2.58,
      stock: 18,
      slug: "dunkelweizen",
      images: [
        {
          name: "german-style-dunkelweizen.jpeg",
          title: "german-style-dunkelweizenl",
        },
      ],
      categoryId: 4,
    },
    {
      name: "Hefeweizen",
      description:
        "The German-style hefeweizen is straw to amber in color and brewed with at least 50 percent malted wheat. The aroma and flavor of a weissbier comes largely from the yeast and is decidedly fruity (banana) and phenolic (clove). The intensity of these wildly differing flavor qualities varies depending on the brewer, but the two are most commonly balanced. Hefeweizen typically contains a low to moderate alcohol content and is considered to be the most popular amongst the German weissbier variety.",
      price: 2.58,
      stock: 18,
      slug: "hefeweizen",
      images: [
        {
          name: "german-style-hefeweizen.jpeg",
          title: "german-style-hefeweizen",
        },
      ],
      categoryId: 4,
    },
  ];

  await Product.bulkCreate(products);
};
