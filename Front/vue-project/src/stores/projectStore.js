import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';
import { defineStore } from "pinia";
const API_URL = 'http://localhost:3000/api/project';

const token = JSON.parse(localStorage.getItem('user')).token;
const config = {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": 'application/JSON' }
  
    
};

export const useProjectStore = defineStore('characters', () => {

  const data = ref('');
  let jsonData = ref('')

  async function getProject() {

      try {
        const response = await axios.get(API_URL + '/',config) 
        console.log(response.data);
        if (!response) {
          throw new Error('Erreur lors du chargement des données');
        }
        jsonData = response.data;
        console.log(jsonData);
        return jsonData
        
    
        
       
      } catch (error) {
        console.error('Erreur:', error);
      }
      
    }
    
    console.log(jsonData);
    return {jsonData,getProject}
})

  
