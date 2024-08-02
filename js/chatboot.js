document.getElementById('send-btn').addEventListener('click',sendMessage);
document.getElementById('user-input').addEventListener('keypress',function(e){
    if(e.key ==='Enter'){
        sendMessage();
    }
});
function sendMessage(){
    const inputField = document.getElementById('user-input');
    const userInput = inputField.value;
    if(userInput.trim() !== ''){
        displayMessage(userInput,'user');
        inputField.value = '';
        getBotResponse(userInput);
    }
}
function displayMessage(message,sender){
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message',sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
function getBotResponse(userInput){
    let botResponse = '';
    if(userInput.toLowerCase().includes('hola')){
        botResponse = '!Hola! ¿En que te puedo ayudar?';
    }
    else if(userInput.toLowerCase().includes('ayuda')){
        botResponse = 'Necesitas ayuda en programacion? elige el lenguaje: ';
    }
    else if(userInput.toLowerCase().includes('javascript')){
        botResponse = 'Javascript es un lenguaje para desarrollo web enfocado en el FrontEnd: ';
    }
    else if(userInput.toLowerCase().includes('c++')){
        botResponse = 'C++ es un lenguaje orientado a objetos, excelente para aprender a programar: ';
    }
    else if(userInput.toLowerCase().includes('adios')){
        botResponse = 'Adios que tengas un lindo dia: ';
    }
    else{
        botResponse = 'Lo siento no entiendo tu pregunta.';
    }
    setTimeout(()=>{
        displayMessage(botResponse,'bot');
    }, 1000);

}
