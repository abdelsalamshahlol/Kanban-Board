/*
	=== Modal Compoenent ===
*/

var modal = `
<div class="container modal">
	<div class="row">
		<div id="modal-body">
			<h3></h3>
			<p></p>
		</div>
	</div>
</div>
`;

// Modal control
function showModal(title, content, type){
	let modal = $('.modal'); 
	let modalBody = $(modal).find('#modal-body');
	let color = type === 'danger' ? 'bg-danger' : 'bg-sucess';

	modalBody.find('h3').html(title).addClass(color);
	modalBody.find('p').html(content);
	modal.hide().fadeIn('slow');

	// Sorry but I want to use ES6 to save the lexical scope using arrow functions
	setTimeout(()=> {
		modal.fadeOut('slow');
	},3000);
}