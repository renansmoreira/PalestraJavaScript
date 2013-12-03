function QuestaoViewModel(idQuestao) {
    "use strict";
    
    var self = this;
    var elemento = $("div[id={0}]".Format(idQuestao));

    self.Id = idQuestao;
    self.Escalas = [];

    self.QuestoesDependentes = [];

    // Publics
    self.TratarSelecaoDeEscala = function (eventData) {
        var escala = eventData.data;

        self.ExibirDependencias(escala);

        questionario.NumerarQuestoes();
    };

    self.Esconder = function () {
        elemento.hide();
        self.LimparEscalas();
    };

    self.Exibir = function () {
        elemento.show();
    };

    self.AdicionarDependencia = function (questaoDependente) {
        self.QuestoesDependentes.push(questaoDependente);
    };

    self.AdicionarEscala = function (escala) {
        self.Escalas.push(escala);
    };

    // Privates
    function LimparEscalas() {
        $.each(self.Escalas, function (index, escala) {
            escala.Desmarcar();
            self.EsconderDependentes(escala);
        });
    }

    function ExibirDependencias() {
        var questoes = Enumerable
            .From(self.QuestoesDependentes)
            .Where(function (x) { return x.IdEscala == escalaSelecionada.Id; });

        $.each(questoes, function (index, questao) {
            questao.Exibir();
        });
    }

    function EsconderDependentes() {
        $.each(self.QuestoesDependentes, function (index, questaoDependente) {
            questaoDependente.Esconder();
        });
    }
}