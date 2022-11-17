(function(){

    var actualizarHora = function(){
        //Creamos un nuevo objeto tipo Fecha y tomamos sus diversos datos para ponerlos en variables
        var fecha = new Date();
        var horas = fecha.getHours();
        var ampm;
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();
        var diaSemana = fecha.getDay();  //da como resultado el número de día de la semana, empezando por el domingo en cero
        var dia = fecha.getDate();
        var mes = fecha.getMonth();
        var anio = fecha.getFullYear();

        //almacenamos los datos relevantes de los párrafos del index en variables
        var pHoras = document.getElementById("horas");
        var pAMPM = document.getElementById("ampm");
        var pMinutos = document.getElementById("minutos");
        var pSegundos = document.getElementById("segundos");
        var pDiaSemana = document.getElementById("diaSemana");
        var pDia = document.getElementById("dia");
        var pMes = document.getElementById("mes");
        var pAnio = document.getElementById("anio");
    
        //creamos un arreglo con los días de la semana, lo buscamos en la fecha y lo mostramos en el párrafo
        var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        pDiaSemana.textContent = semana[diaSemana];

        //mostramos en el párrafo el día del mes (número)
        pDia.textContent = dia;

        //creamos un arreglo con los meses del año, lo buscamos en la fecha y lo mostramos en el párrafo
        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        pMes.textContent = meses[mes];

        //mostramos en el párrafo el año (número)
        pAnio.textContent = anio;

        //Ahora vamos a la hora en sí
        
        //Restamos 12 para que solo sea del 1 al 12 
        if(horas >= 12){
            horas = horas - 12;
            ampm = "PM";
        } else {          
            ampm = "AM";
        }
        //Le ponemos 12 en caso de ser las 0 hs
        if(horas == 0){
            horas = 12;
        };
        //mostramos la hora en el párrafo
        pHoras.textContent = horas;

        //mostramos si es AM o PM en el párrafo
        pAMPM.textContent = ampm;

        //Le damos el formato de doble número a los menores de diez en minutos y segundos
        if(minutos < 10){
            minutos = "0" + minutos;
        }

        if(segundos < 10){
            segundos = "0" + segundos;
        }

        //mostramos los minutos en el párrafo
        pMinutos.textContent = minutos;

        //mostramos los segundos en el párrafo
        pSegundos.textContent = segundos;
    };

    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);  //damos un intervalo de repetición de la función, cada segundo

}())