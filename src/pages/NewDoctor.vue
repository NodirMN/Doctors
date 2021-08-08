<template>
<div>
    <h1>New Doctor</h1>
    <div  class="info" v-show='active'>Ma'lumot qo'shildi</div>
    <div class="row">
        <div class="col-4">
            <label >Ism sharif</label>
            <input type="text" v-model='doctor.name'>
        </div>
        <div class="col-4">
            <label >Tug'ilgan sana</label>
            <input type="date" v-model='doctor.data'>
        </div>
        <div class="col-4">
            <label >Tug'ilgan joy</label>
            <input type="text" v-model='doctor.place'>
        </div>
        <div class="col-4">
            <label >Mutaxassisligi</label>
                <select v-model="doctor.spec">
                        <option value="Nevrolog">Nevrolog</option>
                        <option value="Xirurg">Xirurg</option>
                        <option value="Terapeft">Terapeft</option>
                </select>
    </div>
        <div class="col-4">
            <label >Grafik vaqtiy</label>
            <input type="time" v-model='doctor.time'>
        </div>
        <div class="col-4">
            <label >Xona raqami</label>
            <input type="number" v-model='doctor.room'>
        </div>
        </div>
        <button class="add" @click='add()'>Add</button>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            doctor:{},
            active:false,
        }
    },
    methods:{
        add(){
            axios.post('http://localhost:3000/doctors',this.doctor)
            .then(response=>{
                console.log(response.data)
                this.active = true
                this.doctor = {}
                setTimeout(()=>{
                this.active = false
            },4000)
            })
        }
    }
}
</script>

<style>
*{
    box-sizing: border-box;

}
    .row{
        display: flex;
        flex-wrap: wrap;
        margin-left: -15px;
        margin-right: -15px;
    }
    .col-4{
        flex-basis: 33.333%;
        max-width:  33.333%;
        width:  33.333%;
        padding: 15px;
    }
    select,
    input{
        display: block;
        width: 100%;
        border-radius: 10px;
        padding: 10px;
        border: 1px solid #e7e7e7;
    }
    .add{
        background-color: rgb(62, 192, 22);
        border: 0;
        padding: 12px;
        border-radius: 10px;
        text-transform: uppercase;
        cursor: pointer;
    }
    .info{
    top: 0;
    position: fixed;
    background-color:rgb(62, 192, 22);
    padding: 12px;
}
    
</style>