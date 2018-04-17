$(() => {
    var cadenafixture = localStorage.getItem('fixture');
    var fixtureguardado = JSON.parse(cadenafixture);
    if(fixtureguardado){
        app.run(fixtureguardado);
        var fix = app.getFixture();
        fix.grupos.map(g => {
            var selector = "#grupo" + g.letra;
            $(selector).html(app.templates.grupoTemplate(g));    
        })
        console.log(fix);
    }else{
        $.get("/fixture-rusia-2018/cargar-datos.php", function (datos) {
            app.run(datos);
            var fix = app.getFixture();
            fix.grupos.map(g => {
                var selector = "#grupo" + g.letra;
                $(selector).html(app.templates.grupoTemplate(g));    
            })
        });
    }
})