(function (self, $) {
    "use strict";
    
    self.AbrirAvaliacao = function (avaliacaoId) {
        var confirmar = function () {
            blockUI.ExibirComMensagem("Aguarde, abrindo a avaliação da escola!");

            $.post(urlHelper.Action.AbrirAvaliacao, { id: avaliacaoId }, function (response) {
                blockUI.Fechar();
                acompanhamentoDeAvaliacoes.ResultadosDaPesquisa.ComId(avaliacaoId).Abrir();
                Growl.ExibirComMensagem("Avaliacão da escola aberta com sucesso");
            });
        };

        mensagemDeConfirmacaoBuilder
            .ComMensagem("Confirma abertura da avaliação da escola?")
            .ComIcone(iconesDaMensagem.Atencao)
            .ComConfirmacao(confirmar)
            .Exibir();
    }

    self.VisualizarCaracterizacaoEscolar = function (avaliacaoId) {
        window.location = "{0}/Index/{1}".Format(urlHelper.View.VisualizarCaracterizacaoEscolar, avaliacaoId);
    }

    self.IniciarEdicaoDeRelatorio = function (avaliacaoId) {
        acompanhamentoDeAvaliacoes.Validar.AnaliseDosQuestionarios(avaliacaoId);

        var confirmar = function () {
            blockUI.ExibirComMensagem("Aguarde, calculando as notas da avaliação!");

            $.post(urlHelper.Action.IniciarEdicaoDeRelatorio, { id: avaliacaoId }, function (response) {
                blockUI.Fechar();
                acompanhamentoDeAvaliacoes.ResultadosDaPesquisa.ComId(avaliacaoId).ColocarEmEdicaoDeRelatorio();
                window.location = "{0}/Index/{1}".Format(urlHelper.View.EditarRelatorio, avaliacaoId);
            });
        };

        mensagemDeConfirmacaoBuilder.ComMensagem(mensagem).ComConfirmacao(confirmar).ComIcone(iconesDaMensagem.Atencao).Exibir();
    }

    self.EditarRelatorio = function (avaliacaoId) {
        window.location = "{0}/Index/{1}".Format(urlHelper.View.EditarRelatorio, avaliacaoId);
    }

    self.TrocarParaRelatorioGerado = function (avaliacaoId) {
        $.post(urlHelper.Action.TrocarParaRelatorioGerado, { id: avaliacaoId }, function (response) {
            acompanhamentoDeAvaliacoes.ResultadosDaPesquisa.ComId(avaliacaoId).ColocarComoRelatorioGerado(GerarRelatorioConsolidado);
        });
    }

    self.GerarAnexo = function (avaliacaoId) {
        relatorioDeAvaliacao.Gerar(urlHelper.Action.GerarAnexo, avaliacaoId, RelatorioDeAvaliacao.Anexo);
    }

    self.GerarRelatorioConsolidado = function (avaliacaoId) {
        relatorioDeAvaliacao.Gerar(urlHelper.Action.GerarRelatorioConsolidado, avaliacaoId, RelatorioDeAvaliacao.Consolidado);
    }

    self.GerarRelatorioAnalitico = function (avaliacaoId) {
        relatorioDeAvaliacao.Gerar(urlHelper.Action.GerarRelatorioAnalitico, avaliacaoId, RelatorioDeAvaliacao.Analitico);
    }

    self.ExibirRelatorioAnalitico = function (avaliacaoId) {
        relatorioDeAvaliacao.Gerar(urlHelper.Action.ExibirRelatorioAnalitico, avaliacaoId, RelatorioDeAvaliacao.Analitico);
    }

    self.ExibirRelatorioConsolidado = function (avaliacaoId) {
        relatorioDeAvaliacao.Gerar(urlHelper.Action.BaixarRelatorioConsolidado, avaliacaoId, RelatorioDeAvaliacao.Consolidado);
    }

    self.ExibirAnexo = function (avaliacaoId) {
        relatorioDeAvaliacao.Gerar(urlHelper.Action.ExibirAnexo, avaliacaoId, RelatorioDeAvaliacao.Anexo);
    }
})(window.acompanhamentoDeAvaliacoes = window.acompanhamentoDeAvaliacoes || {}, jQuery);