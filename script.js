let todosLosPaises = [];

        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(datos => {
                todosLosPaises = datos;
                mostrarPaises(todosLosPaises);
            });

        function mostrarPaises(datos) {
            let banderas = '';
            for (let pais of datos) {
                banderas += `<div class="tarjeta">
                                <img src="${pais.flags.png}" alt="Bandera de ${pais.name.common}"><br>
                                <p> <strong>País: </strong>  ${pais.name.common} </p>
                                <p> <strong>Capital: </strong>  ${pais.capital ? pais.capital : 'N/A'} </p>
                                <p> <strong>Población: </strong>  ${pais.population.toLocaleString()} </p>
                                <p> <strong>Continente: </strong>  ${pais.region} </p>
                            </div>`;
            }
            document.querySelector("#banderas").innerHTML = banderas;
        }

        function filtrarPaises() {
            const input = document.querySelector(".buscador").value.toLowerCase();
            const paisesFiltrados = todosLosPaises.filter(pais => 
                pais.name.common.toLowerCase().includes(input)
            );
            mostrarPaises(paisesFiltrados);
        }