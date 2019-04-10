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
  <link rel="stylesheet" type="text/css" href="css/estilos.css" />
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



app.listen(3001, () => {
  console.log('Server listening on port 3001')
})

