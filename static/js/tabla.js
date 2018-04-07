const grupo = {
    letra: "A",
    equipo1: {
        nombre: "Rusia",
    },
    equipo2: {
        nombre: "Egipto",
    },
    equipo3: {
        nombre: "Arabia Saudita",
    },
    equipo4: {
        nombre: "Uruguay",
    }
}

const tabla = `
    <table>
        <thead>
            <tr>
                <th>${grupo.letra}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${grupo.equipo1.nombre}</td>
            </tr>
            <tr>
                <td>${grupo.equipo2.nombre}</td>
            </tr>
            <tr>
                <td>${grupo.equipo3.nombre}</td>
            </tr>
            <tr>
                <td>${grupo.equipo4.nombre}</td>
            </tr>
        </tbody>
    </table>
`;

document.body.innerHTML = tabla;
