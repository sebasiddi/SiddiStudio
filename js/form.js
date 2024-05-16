
/* function notificacionEnvio(){
    Toastify({
      text: "Message sent",
      duration: 2500,
      close: true,
      gravity: "top",
      position: "right", 
      stopOnFocus: true, 
    }).showToast();
  } */
const $form = document.querySelector('#form')

$form.addEventListener('submit',handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers:{
            'Accept':'application/json'
        }
    })
    if (response.ok){
        this.reset()
        alert("Message Sent: Your message has been successfully sent.")
    }
}