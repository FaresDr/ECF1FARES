<script setup>

import { ref } from 'vue';
import Authenticator from "../services/auth.service"
let username = ref("")
let usernameP = ref("")
let password = ref("")
let passwordP = ref("")


function handleInputPwd(event) {

    password = event.target.value;
    
}
function handleInputUser(event) {

    username = event.target.value;
    
}
function handleInputPwdP(event) {

    passwordP = event.target.value;
    
}
function handleInputUserP(event) {

    usernameP = event.target.value;
}



</script>
<template>
    <main>
        <div id="toto">
            <div class="derriere">
                <div class="main">
                    <input type="checkbox" id="chk" aria-hidden="true">

                    <div class="signup">
                        
                            <label for="chk" aria-hidden="true">Inscription</label>
                            <input type="text" name="txt" placeholder="Username" @input="handleInputUserP">
                            <input type="password" name="pswd" placeholder="Password" @input="handleInputPwdP">
                            <button @click="Authenticator.register(usernameP,passwordP)">Inscription</button>
                       
                    </div>

                    <div class="login">
                        
                            <label for="chk" aria-hidden="true">Connexion</label>
                            <input type="text" name="username" placeholder="Username" @input="handleInputUser">
                            <input type="password" name="pswd" placeholder="Password" @input="handleInputPwd">
                            <button class="log" @click="Authenticator.login(username,password)">Connexion</button>
                      
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.derriere {
    position: absolute;


}
main{
    background-color: #000;
}
#toto {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Jost', sans-serif;


}

.main {
    width: 350px;
    height: 500px;

    overflow: hidden;
    background: linear-gradient(to bottom, #0f0c29, #97ce4c, #556B2F);
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
}

#chk {
    display: none;
}

.signup {
    position: relative;
    width: 100%;
    height: 100%;

}

label {
    color: #fff;
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 60px;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
}

input {
    width: 60%;
    height: 20px;
    background: #e0dede;
    justify-content: center;
    display: flex;
    margin: 20px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
}

button {
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #fff;
    background: #573b8a;
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .2s ease-in;
    cursor: pointer;
}

button:hover {
    background: #6d44b8;
}

.login {
    height: 460px;
    background: #eee;
    border-radius: 60% / 10%;
    transform: translateY(-180px);
    transition: .8s ease-in-out;
}

.login label {
    color: #573b8a;
    transform: scale(.6);
}

#chk:checked~.login {
    transform: translateY(-500px);
}

#chk:checked~.login label {
    transform: scale(1);
}

#chk:checked~.signup label {
    transform: scale(.6);
}</style>