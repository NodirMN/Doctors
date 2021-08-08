<template>
  <div id="app">
        <div class="menu">
          <router-link v-for='(m,i) of menu' :key='i' :to=m.link active-class="active" exact>{{m.title}}</router-link>
        </div>
        <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
    data(){
    return {
      menu: [
        {title:'Home',link:'/'},
        {title:'List',link:'/list'},
        {title:'New Doctor',link:'/newdoctor'},
      ]
    }
  },
}
</script>

<style>
  .menu {
    display: flex;
    justify-content: center;
  }
  .menu a {
    color:#000;
    text-decoration: none;
    margin: 0px 10px;
  }
  .menu a.active{
    text-decoration: underline;
  }
</style>
