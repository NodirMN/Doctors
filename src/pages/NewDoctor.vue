<template>
    <div>
        <h1>Yangi shifokor</h1>
        <div class="info__box" v-show='active'>Ma'lumot qo'shildi</div>
        <div class="row">
            <div class="col-4">
                <label>Ism sharif</label><input type="text" v-model='doctor.name'>
            </div>
            <div class="col-4">
                <label>Tugilgan sana</label><input type="date" v-model='doctor.date'>
            </div>
            <div class="col-4">
                <label>Tugilgan joy</label><input type="text" v-model='doctor.place'>
            </div>
            <div class="col-4">
                <label>Mutaxassisligi</label>
                <select v-model='doctor.spec'>
                    <option v-for='spec of specs' :key='spec.id' :value="spec.id">{{spec.title}}</option>
                </select>
            </div>
            <div class="col-4"><label>Grafik vaqti</label><input type="time" v-model='doctor.time'></div>
            <div class="col-4">
                <label>Xona raqami</label>
                <input type="number" v-model='doctor.room'>
                <div class="msg error" v-show="roomMsg">Bu xona band</div>
            </div>
            <div class="col-4"><label>Rasm url</label><input type="url" v-model='doctor.img'></div>
            <div class="col-12"><vue-editor v-model="doctor.text"></vue-editor></div>
        </div>
        <button @click='add()'>Qo'shish</button>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor"; 
//npm install vue2-editor
import axios from 'axios'
export default {
    components: {
        VueEditor
    },
    data() {
        return {
            doctor:{},
            active:false,
            roomMsg:false,
            specs:[]
        }
    },
    methods:{
        add(){
            axios.get('http://localhost:3000/doctors?room='+this.doctor.room).then(response => {
                if (response.data.length>0){
                    this.roomMsg = true
                } else {
                    axios.post('http://localhost:3000/doctors',this.doctor)
                    .then(response => { 
                        console.log(response.data) 
                        this.active = true 
                        this.doctor = {}
                        setTimeout(()=>{
                            this.active = false 
                            this.$router.push('/list')
                        },5000)
                    })        
                }
            })

            
        }
    },
    created() {
        axios.get('http://localhost:3000/spec').then(response => { this.specs = response.data })
    },
}
</script>

<style>

</style>