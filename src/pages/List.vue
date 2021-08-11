<template>
    <div>
    <h1>All Doctors pages</h1>
    <table border="1" width='100%' cellspacing='0' cellpadding='5' >
        <tr>
            <th>ID</th>
            <th>Ism</th>
            <th>Mutaxassisligi</th>
            <th></th>
        </tr>
        <tr v-for='(doctor,index) of doctors' :key='index'>
            <td>{{doctor.id}}</td>
            <td>{{doctor.name}}</td>
            <td>{{doctor.spec}}</td>
            <td>
                <router-link :to="'/view/'+doctor.id" class="icon-btn"><i class="fas fa-eye"></i></router-link>
                <router-link :to="'/edit/'+doctor.id" class="icon-btn"><i class="fas fa-edit"></i></router-link>
            <button class="del" @click='del(index)'> <i class="fas fa-trash"></i> </button></td>
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
            if(confirm('Qaroringiz aniqmi?')){

                axios.delete('http://localhost:3000/doctors/'+this.doctors[index].id).then(response=>{
                    console.log(response.data)
                    this.doctors.splice(index,1)
                })
            }
        }
    },
    created(){
        axios.get('http://localhost:3000/doctors').then(response =>{this.doctors = response.data})
    }
}
</script>


<style scoped>
button{
    background: unset;
    border:0;
    cursor: pointer;
}
button:hover{
    color: crimson;
}
.icon-btn{
    color: #000;
    margin-right: 10px;
}
.icon-btn:hover{
    color: darkorange;
}
table tr td:last-child{
    width: 100px;
}
</style>