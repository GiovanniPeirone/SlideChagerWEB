const { response } = require("express");

function change_data(key){
    const newKey = key;

    fetch('api/change_data', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify( { key : newKey} )
    })
    .then(response => response.json())
    .then( data => {
        console.log('Reposta dek servodor', data );
    })
    .catch(error => {console.error('Error', error)});
}