<template>
    <div>
        <h1>One Doctor page</h1>
            <h3>{{id}}</h3>
            <h3>{{doctor.name}}</h3>
            <h3>{{doctor.place}}</h3>
            <h3>{{doctor.data}}</h3>
            <h3>{{doctor.time}}</h3>
            <h3>{{doctor.room}}</h3>
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
    created(){
        axios.get('http://localhost:3000/doctors/'+this.id).then(response=>{this.doctor = response.data})
    }
}
</script>

<style>

</style>