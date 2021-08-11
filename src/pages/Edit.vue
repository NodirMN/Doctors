<template>
    <div>
            <h1>New Doctor</h1>
    <div  class="info__box" v-show='active'>Ma'lumot qo'shildi</div>
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
        <div class="col-4">
            <label>Rasm url</label>
            <input type="url" v-model='doctor.img'>
        </div>
        <div class="col-12">
            <vue-editor v-model='doctor.text'> </vue-editor>
        </div>
        </div>
        <button class="add" @click='add()'>Change</button>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import axios from 'axios'
export default {
    components: {
        VueEditor
    },
    data() {
        return {
            active:false,
            doctor:{},
            id: this.$router.currentRoute.params['id']
        }
    },
    methods: {
        add(){
            axios.put('http://localhost:3000/doctors/'+this.id,this.doctor).then(response=>{
                this.active = true
                this.doctor = {}
                setTimeout(()=>{
                this.active = false
                if(response.status == 200){
                    this.$router.push('/view/'+this.id)
                }
            },5000)
            })
        }
    },
    created(){
        axios.get('http://localhost:3000/doctors/'+this.id).then(response=>{this.doctor = response.data})
    }
}
</script>

<style>

</style>