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
        //fases-phone
        fix.fases.map(f => {
            $('#llaves').append(app.templates.fasePhoneTemplate(f));
        })
        //fases-desktop
        fix.fases.map(f => {
            f.partidos.map(p =>{
                var selector = '#desktop-partido-' + p.numero;
                $(selector).html(app.templates.partidoDesktopTemplate(p));
            })
        })
    }else{
        $.get("http://127.0.0.1/fixture-rusia-2018/cargar-datos.php", function (datos) {
            app.run(datos);
            var fix = app.getFixture();
            fix.grupos.map(g => {
                var selector = "#grupo" + g.letra;
                $(selector).html(app.templates.grupoTemplate(g));    
            })
            //fases-phone
            fix.fases.map(f => {
                $('#llaves').append(app.templates.fasePhoneTemplate(f));
            })
            //fases-desktop
            fix.fases.map(f => {
                f.partidos.map(p =>{
                    var selector = '#desktop-partido-' + p.numero;
                    $(selector).html(app.templates.partidoDesktopTemplate(p));
                })
            })
            console.log("Creacion la concha de tu hermana");
            console.log(fix);
        });
    }
})