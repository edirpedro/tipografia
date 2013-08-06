
var Tipografia = {

	isCtrl: false,
	version_css: 0,
	version_html: 0,

	init: function() {
		// Conteúdo salvo
		var css = (localStorage.length && localStorage['css']) ? localStorage['css'] : $('#css').val();
		var html = (localStorage.length && localStorage['html']) ? localStorage['html'] : $('#html').val();
		var version_css = (localStorage.length && localStorage['version_css']) ? localStorage['version_css'] : this.version_css;
		var version_html = (localStorage.length && localStorage['version_html']) ? localStorage['version_html'] : this.version_html;

		$('#tipografia').text(css);
		$('#css').val(css);
		$('#texto').html(html);
		$('#html').val(html);

		// Checando disponibilidade da API Storage
		if(localStorage)
			$('#editor ul').append('<li>Salvamento automático ativo</li>');
		else
			$('#editor ul').append('<li>Salvamento automático não disponível</li>');

		// Checando se o conteúdo salvo esta desatualizado.
		if(localStorage && (version_css < this.version_css || version_html < this.version_html))
			$('#editor ul').append('<li class="update">Ferramenta atualizada, clique no botão RESET para um update.</li>');

		// Botão Refresh
		$('#refresh').on('click', Tipografia.refresh);

		// Botão Reset
		$('#reset').on('click', function() {
			setTimeout(function() { Tipografia.refresh(); }, 200);
			$('#editor li.update').remove();
		});
		
		// Backgrounds
		$('form input[name="background"]').on('click', function() {
			$('#texto').removeClass().addClass( $(this).val() );
		});
		
		// CTRL + SHIFT para dar refresh
		$(document).keyup(function (e) {
			if(e.which == 17) Tipografia.isCtrl = false;
		}).keydown(function (e) {
			if(e.which == 17) Tipografia.isCtrl = true;
			if(e.which == 16 && Tipografia.isCtrl == true) {
				Tipografia.refresh();
				return false;
			}
		});
		
		// Autosave
		setInterval(function() {
			Tipografia.storage();
		}, 5000);
	},
	
	storage: function() {
		localStorage.setItem('css', $('#css').val());
		localStorage.setItem('html', $('#html').val());
		localStorage.setItem('version_css', this.version_css);
		localStorage.setItem('version_html', this.version_html);
	},

	refresh: function() {
		$('#tipografia').text( $('#css').val() );
		$('#texto')
			.html( $('#html').val() )
			.hide()
			.fadeIn();
	}

};

$(document).ready(function() {
	Tipografia.init();
});