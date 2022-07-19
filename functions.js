$(document).ready(()=>{
    $('#start').click(()=>{
        $.getJSON('data.json', (el)=>{
            eachElements(el.address, el.drivers);
            // eachElementsAddress(el.address);
            // eachElementsDrivers(el.drivers);
        });
    });
});

function eachElements(addressArr, driversArr){
    let ss;
    let assignRoutes = [];
    $.each(driversArr, (i, driverElement)=>{
        console.log(i, driverElement);
        
        let longitudNombreConductor = getLongitud(driverElement.driver);
        let conductorVocales = getVocales(driverElement);
        let consuctorConsonantes = getConsonantes(driverElement);

        $.each(addressArr, (j, addressElement) => {
            let longitudNombreCalle = getLongitud(addressElement.street);
            //console.log(j+' long street: '+longitudNombreCalle);      
            let addressPar = isPar(longitudNombreCalle);
            //console.log('longitud calle es par: '+addressPar);
            
            if(longitudNombreCalle == longitudNombreConductor) addressPar = 2;
            
            switch(addressPar){
                case 2:
                    ss = conductorVocales * 2.25;
                case 1:
                    ss = conductorVocales * 1.5;
                    break;
                case 0:
                    ss = consuctorConsonantes * 1;
                    break;
            }
            console.log('ss, par :' + ss);

        });

    });
}

function getLongitud(element){
    return element.length;
}

function isPar(long){
    if(long%2 == 0) return 1;
    return 0;
}

function getVocales(element){
    let v = element.driver.match(/[aeiou]/gi);
    return v === null ? 0 : v.length;
}

function getConsonantes(element){
    let v = element.driver.match(/[bcdfghjklmnñpqrstvxzwy]/gi);
    return v === null ? 0 : v.length;
}