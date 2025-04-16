const container = document.querySelector('.container')
const qrcodebtn = document.querySelector('#qr-form button')
const QRinput = document.querySelector('#qr-form input')
const imgQR = document.querySelector('#qr-code img')
// Eventos !
// Gerando código QR
function gerarQRcode(){
    const QRinputValue =  QRinput.value
    if(!QRinputValue) return;
    qrcodebtn.innerText = "gerando código..."
    imgQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${QRinputValue}`

    imgQR.addEventListener('load',()=>{
    container.classList.add('active')
    qrcodebtn.innerText = 'Código criado!'
    })
}

qrcodebtn.addEventListener('click',()=>{
    gerarQRcode()
})

QRinput.addEventListener('keydown',(e)=>{
    if(e.code === 'Enter'){
        gerarQRcode()
    }
})


// Limpando código QR

QRinput.addEventListener('keyup',(e)=>{
    if(!QRinput.value){
         container.classList.remove('active')
    qrcodebtn.innerText = "Gerar QR Code"
    }
})
