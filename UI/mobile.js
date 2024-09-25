async function updateValue(Tecla) {
    await fetch('/api/info', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: Tecla }),
    });
}

// Manejo de eventos para el botón "Right"