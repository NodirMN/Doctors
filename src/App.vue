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
  *{
    box-sizing: border-box;

}
    .row{
        display: flex;
        flex-wrap: wrap;
        margin-left: -15px;
        margin-right: -15px;
    }
    .col-12{
        flex-basis: 100%;
        max-width: 100%;
        width: 100%;
        padding: 15px;
    }
    .col-4{
        flex-basis: 33.333%;
        max-width:  33.333%;
        width:  33.333%;
        padding: 15px;
        position: relative;
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
        color: #e7e7e7;
        padding: 12px;
        border-radius: 10px;
        text-transform: uppercase;
        cursor: pointer;
    }
    .info__box {
      position: fixed;
      background-color: rgb(62, 192, 22);
      color: #e7e7e7;
      border-radius: 10px;
      padding: 20px;
      right: 15px;
      top: 15px;
    }
</style>
