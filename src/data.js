import hotpizza from "./Images/hotpizza.jpg";
import cheezpizza from "./Images/cheezpizza.jpg";
import normalpizza from "./Images/normalpizza.jpg";
import specialshawarma from "./Images/specialshawarma.jpg";
import chickenshawarma from "./Images/chickenshawarma.jpg";
import muttonshawarma from "./Images/muttonshawarma.jpg";
import cooldrinks from "./Images/cooldrinks.jpg";
import normalchai from "./Images/normalchai.jpg";
import specialchai from "./Images/specialchai.jpg";

export const foodData = [
  {
    id: 1,
    name: "Chezz Pizza",
    price: 320,
    ingradients:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",
    imageUrl: cheezpizza,
    latest: false,
    hastag: ["chezz pizza", "normal pizza", "hot pizza"],
  },
  {
    id: 2,
    name: "Normal Pizza",
    price: 250,
    ingradients:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",
    imageUrl: normalpizza,
    latest: false,
    hastag: ["chezz pizza", "normal pizza", "hot pizza"],
  },
  {
    id: 3,
    name: "Hot Pizza",
    price: 340,
    ingradients:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",
    imageUrl: hotpizza,
    latest: true,
    hastag: ["chezz pizza", "normal pizza", "hot pizza"],
  },
  {
    id: 4,
    name: "Chicken shawarma",
    price: 60,
    ingradients:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",
    imageUrl: chickenshawarma,
    latest: false,
    hastag: ["chicken shawarma", "mutton shawarma", "special shawarma"],
  },
  {
    id: 5,
    name: "Mutton shawarma",
    price: 120,
    ingradients:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",
    imageUrl: muttonshawarma,
    latest: false,
    hastag: ["chicken shawarma", "mutton shawarma", "special shawarma"],
  },
  {
    id: 6,
    name: "Special shawarma",
    price: 90,
    ingradients:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",
    imageUrl: specialshawarma,
    latest: true,
    hastag: ["chicken shawarma", "mutton shawarma", "special shawarma"],
  },
  {
    id: 7,
    name: "Cool Drinks",
    price: 45,
    ingradients:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",
    imageUrl: cooldrinks,
    latest: false,
    hastag: ["cool drinks"],
  },
  {
    id: 8,
    name: "Tea",
    price: 25,
    ingradients:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",
    imageUrl: normalchai,
    latest: false,
    hastag: ["tea", "special tea"],
  },
  {
    id: 9,
    name: "Special tea",
    price: 35,
    ingradients:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",
    imageUrl: specialchai,
    latest: true,
    hastag: ["tea", "special tea"],
  },
];
