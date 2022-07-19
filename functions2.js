/**
 * AGV
 * funciones v2
 */

$(document).ready(()=>{
    $('#start').click(()=>{
        init();
    });
});

// init main func
function init(){
    const conductoresArray = ["James Lewis","Paul Gutierrez","Jack Brown","Amy Jones","Linda Henderson","Mitchell Huynh","Jacqueline Sandoval","Brandon Marshall","Albert Smith","Abigail Castillo DDS"];
    const callesArray = ["Lane","Skips Lane","Cantebury Drive","Michael Street","Deer Haven Drive","Strother Street","Hillhaven Drive","Sampson Street","Oliver Street","Hamilton Drive"];
    const arrayFinal = []; // array to save final result
    const arraySS = []; // array to save all ss
    
    //cicle to main conductores
    $.each(conductoresArray, (i,conductor)=>{
        console.log('-- conductor: '+conductor);

        // cicle to calles array
        $.each(callesArray, (j, calle)=>{
            console.log(' calle: '+calle);
            // vars to save each fields
            let longitudCalle = getLongitud(calle);
            let longitudNombreConductor = getLongitud(conductor);
            let longitudCallePar = isPar(longitudCalle);
            let numVocalesConductor = getVocales(conductor);
            let numConsonantesConductor = getConsonantes(conductor);

            //debug
            console.log(' longitud calle: '+longitudCalle);
            console.log(' longitud conductor: '+longitudNombreConductor);
            console.log(' calle par: '+longitudCallePar);
            console.log(' num vocales conductor: '+numVocalesConductor);
            console.log(' num consonantes conductor: '+numConsonantesConductor);
            
            //first case
            if(longitudCallePar == 1){
                if(longitudCalle === longitudNombreConductor){
                    ss = (getVocales(conductor) * 1.5) * .50;
                    arraySS.push(ss);
                    arrayFinal.push({'conductor':conductor});
                    console.log('  ss coincide longitues: '+ss);
                }
                else{
                    ss = getVocales(conductor) * 1.5;
                }
                
            }
            else{
                if(longitudCalle == longitudNombreConductor){
                    ss = (getVocales(conductor) * 1) * .50;
                }
                else ss = numConsonantesConductor * 1;
            }
            console.log('--------------------------------');
        });
        
    });
    console.log('array SS: '+arraySS);
    console.log('Ruta final: ' + arrayFinal[0].conductor);
    // document.write('Como quedo la ruta: <br>');
    // $.each(arrayFinal, (i,ruta)=>{
    //     console.log('conductor: '+ruta.conductor + ', se va a: ' + ruta.calle);
    //     document.write('conductor: '+ruta.conductor + ', se va a: ' + ruta.calle+'<br>');
    // });
}

function getLongitud(element){
    if(element)
    return element.length;
}

function isPar(long){
    if(long%2 == 0) return 1;
    else return 0;
}

function getVocales(element){
    let v = element.match(/[aeiou]/gi);
    return v === null ? 0 : v.length;
}

function getConsonantes(element){
    let v = element.match(/[bcdfghjklmnñpqrstvxzwy]/gi);
    return v === null ? 0 : v.length;
}