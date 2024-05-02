const griglia = document.getElementById("grid");
for (let i = 1; i <= 100; i++) {
  const element = `<div class="square ${i}">${i}</div>`;
  griglia.innerHTML += element;
}
