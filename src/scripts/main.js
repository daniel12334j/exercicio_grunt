
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('multiplicador').addEventListener('submit',function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-multiplicar').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = numeroMaximo * 2;

        document.getElementById('numero1').innerText = numeroMaximo;
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'flex';
        document.querySelector('.resultado').style.justifyContent = 'center';
        document.querySelector('.resultado-completo').style.fontSize = '3em';

        
    })
})