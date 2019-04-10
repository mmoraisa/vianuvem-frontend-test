const express = require('express')
const cors = require('cors')
const app = express()

const circles = [
	{
		id: 1,
		name: 'Twitter',
		image: 'img/twitter.jpg',
		color: '#aa2b31',
		size: 3
	},
	{
		id: 2,
		name: 'Facebook',
		image: 'img/facebook.jpg',
		color: '#63e184',
		size: 1
	},
	{
		id: 3,
		name: 'Skype',
		image: 'img/skype.png',
		color: '#033d49',
		size: 2
	},
]

app.use(express.static('public'))
app.use(express.static(`css/estilos.css` + '/public'));
app.use(cors())

app.get('/', (req, res) => {
  const help = `

	<pre>
	  <h1>Vianuvem Frontend Test</h1>
	  Bem vindo ao teste de frontend da Vianuvem!

	  Esse é um teste simples, elaborado para conhecermos um pouco mais sobre como você trabalha.
	  Nessa primeira etapa, você precisa consumir o serviço abaixo e criar uma tela conforme a imagem a seguir:
  
	  <h2>Imagem da tela vista em computador</h2>
	  <img src="img/screen_1.png"/>
	  <h2>Imagem da tela vista em celular</h2>
	  <img src="img/screen_2.png"/>

	  GET /circles
		UTILIZAÇÃO:
		  Obtém todos os "círculos" disponíveis para a criação da tela

	  <ol>
	  	<h2>Regras</h2>
		 <li>O projeto deverá ser desenvolvido com Javascript puro e / ou jQuery</li>
		 <li>Projetos responsivos tendem a ser mais bem avaliados</li>
		 <li>A API já está criada, e nenhuma alteração nela é permitida</li>
		 <li>Ao passar o mouse sobre as imagens, deve ser exibido o texto da propriedade "name", como acontece na primeira imagem, com o título Twitter</li>
		 <li>Todo o desenvolvimento será avaliado</li>
		 <li>Após o termino, entregue o projeto via Github ou arquivo .zip</li>
	  </ol>
   </pre>
	`
  
	res.send(help)
  })

app.get('/circles', (req, res) => {
    res.send(circles)
})

app.get('/via_nuvem_teste', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <link rel="stylesheet" type="text/css" href="css/estilos.css" />
  
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Flexbox Grid System </title>
    </head>
  
    <body>
      <div class="row">
        <div class="col">
           <img class="twitter" src="../img/twitter.jpg" alt="Logo do Twiter">
        </div>
        <div class="col">
           <img class="facebook" src="../img/facebook.jpg" alt="Logo do Facebook">
        </div>
        <div class="col">
          <img class="skype" src="../img/skype.png" alt="Logo do Skyper">
        </div>        
      </div>
    </body>
  
  </html>
  
  `)
})


app.listen(3001, () => {
  console.log('Server listening on port 3001')
})

