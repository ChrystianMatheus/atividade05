let salarioMinimo = 1000;  
let totalSalario = 0;
let totalPecas = 0;
let mediaPecasHomens = 0;
let mediaPecasMulheres = 0;
let maiorSalario = 0;
let operarioMaiorSalario = "";

for (let i = 1; i <= 15; i++) {
  let numeroOperario = parseInt(prompt(`Digite o número do operário ${i}`));
  let pecasFabricadas = parseInt(prompt(`Digite o número de peças fabricadas por mês do operário ${i}`));
  let sexoOperario = prompt(`Digite o sexo do operário ${i} (M/F)`);

  let salario = 0;
  if (pecasFabricadas <= 20) {
    salario = salarioMinimo;
  } else if (pecasFabricadas > 20 && pecasFabricadas <= 30) {
    salario = salarioMinimo + (pecasFabricadas - 20) * (salarioMinimo * 0.03);
  } else {
    salario = salarioMinimo + (pecasFabricadas - 30) * (salarioMinimo * 0.05);
  }

  totalSalario += salario;
  totalPecas += pecasFabricadas;

  if (sexoOperario.toUpperCase() === "M") {
    mediaPecasHomens += pecasFabricadas;
  } else {
    mediaPecasMulheres += pecasFabricadas;
  }

  if (salario > maiorSalario) {
    maiorSalario = salario;
    operarioMaiorSalario = `Operário ${numeroOperario}`;
  }

  document.write(`<h4>Operário ${numeroOperario} - Salário: R$${salario.toFixed(2)}</h4>`);
}

mediaPecasHomens /= 15;
mediaPecasMulheres /= 15;

document.write(`<h4>Total da folha de pagamento: R$${totalSalario.toFixed(2)}</h4>`);
document.write(`<h4>Total de peças fabricadas por mês: ${totalPecas}</h4>`);
document.write(`<h4>Média de peças fabricadas pelos homens: ${mediaPecasHomens.toFixed(2)}</h4>`);
document.write(`<h4>Média de peças fabricadas pelas mulheres: ${mediaPecasMulheres.toFixed(2)}</h4>`);
document.write(`<h4>Operário de maior salário: ${operarioMaiorSalario} - R$${maiorSalario.toFixed(2)}</h4>`);