<script setup>
import {ref, onMounted } from 'vue';
import	Authenticator from '../services/auth.service'

let data=ref("")
let donne = ref("")
let infos = ref("")
import { useProjectStore } from '../stores/projectStore'
import router from '@/router';

const projectStore = useProjectStore();
const { getProject } = projectStore
onMounted(()=>{
    if(!localStorage.getItem('user')){
        router.push("/")
    }
    data = getProject()
    data.then(resultat => {
       donne.value = resultat
        console.log(resultat.data);
        console.log(donne);
        console.log((donne._rawValue[0].name))
        console.log((donne._rawValue[0].id))
        console.log((donne._rawValue[0].description))
       console.log(donne._rawValue[0].name)
       
       
       
    })
    
})


</script>
<template>
    <h1>{{ donne[0] }}</h1>
    <button @click="Authenticator.logout"> Log Out</button>
</template>

<style scoped>



</style>