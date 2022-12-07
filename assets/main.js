const numberInput = document.getElementById("numberInput");
const submitInput = document.getElementById("submitInput");
const form = document.getElementById("form");
const container = document.getElementById("containerCards");

const Pizzas = [
  {
    nombre: "Hawaiana",
    id: 1,
    ingredientes: ["Piña", "Jamon", "Queso"],
    precio: 566,
  },

  {
    nombre: "Jamon y Queso",
    id: 2,
    ingredientes: ["Jamon", "Queso"],
    precio: 566,
  },

  {
    nombre: "Mexicana",
    id: 3,
    ingredientes: ["Carne desmechada", "Nachos", "Queso"],
    precio: 727,
  },

  {
    nombre: "Samba",
    id: 4,
    ingredientes: ["Maduro", "Maiz", "Tocineta", "Jamon", "Queso"],
    precio: 727,
  },

  {
    nombre: "Vegetariana",
    id: 5,
    ingredientes: [
      "Tomate",
      "Oregano",
      "Cebolla",
      "Pimentón",
      "Champiñon",
      "Queso",
    ],
    precio: 889,
  },

  {
    nombre: "Napolitana",
    id: 6,
    ingredientes: ["Tomate", "Oregano", "Queso"],
    precio: 889,
  },

  {
    nombre: "Atlantias Americana",
    id: 7,
    ingredientes: ["Salchicha", "Jamon", "Tocineta", "Queso"],
    precio: 889,
  },
];

const agarraPizza = () => {
  const numberValue = numberInput.value.trim();

  const findPizzas = Pizzas.find((pizza) => {
    return pizza.id == numberValue;
  });
  if (isEmpty(numberValue)) {
    container.classList.remove("hidden");
    container.innerHTML = "<h3> Ingresa algun ID </h3>";
  } else if (!findPizzas) {
    container.innerHTML = "<h3> Ingresa algun ID valido </h3>";
    container.classList.remove("hidden");
  }
  if (findPizzas) {
    container.classList.remove("hidden");
    container.innerHTML = `<div>
    <h2 class="titulo-pizza">${findPizzas.nombre}</h2>
    <h3 class="precio">$${findPizzas.precio}</h3>
  </div>
  <div><i class="fa-solid fa-pizza-slice"></i></div>`;
  }
};

const isEmpty = (value) => !value.length;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  agarraPizza();
});
