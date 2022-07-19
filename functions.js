$(document).ready(()=>{
    $('#start').click(()=>{
        $.getJSON('data.json', (el)=>{
            eachElementsAddress(el.address);
            eachElementsDrivers(el.drivers);
        });
    });
});

/**
 * Functions for address
 * @param {*} arr 
 */
function eachElementsAddress(arr){
    $.each(arr, (i, item)=>{
        console.log(i, item.street);
        let long = getLongStreet(item);
        let par = isPar(long);
        let vocales = getVocales(item);
        console.log('long: '+long+', par: '+par+', vocales: '+vocales);

        

    });
}

function getLongStreet(item){
    return item.street.length;
}

function isPar(long){
    //let l = item.street.length;
    if(long%2 == 0) return 1;
    return 0;
}

function getVocales(item){
    let v = item.street.match(/[aeiou]/gi);
    return v === null ? 0 : v.length;
}

/**
 * functions for drivers
 */
 function eachElementsDrivers(arr){
    $.each(arr, (i, item)=>{
        console.log(i, item.driver);
        // let long = getLongStreet(item);
        // let par = isPar(item);
        // let vocales = getVocales(item);
        // console.log('long: '+long+', par: '+par+', vocales: '+vocales);
    });
}