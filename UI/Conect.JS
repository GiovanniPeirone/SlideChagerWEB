
/*
const codigo = 3000;
document.getElementById('codigo').innerHTML += codigo;
*/

async function fetchValue() {
    const response = await fetch('/api/value');
    const data = await response.json();
    document.getElementById('current-value').innerText = 'Valor actual: ' + data.value;
}
fetchValue();
/*

document.getElementById('Button-Verificar-Coneccion').addEventListener('click', async () => {
    
});




document.getElementById('cargarDatos').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/info');
        const data = await response.json();
        document.getElementById('datos').innerText = JSON.stringify(data);
     

    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});
*/