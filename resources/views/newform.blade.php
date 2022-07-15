@extends('maincomponent')

@section('HomeComponent')
    <div>       
        <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
        <form  id="app" @submit="checkForm" method="post">
            <p>
                <label for="name">Nombre</label>
                <input
                id="name"
                v-model="name"
                type="text"
                name="name"
            >
          </p>
          <button type="submit" class="btn btn-primary mt-2">Submit</button>
        </form>
        <script>            
            var app = new Vue({
                el: '#app',
                data: {
                    title: 'Form in VUE!',
                    name: null,
                },
                methods:{
                    checkForm: function (e) {
                        console.log(this.name);                 
                        if (this.name && this.age) {                                                   
                          return true;
                        }    
                        this.errors = [];
                        if (!this.name) {
                            alert('El nombre es obligatorio.');
                        }
                        e.preventDefault();
                    }
                }
            });
          </script>
    </div>
@endsection

