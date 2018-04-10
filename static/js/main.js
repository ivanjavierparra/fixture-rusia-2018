$(() => {
    $.get("http://127.0.0.1/fixture-rusia-2018/cargar-datos.php", function (datos) {
        app.run(datos);
    });
})