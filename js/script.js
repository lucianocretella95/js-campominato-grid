for (let i = 1; i <= 100; i++) {
  const griglia = document.getElementById("grid");
  const element = `<div class="square ${i}">${i}</div>`;
  griglia.innerHTML += element;
}
