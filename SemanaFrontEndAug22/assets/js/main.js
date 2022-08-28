
import {subscribeToHellfire } from "./firebase/hellfire-club.js"

const txtName = document.getElementById('txtName');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const txtEmail = document.getElementById('txtEmail');
const btnSubscribe = document.getElementById('btnSubscribe');


btnSubscribe.addEventListener('click' ,async () =>{
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    //Salvar no BD
    const subscriptionId =  await subscribeToHellfire(subscription)
    console.log(`Inscrito com sucesso ${subscriptionId}`)

    //apaga os dados do form depois que aperta 'me inscrever'
    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''
})


