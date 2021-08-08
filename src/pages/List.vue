<template>
    <div>
    <h1>All Doctors pages</h1>
    <table border="1" width='100%' cellspacing='0' cellpadding='5' >
        <tr>
            <th>ID</th>
            <th>Ism</th>
            <th>Mutaxassisligi</th>
            <th>Batafsil</th>
            <th>O'chirish</th>
        </tr>
        <tr v-for='(doctor,index) of doctors' :key='index'>
            <td>{{doctor.id}}</td>
            <td>{{doctor.name}}</td>
            <td>{{doctor.spec}}</td>
            <td><router-link :to="'/view/'+doctor.id">Batafsil</router-link></td>
            <td><button class="del" @click='del(index)'>Delet</button></td>
        </tr>
    </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            doctors:[]
        }
    },
    methods:{
        del(index){
            axios.delete('http://localhost:3000/doctors/'+this.doctors[index].id).then(response=>{
                console.log(response.data)
                this.doctors.splice(index,1)
            })
        }
    },
    created(){
        axios.get('http://localhost:3000/doctors').then(response =>{this.doctors = response.data})
    }
}
</script>

<style>
.del{
    background: rgb(255, 0, 0);
    border: 0;
    padding: 12px;
    border-radius: 10px;
    text-transform: uppercase;
    cursor: pointer;
}
</style>