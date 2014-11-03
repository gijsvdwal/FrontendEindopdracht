//De variabel fieldset selecteert de 3e fieldset met de queryselector en zorgt dat deze op invisible komt te staan
var fieldsetProject = document.querySelector('fieldset:nth-of-type(3)');
fieldsetProject.classList.add('is-invisible');

//De variabel fieldset2 selecteert de 4e fieldset met de queryselector en zorgt dat deze op invisible komt te staan
var fieldsetStage = document.querySelector('fieldset:nth-of-type(4)');
fieldsetStage.classList.add('is-invisible');

//Selecteer element met queryselector als daar op geklikt wordt en zeg: voeg fieldset toe en haal fieldset2 weg
document.querySelector('input[type="radio"][name="aanmelden"]').onclick = function() {
	fieldsetProject.classList.add('is-visible');
	fieldsetStage.classList.remove('is-visible');
}

//Selecteer element met queryselector als daar op geklikt wordt en zeg: voeg fieldset2 toe en haal fieldset weg
document.querySelector('input[type="radio"][name="aanmelden"]:last-of-type').onclick = function() {
	fieldsetProject.classList.remove('is-visible');
	fieldsetStage.classList.add('is-visible');
}