var g = 0;

function addTotalG(x) {
  g += x;
}

function funCo2(watts, horas, pessoas) {
  let Wh_mes = 8700000000000;
  let g_mes = 6885;
  let Wh_g = Wh_mes / g_mes;
  console.log(watts * horas * pessoas / Wh_g);
  addTotalG(watts * horas * pessoas / Wh_g);
  return (watts * horas * pessoas / Wh_g);
}

function LGasolinaCO2(litros) {
  let densidadeGas = 0.824;

  let molarmassCO2_molGas = 44 * 8; // 1 mol de gasolina para 8 de CO2

  let Goctano = (1000 * litros) * densidadeGas;

  let GdeCO2_GGas = molarmassCO2_molGas / 114 // <-massa molar gasolina
  console.log(GdeCO2_GGas, Goctano);

  let GCO2 = GdeCO2_GGas * Goctano;

  addTotalG(GCO2);
  return GCO2;
}

function LetanolCO2(litros) {
  let densidadeGas = 0.79;

  let molarmassCO2_molGas = 44 * 2; // 1 mol de alcool para 2 de CO2

  let GGas = (1000 * litros) * densidadeGas;

  let GdeCO2_GGas = molarmassCO2_molGas / 46 // <- massa molar alcool

  let GCO2 = GdeCO2_GGas * GGas;

  addTotalG(GCO2);
  return GCO2;
}

function LdiselCO2(litros) { // 4C12H23 + 71O2 --> 48CO2 + 46H2O
  let densidadeGas = 0.9;

  let molarmassCO2_molGas = 44 * 48; // 4 mol de disel para 48 de CO2

  let GGas = (1000 * litros) * densidadeGas;

  let GdeCO2_GGas = molarmassCO2_molGas / 46 * 4 // <- massa molar disel balanceada

  let GCO2 = GdeCO2_GGas * GGas;


  addTotalG(GCO2);
  return GCO2;
}

function LqueroseneCO2(litros) {
  let densidadeGas = 0.795;

  let molarmassCO2_molGas = 44 * 24; // 2 mol de querosene para 2 de CO2

  let GGas = (1000 * litros) * densidadeGas;

  let GdeCO2_GGas = molarmassCO2_molGas / 74 * 2 // <- massa molar querosene balanceada

  let GCO2 = GdeCO2_GGas * GGas;

  addTotalG(GCO2);

  return GCO2;
}
