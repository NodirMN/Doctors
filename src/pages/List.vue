<template>
    <div>
        <h1>Barcha shifokorlar ro'yhati</h1>
        <router-link class="btn" to="/newdoctor">Yangi shifokor</router-link>
        <table border='1' width='100%' cellspacing='0' cellpadding='5'>
            <tr>
                <th>ID</th>
                <th>Ism</th>
                <th>Mutaxassisligi</th>
                <th></th>
            </tr>
            <tr v-for='(doctor,index) of doctors' :key='index'>
                <td>{{index+1}}</td>
                <td>{{doctor.name}}</td>
                <td>{{getSpec(doctor.spec)}}</td>
                <td>
                    <router-link :to="'/view/'+doctor.id" class="icon-btn">
                        <i class="fas fa-eye"></i>
                    </router-link>
                    <router-link :to="'/edit/'+doctor.id" class="icon-btn">
                        <i class="fas fa-edit"></i>
                    </router-link>
                    <button @click='del(index)'>
                        <i class="fas fa-trash"></i>
                    </button></td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            doctors:[],
            specs:[]
        }
    },
    methods: {
        getSpec(id){  // 1
            let title = ''
            this.specs.find(spec => {
                if (spec.id == id){
                    title = spec.title 
                }
            })
            return title 
        },
        del(index){
            if (confirm('Qaroringiz aniqmi?')){
                axios.delete('http://localhost:3000/doctors/'+this.doctors[index].id).then(response => { 
                    console.log(response.data)
                    this.doctors.splice(index,1)
                })
            }
        }
    },
    created(){
        axios.get('http://localhost:3000/doctors').then(response => { this.doctors = response.data})
        axios.get('http://localhost:3000/spec').then(response => { this.specs = response.data })
    }
}
</script>

<style scoped>
    button {
        background: unset;
        border:0;
        cursor: pointer;
    }
    .icon-btn{
        color: #000;
        margin-right: 10px;
    }
    button:hover{
        color: red;
    }
    .icon-btn:hover {
        color: rgb(247, 165, 44);
    }
    table tr td:last-child{
        width: 100px;
    }
</style>