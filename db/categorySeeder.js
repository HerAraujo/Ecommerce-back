const { Category } = require("../models");

module.exports = async () => {
  const categories = [
    {
      name: "Belgian",
      slug: "belgian",
      description:
        "Belgian beers are primarily ales (as opposed to lagers) with a heavy emphasis on malts and a lot of fruity yeast flavors.",
    },
    {
      name: "Hybrid",
      slug: "hybrid",
      description:
        "Hybrid beers do not follow the conventional thought that all beer is either an ale or a lager. Instead, hybrids borrow brewing practices from both types of beer; they're a little lager and a little ale.",
    },
    {
      name: "Dark",
      slug: "dark",
      description:
        "Dark beer is malty and smooth with toasted caramel flavors. These beers tend to have mid-range alcohol content and lower bitterness profiles.",
    },
    {
      name: "Wheat",
      slug: "wheat",
      description:
        "A wheat beer is any beer made up of at least 50 percent wheat, which is a much higher proportion than other beers that are primarily made of barley, rye, or adjuncts like rice and corn. Wheat beers come in as many styles as you can imagine, but in general, they're light, summery, and refreshing.",
    },
  ];

  await Category.bulkCreate(categories);
};
