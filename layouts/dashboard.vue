<template>
    <div class="wrapper" >
        <f-header noFixed="true" />
        <div class="admin-container">
            <div class="dash-sidebar">
                <admin-sidebar/>
            </div>
            <div class="dash-container">
                <nuxt/>
            </div>
            <notification />
            <alert />
        </div>
    </div>
</template>

<script>
  import FHeader from '~/components/Header'
  import FFooter from '~/components/Footer'
  import AdminSidebar from '~/components/Dashboard/sidebar'
  import 'normalize.css'
  import Notification from '~/components/Dashboard/notification'
  import Alert from '~/components/Dashboard/alert'
  export default {
    components: {
      FHeader,
      FFooter,
      AdminSidebar,
      Notification,
      Alert
    },
    computed:{
      message(){
        return this.$store.state.message
      }
    },
    watch:{
      $route(){
        if(this.message) {
          this.$store.dispatch('setMessage', this.message)
          this.$store.dispatch('showModal', 'message')
        }
      }
    },
  }
</script>

<style lang="stylus" scoped>
    @import '../assets/css/main.styl'

    .dash-container
        margin-top 110px
        margin-left 350px
        padding 30px
        min-height: calc(100vh - 110px);
        width calc(100% - 350px)
        box-sizing border-box
    .wrapper
        width 100%
        background #f0f4f8
    .admin-container
        display flex
        flex-flow row wrap
        justify-content flex-start
    @media only screen and (max-width: 1230px)
        .dash-container
            margin 0
            margin-top 60px
            width 100%



</style>
