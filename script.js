function verificar() {
	var data = new Date()
	var ano = data.getFullYear()
	var fano = document.getElementById('txtano')
	var res = document.getElementById('res')
	if (fano.value.length == 0 || Number(fano.value) > ano){
		window.alert('Tudo certo')
	} else {
		var fsex = document.getElementsByName('radsex')
		var idade = ano - Number(fano.value)
		var genero = ''
		var img = document.createElement('img')
		img.setAttribute('id', 'foto')
		if (fsex[0].checked) {
			genero = 'Homem'
			if (idade >= 0 && idade < 10) {
				//criança
				img.setAttribute('src', 'bebe-m.jpg')
			} else if (idade < 21) {
				//jovem
				img.setAttribute('src', 'jovem-m.jpg')
			} else if (idade < 50) {
				//adulto
				img.setAttribute('src', 'adulto-m.jpg')
			} else {
				//idoso
				img.setAttribute('src', 'idoso-m.jpg')
			}
		} else if (fsex[1].checked) {
			genero = 'Mulher'
			if (idade >= 0 && idade < 10) {
				//criança
				img.setAttribute('src', 'bebe-f.jpg')
			} else if (idade < 21) {
				//jovem
				img.setAttribute('src', 'jovem-f.jpg')
			} else if (idade < 50) {
				//adulto
				img.setAttribute('src', 'adulto-f.jpg')
			} else {
				//idoso
				img.setAttribute('src', 'idoso-f.jpg')
			}
		}
		res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
		res.appendChild(img)
	}
}