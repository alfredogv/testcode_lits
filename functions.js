/**
 * AGV
 * functions
 */

$(document).ready(()=>{
    $('#start').click(()=>{
        $.getJSON('data.json', (el)=>{
            eachElements(el.address, el.drivers);
        });
    });
});



function eachElements(addressArr, driversArr){
    let maxSS;
    let ss;
    let assignRoutes   = [];
    
    $.each(driversArr, (i, conductorElement)=>{
        let arrayTempSS = [];
        
        console.log(i, conductorElement);

        let longitudNombreConductor = getLongitud(conductorElement.driver);
        let conductorVocales        = getVocales(conductorElement);
        let conductorConsonantes    = getConsonantes(conductorElement);

        
        
        var condcutorAsignadoTemp;
        var direccionAsignadaTemp;
        

        $.each(addressArr, (j, direccionElement) => {
            let longitudNombreCalle = getLongitud(direccionElement.street);
            let addressPar          = isPar(longitudNombreCalle);
            
            if(addressPar == 1){ //par
                ss = conductorVocales * 1.5;
                arrayTempSS.push(ss);
                
            }

            if(addressPar == 0){ //impar
                ss = conductorConsonantes * 1;
                arrayTempSS.push(ss);
                
            }

            if(longitudNombreCalle == longitudNombreConductor){
                ss = conductorVocales * 2.25;
                arrayTempSS.push(ss);
            }
            console.log('arrayTempSS: '+arrayTempSS);
            
        });

        arrayTempSS = [...new Set(arrayTempSS)];
        arrayTempSS = Math.max(...arrayTempSS);
        maxSS = arrayTempSS;
        
        //console.log('consuctor: ' + conductorElement.driver);
        // assignRoutes.push({"conductor":conductorElement.driver,"direccion":direccionAsignadaTemp});
        // direccionAsignadaTemp = [];
    });
}

function getLongitud(element){
    return element.length;
}

function isPar(long){
    if(long%2 == 0) return 1;
    else return 0;
}

function getVocales(element){
    let v = element.driver.match(/[aeiou]/gi);
    return v === null ? 0 : v.length;
}

function getConsonantes(element){
    let v = element.driver.match(/[bcdfghjklmnñpqrstvxzwy]/gi);
    return v === null ? 0 : v.length;
}