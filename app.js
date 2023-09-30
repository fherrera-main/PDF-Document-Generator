// import { generateDynamicTable } from "./services/HTMLComponentsGeneratorService.js";

// const tableHeadersMock = ["Lista","Nombre", "Asociación/ Programa", "Actividad"]
// const bodyDataMock = [
//   {
//     name: "NASER MALEKI",
//     program: "Iran",
//     activity: null,
//     list: "ONU",
//     status: "Activo",
//     score: 96
//   },
//   {
//     name: "NASER MALEKI",
//     program: "LISTA CONSOLIDADA DEL CONSEJO DE SEGURIDAD DE LAS ",
//     activity: "Head of Shahid Hemmat Industrial Group (SHIG)",
//     list: "ONU",
//     status: "Activo",
//     score: 96
//   },
//   {
//     name: "Naser MALEKI",
//     program: "SDN",
//     activity: null,
//     list: "OFAC",
//     status: "Activo",
//     score: 96
//   }
// ].map(({list, name, program, activity}) => ({list, name, program, activity}))

// document.querySelector('#generateComponentButton').addEventListener('click', generateTable)

// function generateTable(){
//     if (!tableHeadersMock || !bodyDataMock) return;
//     document.querySelector("#generatedElement").innerHTML = generateDynamicTable(tableHeadersMock, bodyDataMock)
// }

import { downloadOfacOnuInterpolDocument, downloadMallaSocietariaDocument } from './controllers/documentController.js'

//TO DO: Solo debe existir funciones de addEventListener.

//Crear tabla de Bootstrap dinamica

document.querySelector('#generateComponentButton').addEventListener('click', downloadOfacOnuInterpolDocument())


//TO DO: El callback debe ser un metodo de la store.