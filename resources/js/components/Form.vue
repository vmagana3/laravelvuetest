<script>

export default {

  data() {
    return {
      email:'',
      password:'',
    }
  },
    
  methods: {
    test(){
       fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => console.log(json))
    },
    otherTest(){

    },
  },

   mounted() {
    console.log(`Componente montado`);
  }

}
</script>
<template>
    <div class="mt-5 pt-5 d-flex justify-content-center align-items-center">
        <form class="w-50" @submit.prevent>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>            
            <button @click="this.test" type="submit" class="btn btn-primary mt-2">Submit</button>
        </form>
    </div>
</template>
