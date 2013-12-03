var module = {};
module.news = function () {
	var quantidade = 0;

	var load = function() {
		// (...)
		// quantidade = 100;

		if (quantidade) {
		}

		console.log("Carregado")
	};

	var clean = function() {
		// (...)

		console.log("Limpo")
	};

	return  {
		init: function () {
			load();
			return "init() finalizado";
		},

		refresh: function () {
			clean();
			load();
			return "refresh() finalizado";
		}
	};
}();