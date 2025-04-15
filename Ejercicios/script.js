// Parte del código anterior para los comentarios
document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const commentText = document.getElementById('commentText');
    const commentsList = document.getElementById('commentsList');
    
    loadComments();
    
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const commentContent = commentText.value.trim();
        if (commentContent) {
            addComment(commentContent);
            commentText.value = '';
            saveComments();
        }
    });
    
    function addComment(content) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        const now = new Date();
        const dateTimeString = now.toLocaleString();
        commentDiv.innerHTML = `
            <div class="comment-header">
                <span class="comment-date">${dateTimeString}</span>
                <button class="delete-btn">Eliminar</button>
            </div>
            <div class="comment-content">${content}</div>
        `;
        const deleteBtn = commentDiv.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            commentDiv.remove();
            saveComments();
        });
        commentsList.prepend(commentDiv);
    }
    
    function saveComments() {
        const comments = [];
        document.querySelectorAll('.comment').forEach(comment => {
            const date = comment.querySelector('.comment-date').textContent;
            const content = comment.querySelector('.comment-content').textContent;
            comments.push({ date, content });
        });
        localStorage.setItem('bookComments', JSON.stringify(comments));
    }
    
    function loadComments() {
        const savedComments = localStorage.getItem('bookComments');
        if (savedComments) {
            JSON.parse(savedComments).forEach(comment => {
                addComment(comment.content);
            });
        }
    }
});

// Ejercicio 1
function ejercicio1() {
    const results = document.getElementById('exerciseResults');
    results.innerHTML = '<h3>Resultados Ejercicio 1</h3>';
    
    // Ejercicio 1.1
    let randomArray = [];
    for (let i = 0; i < 10; i++) {
        randomArray.push(Math.floor(Math.random() * 100));
    }
    results.innerHTML += `1.1 Array de 10 números aleatorios:\n${JSON.stringify(randomArray)}\n\n`;
    
    // Ejercicio 1.2
    let userInput = prompt('Ingresa varias palabras separadas por comas (ej: 1,2,3,4,5)');
    if (userInput) {
        let arrayFromInput = userInput.split(',').map(item => item.trim());
        results.innerHTML += `1.2 Array creado:\n${JSON.stringify(arrayFromInput)}\n\n`;
    } else {
        results.innerHTML += '1.2 No se ingresó ningún valor\n\n';
    }
    
    // Ejercicio 1.3
    const array = [10, 40, 30, 20, 15, 5];
    const sortedArray = [...array].sort((a, b) => a - b);
    const min = Math.min(...array);
    const max = Math.max(...array);
    
    results.innerHTML += `1.3 Arreglo original: ${JSON.stringify(array)}\n`;
    results.innerHTML += `Arreglo ordenado: ${JSON.stringify(sortedArray)}\n`;
    results.innerHTML += `Número menor: ${min}\n`;
    results.innerHTML += `Número mayor: ${max}\n`;
}

// Ejercicio 2
function ejercicio2() {
    const results = document.getElementById('exerciseResults');
    results.innerHTML = '<h3>Resultados Ejercicio 2</h3>';
    
    // Ejercicio 2.1
    let respuesta = prompt('¿Eres bellisimo/a? (responde sí o no)');
    if (respuesta && respuesta.toLowerCase() === 'sí') {
        results.innerHTML += '2.1 Ciertamente\n\n';
    } else if (respuesta && respuesta.toLowerCase() === 'no') {
        results.innerHTML += '2.1 No te creo\n\n';
    } else {
        results.innerHTML += '2.1 Respuesta no válida\n\n';
    }
    
    // Ejercicio 2.2
    let numDivisible = prompt('Ingresa un número para verificar si es divisible entre 2');
    if (numDivisible && !isNaN(numDivisible)) {
        if (parseInt(numDivisible) % 2 === 0) {
            results.innerHTML += `2.2 ${numDivisible} es divisible entre 2\n\n`;
        } else {
            results.innerHTML += `2.2 ${numDivisible} no es divisible entre 2\n\n`;
        }
    } else {
        results.innerHTML += '2.2 No ingresaste un número válido\n\n';
    }
    
    // Ejercicio 2.3
    let numPar = prompt('Ingresa un número para verificar si es par');
    if (numPar && !isNaN(numPar)) {
        if (parseInt(numPar) % 2 === 0) {
            alert(`${numPar} es par`);
        } else {
            alert(`${numPar} no es par`);
        }
        results.innerHTML += '2.3 Ver resultado en el alert\n\n';
    } else {
        results.innerHTML += '2.3 No ingresaste un número válido\n\n';
    }
    
    // Ejercicio 2.4
    let numCliente = prompt('Ingresa tu número de cliente');
    if (numCliente && !isNaN(numCliente)) {
        if (parseInt(numCliente) === 1000) {
            results.innerHTML += '2.4 Ganaste un premio\n\n';
        } else {
            results.innerHTML += `2.4 ${numCliente} - Lo sentimos, sigue participando\n\n`;
        }
    } else {
        results.innerHTML += '2.4 No ingresaste un número válido\n\n';
    }
    
    // Ejercicio 2.5
    let num1 = prompt('Ingresa el primer número para comparar');
    let num2 = prompt('Ingresa el segundo número para comparar');
    if (num1 && num2 && !isNaN(num1) && !isNaN(num2)) {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        if (num1 < num2) {
            results.innerHTML += `2.5 El número menor es ${num1}\n\n`;
        } else if (num2 < num1) {
            results.innerHTML += `2.5 El número menor es ${num2}\n\n`;
        } else {
            results.innerHTML += '2.5 Los números son iguales\n\n';
        }
    } else {
        results.innerHTML += '2.5 No ingresaste números válidos\n\n';
    }
    
    // Ejercicio 2.6
    let n1 = prompt('Ingresa el primer número');
    let n2 = prompt('Ingresa el segundo número');
    let n3 = prompt('Ingresa el tercer número');
    if (n1 && n2 && n3 && !isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        n3 = parseInt(n3);
        const mayor = Math.max(n1, n2, n3);
        results.innerHTML += `2.6 El número mayor es ${mayor}\n\n`;
    } else {
        results.innerHTML += '2.6 No ingresaste números válidos\n\n';
    }
    
    // Ejercicio 2.7
    let dia = prompt('Ingresa un día de la semana').toLowerCase();
    switch(dia) {
        case 'lunes':
            results.innerHTML += '2.7 ¡Ánimo, comienza la semana!\n\n';
            break;
        case 'viernes':
            results.innerHTML += '2.7 ¡Ya casi es fin de semana!\n\n';
            break;
        case 'sábado':
        case 'sabado':
        case 'domingo':
            results.innerHTML += '2.7 ¡Disfruta tu fin de semana!\n\n';
            break;
        default:
            results.innerHTML += '2.7 Buen día\n\n';
    }
    
    // Ejercicio 2.8
    let calificacion = prompt('Ingresa una calificación (1-10)');
    if (calificacion && !isNaN(calificacion)) {
        calificacion = parseFloat(calificacion);
        if (calificacion < 1 || calificacion > 10) {
            results.innerHTML += '2.8 Error: La calificación debe estar entre 1 y 10\n\n';
        } else if (calificacion < 6) {
            results.innerHTML += '2.8 Reprobado\n\n';
        } else if (calificacion <= 8) {
            results.innerHTML += '2.8 Regular\n\n';
        } else if (calificacion === 9) {
            results.innerHTML += '2.8 Bien\n\n';
        } else {
            results.innerHTML += '2.8 Excelente\n\n';
        }
    } else {
        results.innerHTML += '2.8 No ingresaste una calificación válida\n\n';
    }
    
    // Ejercicio 2.9
    const preciosHelado = {
        'sin topping': 50,
        'oreo': 60,
        'kitkat': 65,
        'brownie': 70
    };
    let topping = prompt('¿Qué topping deseas para tu helado? (oreo, kitkat, brownie)').toLowerCase();
    if (preciosHelado[topping]) {
        results.innerHTML += `2.9 El precio de tu helado con topping de ${topping} es ${preciosHelado[topping]} MXN\n\n`;
    } else {
        results.innerHTML += `2.9 No tenemos este topping, lo sentimos. El precio del helado sin topping es ${preciosHelado['sin topping']} MXN\n\n`;
    }
    
    // Ejercicio 2.10
    const programas = {
        'course': { precio: 4999, meses: 2 },
        'carrera': { precio: 3999, meses: 6 },
        'master': { precio: 2999, meses: 12 }
    };
    const becas = {
        'facebook': 0.2,
        'google': 0.15,
        'jesua': 0.5
    };
    
    let programa = prompt('¿Qué programa deseas? (course, carrera, master)').toLowerCase();
    if (programas[programa]) {
        let beca = prompt('¿Tienes alguna beca? (facebook, google, jesua)').toLowerCase();
        let descuento = becas[beca] || 0;
        let precioMensual = programas[programa].precio * (1 - descuento);
        let total = precioMensual * programas[programa].meses;
        
        results.innerHTML += `2.10 Precio mensual con descuento: ${precioMensual.toFixed(2)} MXN\n`;
        results.innerHTML += `Total a pagar por ${programas[programa].meses} meses: ${total.toFixed(2)} MXN\n\n`;
    } else {
        results.innerHTML += '2.10 Programa no válido\n\n';
    }
    
    // Ejercicio 2.11
    let vehiculo = prompt('¿Qué vehículo usaste? (coche, moto, autobús)').toLowerCase();
    let kms = parseFloat(prompt('¿Cuántos kilómetros recorriste?'));
    let litros = parseFloat(prompt('¿Cuántos litros consumiste?'));
    
    let precioKm = 0;
    switch(vehiculo) {
        case 'coche': precioKm = 0.20; break;
        case 'moto': precioKm = 0.10; break;
        case 'autobús': precioKm = 0.5; break;
        default: precioKm = 0;
    }
    
    let extraLitros = litros <= 100 ? 5 : 10;
    let totalPagar = (precioKm * kms) + extraLitros;
    
    results.innerHTML += `2.11 Total a pagar: ${totalPagar.toFixed(2)} MXN\n`;
}

// Ejercicio 3
function ejercicio3() {
    const results = document.getElementById('exerciseResults');
    results.innerHTML = '<h3>Resultados Ejercicio 3</h3>';
    
    // Ejercicio 3.1
    let impares = [];
    for (let i = 1; i <= 50; i += 2) {
        impares.push(i);
    }
    results.innerHTML += `3.1 Números impares del 1 al 50:\n${impares.join(', ')}\n\n`;
    
    // Ejercicio 3.2 (simplificado sin el array de Pokémons)
    let numPokemon = prompt('Ingresa un número para ver Pokémons múltiplos de 5');
    if (numPokemon && !isNaN(numPokemon)) {
        numPokemon = parseInt(numPokemon);
        let multiplos5 = [];
        for (let i = 5; i <= numPokemon; i += 5) {
            multiplos5.push(i);
        }
        results.innerHTML += `3.2 Números múltiplos de 5 hasta ${numPokemon}:\n${multiplos5.join(', ')}\n`;
        results.innerHTML += '(Nota: En una implementación real, aquí se mostrarían los nombres de Pokémons)\n\n';
    } else {
        results.innerHTML += '3.2 No ingresaste un número válido\n\n';
    }
    
    // Ejercicio 3.3
    const arrayMixto = [4, "dos", 8, "tres", 5, 9, 1, "cero"];
    const numeros = arrayMixto.filter(item => typeof item === 'number');
    results.innerHTML += `3.3 Elementos numéricos del array:\n${JSON.stringify(numeros)}\n`;
}

// Ejercicio 4
function ejercicio4() {
    const results = document.getElementById('exerciseResults');
    results.innerHTML = '<h3>Resultados Ejercicio 4</h3>';
    
    // Ejercicio 4.1
    let numMultiplos = prompt('Ingresa un número para mostrar múltiplos de 5');
    if (numMultiplos && !isNaN(numMultiplos)) {
        numMultiplos = parseInt(numMultiplos);
        let multiplos = [];
        for (let i = 5; i <= numMultiplos; i += 5) {
            multiplos.push(i);
        }
        results.innerHTML += `4.1 Múltiplos de 5 hasta ${numMultiplos}:\n${multiplos.join(', ')}\n\n`;
    } else {
        results.innerHTML += '4.1 No ingresaste un número válido\n\n';
    }
    
    // Ejercicio 4.2
    let num1 = parseInt(prompt('Ingresa el primer número (1-50)'));
    let num2 = parseInt(prompt('Ingresa el segundo número (1-50)'));
    if (!isNaN(num1) && !isNaN(num2)) {
        let numeros = [];
        for (let i = 1; i <= 50; i++) {
            if (i === num1 || i === num2) {
                numeros.push(`${i} ¡Lotería!`);
            } else {
                numeros.push(i);
            }
        }
        results.innerHTML += `4.2 Números del 1 al 50:\n${numeros.join(', ')}\n\n`;
    } else {
        results.innerHTML += '4.2 No ingresaste números válidos\n\n';
    }
    
    // Ejercicio 4.3
    let numerosCapturados = [];
    let input;
    do {
        input = prompt('Ingresa un número (0 para terminar)');
        if (input && !isNaN(input)) {
            numerosCapturados.push(parseFloat(input));
        }
    } while (input !== '0' && input !== null);
    
    results.innerHTML += `4.3 Números capturados:\n${numerosCapturados.join(', ')}\n\n`;
    
    // Ejercicio 4.4
    let palabrasCapturadas = [];
    let palabra;
    do {
        palabra = prompt('Ingresa una palabra o letra (deja vacío para terminar)');
        if (palabra) {
            palabrasCapturadas.push(palabra);
        }
    } while (palabra !== null && palabra !== '');
    
    results.innerHTML += `4.4 Palabras concatenadas:\n${palabrasCapturadas.join(' ')}\n\n`;
    
    // Ejercicio 4.5
    let diaSemana;
    do {
        diaSemana = prompt('Ingresa un día de la semana (domingo para terminar)').toLowerCase();
        switch(diaSemana) {
            case 'lunes':
                alert('¡Ánimo, comienza la semana!');
                break;
            case 'martes':
                alert('¡Sigue adelante!');
                break;
            case 'miércoles':
            case 'miercoles':
                alert('¡Mitad de semana!');
                break;
            case 'jueves':
                alert('¡Casi es viernes!');
                break;
            case 'viernes':
                alert('¡Feliz viernes!');
                break;
            case 'sábado':
            case 'sabado':
                alert('¡Disfruta tu fin de semana!');
                break;
            case 'domingo':
                alert('Ve a descansar');
                break;
            default:
                alert('Día no reconocido');
        }
    } while (diaSemana !== 'domingo' && diaSemana !== null);
    
    results.innerHTML += '4.5 Ver resultados en los alerts\n';
}