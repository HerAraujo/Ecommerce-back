const { Image } = require("../models");

module.exports = async () => {
  const images = [
    {
      name: "vienna-style-lager.jpeg",
      title: "vienna-style-lager",
    },
    {
      name: "irish-style-red.jpeg",
      title: "irish-style-red",
    },
    {
      name: "german-style-schwarzbier.jpeg",
      title: "german-style-schwarzbier",
    },
    {
      name: "german-style-marzen-oktoberfest.jpeg",
      title: "german-style-marzen-oktoberfest",
    },
    {
      name: "german-style-kolsch.jpeg",
      title: "german-style-kolsch",
    },
    {
      name: "german-style-hefeweizen.jpeg",
      title: "german-style-hefeweizen",
    },
    {
      name: "german-style-dunkelweizen.jpeg",
      title: "german-style-dunkelweizen",
    },
    {
      name: "german-style-dunkel.jpeg",
      title: "german-style-dunkel",
    },
    {
      name: "german-style-brownaltbier.jpeg",
      title: "german-style-brownaltbier",
    },
    {
      name: "california-common.jpeg",
      title: "california-common",
    },
    {
      name: "biere-de-garde.jpeg",
      title: "biere-de-garde",
    },
    {
      name: "berliner-style-weisse.jpeg",
      title: "berliner-style-weisse",
    },
    {
      name: "belgian-style-wit.jpeg",
      title: "belgian-style-wit",
    },
    {
      name: "belgian-style-tripel.jpeg",
      title: "belgian-style-tripel",
    },
    {
      name: "belgian-style-saison.jpeg",
      title: "belgian-style-saison",
    },
    {
      name: "belgian-style-quadrupel.jpeg",
      title: "belgian-style-quadrupel",
    },
    {
      name: "belgian-style-pale-ale.jpeg",
      title: "belgian-style-pale-ale",
    },
    {
      name: "belgian-style-golden-strong-ale.jpeg",
      title: "belgian-style-golden-strong-ale",
    },
    {
      name: "belgian-style-dubbel.jpeg",
      title: "belgian-style-dubbel",
    },
    {
      name: "belgian-style-blonde-ale.jpeg",
      title: "belgian-style-blonde-ale",
    },
    {
      name: "american-wheat.jpeg",
      title: "american-wheat",
    },
    {
      name: "american-style-wheat-wine-ale.jpeg",
      title: "american-style-wheat-wine-ale",
    },
    {
      name: "american-cream-ale.jpeg",
      title: "american-cream-ale",
    },
    {
      name: "american-amber-lager.jpeg",
      title: "american-amber-lager",
    },
  ];

  await Image.bulkCreate(images);
};
