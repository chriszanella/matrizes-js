const rows = document.querySelector("#rowsMatrices");
const columns = document.querySelector("#columnsMatrices");
const div = document.querySelector("#recebe");

const valueI = document.querySelector("#valueI");
const valueJ = document.querySelector("#valueJ");

function criarMatriz() {
  const rowsValue = rows.value;
  const columnsValue = columns.value;

  const valueIValue = valueI.value;
  const valueJValue = valueJ.value;

  let controleDeLinha = [];
  for (let i = 1; i <= rowsValue; i++) {
    let controleDeColuna = [];
    for (let j = 1; j <= columnsValue; j++) {
      let conta = valueIValue * i + valueJValue * j;
      controleDeColuna.push(conta);
    }
    controleDeLinha.push(controleDeColuna);
    controleDeColuna = [];
  }
  return controleDeLinha
}

function criarLinha() {
  const linhaCriada = document.createElement('div')
  linhaCriada.classList.add('flex', 'gap-4')
  return linhaCriada
}

function mostrarMatriz() {
  let matriz = criarMatriz()
  for (let linha of matriz) {
    let linhaCriada = criarLinha()
    for (let coluna of linha) {
      const colunaCriada = document.createElement('div')
      colunaCriada.innerText = `${coluna}`
      colunaCriada.classList.add('text-lg', 'font-bold')
      linhaCriada.appendChild(colunaCriada)
    }
    div.appendChild(linhaCriada)
  }
}

function limparInputs() {
  rows.value = '';
  columns.value = '';
  valueI.value = '';
  valueJ.value = '';
}

function limparMatrizes() {
  div.innerHTML = '';
}

document.addEventListener("click", (event) => {
  if (event.target.id === "enviar") {
    event.preventDefault();
    limparMatrizes()
    mostrarMatriz();
    limparInputs();
  }
});

// innerText += `${num}, `
