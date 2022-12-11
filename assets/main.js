const numberInput = document.getElementById("numberInput");
const submitInput = document.getElementById("submitInput");
const form = document.getElementById("form");
const container = document.getElementById("containerCards");

const Pizzas = [
  {
    nombre: "Pizza Hawaiana",
    id: 1,
    ingredientes: ["Piña", "Jamon", "Queso"],
    precio: "3,30",
  },

  {
    nombre: "Pizza Jamon y Queso",
    id: 2,
    ingredientes: ["Jamon", "Queso"],
    precio: "3,30",
  },

  {
    nombre: "Pizza Mexicana",
    id: 3,
    ingredientes: ["Carne desmechada", "Nachos", "Queso"],
    precio: "4,50",
  },

  {
    nombre: "Pizza Samba",
    id: 4,
    ingredientes: ["Maduro", "Maiz", "Tocineta", "Jamon", "Queso"],
    precio: "4,50",
  },

  {
    nombre: "Pizza Vegetariana",
    id: 5,
    ingredientes: [
      "Tomate",
      "Oregano",
      "Cebolla",
      "Pimentón",
      "Champiñon",
      "Queso",
    ],
    precio: "5,30",
  },

  {
    nombre: "Pizza Napolitana",
    id: 6,
    ingredientes: ["Tomate", "Oregano", "Queso"],
    precio: "5,30",
  },

  {
    nombre: "Pizza Americana",
    id: 7,
    ingredientes: ["Salchicha", "Jamon", "Tocineta", "Queso"],
    precio: "5,30",
  },
];

const agarraPizza = () => {
  const numberValue = numberInput.value.trim();

  const findPizzas = Pizzas.find((pizza) => {
    return pizza.id == numberValue;
  });
  if (isEmpty(numberValue)) {
    container.classList.add("hidden");
    showError(numberInput, "Debe ingresar algún número.");
  } else if (!findPizzas) {
    container.classList.add("hidden");
    showError(numberInput, "Debe ingresar un número entre 1 y 7.");
  } else if (findPizzas) {
    removeError(numberInput);
    container.classList.remove("hidden");
    container.innerHTML = `<div>
    <h2 class="titulo-pizza">${findPizzas.nombre}</h2>
    <h3 class="precio">$${findPizzas.precio}</h3>
  </div>
  <div><i class="fa-solid fa-pizza-slice"></i></div>`;
  }
};

const isEmpty = (value) => !value.length;

const showError = (input, message) => {
  const div = input.parentElement;
  div.classList.add("error");
  const error = div.querySelector("small");
  error.textContent = message;
};

const removeError = (input) => {
  const div = input.parentElement;
  div.classList.remove("error");
  const error = div.querySelector("small");
  error.textContent = "";
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  agarraPizza();
});
