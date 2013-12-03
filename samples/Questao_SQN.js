$("div[id=10]").on("click", function() {
    $(this).toggle();

    if (!$(this).is(":visible")) {
        var escalas = $(this).find(".escala");

        $.each(escalas, function (index, escala) {
            escala.hide();
            escala.removeAttr("checked");

            var dependentes = $("div[id=10]").filter(function() {
                return $(this).find("input[dependente={0}]".Format($(escala).attr("id")))
            })

            $.each(dependentes, function (index, questaoDependente) {
                $(questaoDependente).hide();
            });
        });
    }
});