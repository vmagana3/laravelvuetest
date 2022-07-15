<script>

export default {

  data() {
    return {
      email:'',
      password:'',
    }
  },
    
  methods: {
    Test(event){
        console.log(event);
        console.log("Works function");
    },
  },

   mounted() {
    console.log(`New Form montado`);
  }

}
</script>
<template>
    
</template>
