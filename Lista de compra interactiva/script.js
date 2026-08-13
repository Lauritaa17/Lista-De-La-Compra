const input = document.getElementById("itemInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const list = document.getElementById("shoppingList");
const total = document.getElementById("total");

let totalPrice = 0;

function addItem() {
    const itemText = input.value.trim();
    const price = parseFloat(priceInput.value);

    if (itemText === "" || isNaN(price)) {
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${itemText} - ${price.toFixed(2)} €</span>
        <button class="delete">🗑️</button>
    `;

    li.querySelector("span").addEventListener("click", function () {
        li.classList.toggle("comprado");
    });

    li.querySelector(".delete").addEventListener("click", function () {
        totalPrice -= price;
        updateTotal();
        li.remove();
    });

    list.appendChild(li);

    totalPrice += price;
    updateTotal();

    input.value = "";
    priceInput.value = "";
    input.focus();
}

function updateTotal() {
    total.textContent = totalPrice.toFixed(2);
}

addButton.addEventListener("click", addItem);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});

priceInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});