<template>
    <div>
        <h1>Sozlamalar</h1>
        <div class="menu">
            <router-link v-for='(m,i) of menu' :key='i' :to="'/settings'+m.link" active-class="active" exact>
            {{m.title}}
            </router-link>
        </div>
        <hr>
        <router-view></router-view>

    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                {title:'Mutaxassislik ro`yhati',link:'/spec'},
                
            ]
        }
    },
}
</script>

<style>

</style>