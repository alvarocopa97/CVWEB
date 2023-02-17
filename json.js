traer().run;
function traer(){
    let url ='https://randomuser.me/api/'
    fetch(url)
    .then((response) => {return response.json();
    }).then((data) => {
        console.log(data);
        document.getElementById('usuario').innerHTML = data.results[0].login.username;
        document.getElementById('telefono').innerHTML = data.results[0].cell;
        document.getElementById('email').innerHTML =  data.results[0].email;
        document.getElementById('localidad').innerHTML =  data.results[0].location.street.name;
        document.getElementById('nombrePerfil').innerHTML = data.results[0].name.first.toUpperCase() +" " + data.results[0].name.last.toUpperCase();
        document.getElementById('fotoPerfil').innerHTML = ` 

        <img id="img" src="${data.results[0].picture.large}" > 
        ` ;
        document.getElementById('genero').innerHTML =  "Genero: " +data.results[0].gender;
        document.getElementById('numero').innerHTML =  "Numero: " + data.results[0].location.street.number;
        document.getElementById('calle').innerHTML = "Ciudad: " + data.results[0].location.street.name;
        document.getElementById('ciudad').innerHTML = "Estado: " +  data.results[0].location.city;
        document.getElementById('estado').innerHTML = "Pais: " + data.results[0].location.state;
        document.getElementById('codigopostal').innerHTML = "Codigo Postal: " + data.results[0].location.postcode;
        document.getElementById('latitud').innerHTML = "Latitud: " + data.results[0].location.coordinates.latitude;
        document.getElementById('longitud').innerHTML = "Longitud: " + data.results[0].location.coordinates.longitude;
        
        document.getElementById('facebook').innerHTML = " "+ data.results[0].name.title + " " + data.results[0].name.first +" " + data.results[0].name.last ;
        document.getElementById('tiktok').innerHTML =  " "+data.results[0].name.title + data.results[0].name.last;
        document.getElementById('twitter').innerHTML = " twitter.com/" + data.results[0].name.title + " " + data.results[0].name.first ;
        document.getElementById('instagram').innerHTML = " instagram.com/" + data.results[0].name.first + "99";
    })

}
function imprimir(nombre) {
    var ficha = document.getElementById(nombre);
    var ventimp = window.open(' ', 'popimpr');
    ventimp.document.write( ficha.innerHTML );
    ventimp.document.close();
    ventimp.print( );
    ventimp.close();
}
