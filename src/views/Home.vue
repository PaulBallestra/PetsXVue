<template>
  <div class="home">

    <!--  -->
    <PetsForm></PetsForm>

    <!-- Component Dashboard -->
    <Dashboard></Dashboard>

  </div>
</template>

<script>
  // @ is an alias to /src
  //import HelloWorld from '@/components/HelloWorld.vue'
  import Dashboard from '@/components/Dashboard.vue';
  import PetsForm from '@/components/PetsForm.vue';

  export default {
    name: 'Home',
    components: {
      Dashboard,
      PetsForm
    }
  }
</script>
