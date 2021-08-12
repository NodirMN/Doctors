<template>
    <div>
        <h2 class="center">Mutaxassisliklar ro'yhati</h2>
        <div class="info__box" v-show='active'>Ma'lumot qo'shildi</div>
        <div class="info__box" v-show='saveToggle'>Ma'lumot o'zgardi</div>
        <p><b>Yangi Mutaxassislik</b></p>
        <div class="row">
            <div class="col-12">
                <input type="text" v-model='spec.title' placeholder="Mutaxassislik nomi" class="float">
                <button @click="add()" class="btn" v-show='!editBtn'>Qo'shish</button>
                <button @click="save()" class="btn" v-show='editBtn'>Saqlash</button>
            </div>
        </div>
        <table border='1' width='100%' cellspacing='0' cellpadding='5'>
            <tr><th>ID</th><th>Mutaxassislik</th><th></th></tr>
            <tr v-for='(spec,index) of specs' :key='index'>
                <td>{{index+1}}</td><td>{{spec.title}}</td>
                <td><button @click='edit(index)'><i class="fas fa-edit"></i></button>
                    <button @click='del(index)'>
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            specs:[], spec:{}, active:false, editBtn:false,
            editId:0, editIndex:0, saveToggle:false,
        }
    },
    methods:{
        edit(index){
            this.editIndex = index
            this.editId = this.specs[index].id
            this.editBtn = true
            this.spec.title = this.specs[index].title
        },
        save(){
            axios.put('http://localhost:3000/spec/'+this.editId,this.spec).then(response => {
                if (response.status == 200){
                    this.saveToggle = true 
                    this.specs[this.editIndex] = response.data
                    this.spec = {}
                    this.editBtn = false
                    setTimeout(()=>{ this.saveToggle = false },5000)
                }
            })
        },
        del(index){
            if (confirm('Qaroringiz aniqmi?')){
                axios.get('http://localhost:3000/doctors?spec='+this.specs[index].id).then(response => {
                    if (response.data.length>0){
                        alert('Bu mutaxassislik bo`yicha tizimda shifokorlar mavjud bo`lganligi sabab, bu mutaxassislikni o`chira olmaysiz!!!')
                    } else {
                        axios.delete('http://localhost:3000/spec/'+this.specs[index].id).then(response => { 
                            console.log(response.data)
                            this.specs.splice(index,1)
                        })
                    }
                })
            }
        },
        add(){
            axios.post('http://localhost:3000/spec',this.spec).then(response => {
                this.specs.push(response.data)
                this.spec = {}
                this.active = true
                setTimeout(()=>{ this.active = false },5000)
            })
        }
    },
    created(){
        axios.get('http://localhost:3000/spec').then(response => { this.specs = response.data })
    }
}
</script>

<style>

</style>