const seedStuff = require("./../../middlewares/seedStuff");
const TagModel = require("./../../models/Tag");

const tagSeed = [
  { label: "fashion" },
  { label: "old-school" },
  { label: "cheap" },
  { label: "classy" },
];

seedStuff(tagSeed, TagModel);
