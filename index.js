import inquirer from "inquirer"
import qr from "qr-image"
import * as fs from 'node:fs'

inquirer.prompt([
    {   
        name: "URL",
        message: "Qual a URL que deseja transformar em qrcode?"},
    {
        name:"Name",
        message:"Qual o nome do arquivo?"
    }
  ]).then((answers) => {
    const url = answers.URL
    const fileName = answers.Name
    let new_qr = qr.image(url, {type:"png"})
    new_qr.pipe(fs.createWriteStream(`${fileName}.png`))
  }).catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      console.log("Erro não mapeado")
    }
  });