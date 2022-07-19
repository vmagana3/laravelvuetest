<script>

export default {

  data() {
    return{

    }
  },
    
  methods: {
    payFunction(){
        console.log("Payed function works");
        
    },
  },

   mounted() {
    console.log(`Componente payment montado`);
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/';
    script.onload = ()=>
  }

}
</script>
<template>
    <div>
        <h1>Payment Component</h1>
        <button @click="payFunction" class="btn btn-success ml-5">Pay</button>
    </div>
</template>