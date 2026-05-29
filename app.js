
const url = "https://hp-api.onrender.com/api/characters";

const contenedor = document.getElementById("contenedorPersonajes");

fetch(url)
.then(response => response.json())
.then( data =>{
    data.forEach(personaje => {
        // .innerHTML agrega html dinamicamente
      contenedor.innerHTML +=  ` 
                <div>
                    <h2>${personaje.name}</h2>
                    <img src="${personaje.image}" width="200">
                </div>
            `;
    });
})
.catch( error => console.log("Error" , error) );






