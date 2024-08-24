const line = document.querySelector('.line');
const slider = document.getElementById('slider');

slider.addEventListener('mousedown', function (event) {
  document.addEventListener('mousemove', moveSlider);
  document.addEventListener('mouseup', stopSlider);
});

function moveSlider(event) {
  const lineWidth = line.offsetWidth;
  const lineLeft = line.getBoundingClientRect().left;
  const mouseX = event.clientX;
  const position = Math.max(0, Math.min(1, (mouseX - lineLeft) / lineWidth));

  slider.style.left = position * 100 + '%';
  
  const minPrice = 100000;
  const maxPrice = 10000000;
   const priceRange = maxPrice - minPrice;
   // Calcul du nouveau prix en tenant compte du bond de 5000
  const priceIncrement = 5000;
  const newPrice = Math.round((priceRange * position) / priceIncrement) * priceIncrement + minPrice;

  // Limite le prix dans la plage spécifiée
  const limitedPrice = Math.max(minPrice, Math.min(maxPrice, newPrice));
  
  const prixInput = document.getElementById('prix');
  prixInput.value = newPrice.toLocaleString('en-US', { minimumFractionDigits: 0 });

}

function stopSlider() {
  document.removeEventListener('mousemove', moveSlider);
  document.removeEventListener('mouseup', stopSlider);
}
function test(){
	
	var prix = parseInt(document.getElementById("prix").value);
	var selectElement = document.getElementById("pourcentage");
	// Récupérer la valeur sélectionnée
	var selectedValue = parseInt(selectElement.value);
	if(isNaN(prix) || prix < 100000 || prix > 10000000){
	document.getElementById("message-erreur").textContent = 'Le prix de la maison doit être compris entre 100,000$ et 10,000,000$.';
	return;
	}
	else{
		alert("Bonjour");

	document.getElementById('message-erreur').textContent = '';
	let hypotheque = prix - (prix * (selectedValue / 100));
	document.getElementById("h55").textContent = hypotheque + "$";


	/*  var taux = parseFloat(document.getElementById('taux').value);
    var duree = parseInt(document.getElementById('annee').value);
    var versement = hypotheque * (taux / 100) / 12 / (1 - Math.pow(1 + taux / 100 / 12, -duree * 12));
    document.getElementById('versement').textContent = versement.toLocaleString('en-US') + '$';*/
	}
}


/*Generer tous les possibilite d'annee pour ne pas ecrire tous les options dans le code dans le combo box*/
var toutesLesDureesOptgroup = document.querySelector('optgroup[label="Toutes les durees"]');
for(var i =1; i<= 25; i++){
	var option = document.createElement('option');
	option.value = i;
	option.textContent =i;
	toutesLesDureesOptgroup.appendChild(option);
}

var tousLesPour = document.querySelector('optgroup[label="Tous les pourcentage"]')
for(var j =5 ; j < 100 ; j++){
	var option = document.createElement('option');
	option.value =j;
	option.textContent =j ;
	tousLesPour.appendChild(option);
}

var tousLesPourcentage = document.querySelector('optgroup[label="Tout les pourcentages"]')
for(var j =0.1 ; j < 15 ; j= j+ 0.1){
	var option = document.createElement('option');
	option.value = j.toFixed(1);
	option.textContent = j.toFixed(1) ;
	tousLesPourcentage.appendChild(option);
}
