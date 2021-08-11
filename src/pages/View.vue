<template>
    <div>
        <h1>{{doctor.name}} Shaxsiy ma'lumotlar</h1>
            <div class="btns"> <router-link :to="'/edit/'+doctor.id" class="icon-btn"><i class="fas fa-edit"></i></router-link>
                <button class="del" @click='del(index)'> <i class="fas fa-trash"></i> </button>
            </div>
            <div class="personal">
                <div class="img" :style="'background-image:url('+doctor.img+')'">
                    <div class="info">
                        <div class="info__title">Ism-sharifi</div>
                        <div class="info__value">{{doctor.name}}</div>
                        <div class="info__title">Muttaxasisligi</div>
                        <div class="info__value">{{doctor.spec}}</div>
                        <div class="info__title">Tug'ilgan sana</div>
                        <div class="info__value">{{doctor.date}}</div>
                        <div class="info__title">Tug'ilgan joy</div>
                        <div class="info__value">{{doctor.place}}</div>
                        <div class="info__title">Grafik vaqti</div>
                        <div class="info__value">{{doctor.time}}</div>
                        <div class="info__title">Xona</div>
                        <div class="info__value">{{doctor.room}}</div>
                    </div>
                    <div class="personal__text">
                        <div class="info__title"> Qo'shimcha malumot</div>
                        <div v-html="doctor.text"></div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            doctor:{},
            id: this.$router.currentRoute.params['id']
        }
    },
    methods:{
            del(){
            if(confirm('Qaroringiz aniqmi?')){

                axios.delete('http://localhost:3000/doctors/'+this.id).then(response=>{
                    if(response.status == 200){
                        this.$router.push('/list')
                    }
                })
            }
        }
    },
    created(){
        axios.get('http://localhost:3000/doctors/'+this.id).then(response=>{this.doctor = response.data})
    }
}
</script>

<style>
*{
    box-sizing: border-box;
}
.btns{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
.btns a,
.btns button{
    background: unset;
    margin: 0% 5px;
    border: 0;
    color: #000;
}
h1{
    text-align: center;
    margin-bottom: 10px;
}
.personal{
    max-width: 800px;
    margin: auto;;
    display: flex;
    flex-wrap: wrap;
}
.personal .img{
    flex-basis:50% ;
    height: 350px;
    background-size: cover;
}
.personal .info{
    flex-basis: 50%;
    padding-left: 10px;
}
.info__title{
    font-size: 18px;
    font-weight: bold;
}
.info__value{
    font-size: 16px;
    margin-bottom: 20px;
}
.personal__text {
    flex-basis: 100%;
    padding-top: 20px;
}

</style>