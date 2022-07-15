require('./bootstrap');

import Vue from 'vue';

//Import each View
import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
import Blogs from './components/Blogs.vue';
import Contacto from './components/Contacto.vue';
import Form from './components/Form.vue';
import NewForm from './components/NewForm.vue';

//Validate HTML element
if(document.getElementById('menu')){
    new Vue({
        render: h => h(Menu)
      }).$mount("#menu");
}

if(document.getElementById('homecomponent')){
    new Vue({
        render: h => h(Home)
      }).$mount("#homecomponent");
}


if(document.getElementById('blogscomponent')){
    new Vue({
        render: h => h(Blogs)
      }).$mount("#blogscomponent");
}

if(document.getElementById('contactocomponent')){
    new Vue({
        render: h => h(Contacto)
      }).$mount("#contactocomponent");
}


if(document.getElementById('formcomponent')){
    new Vue({
        render: h => h(Form)
      }).$mount("#formcomponent");
}

/* if(document.getElementById('newform')){
    new Vue({
        render: h => h(NewForm)
      }).$mount("#newform");
} */

/* if(document.getElementById('menu')){
    const app = createApp(Menu);
    app.mount('#menu');
};

if(document.getElementById('homecomponent')){
    const app = createApp(Home);
    app.mount('#homecomponent');
};

if(document.getElementById('blogscomponent')){
    const app = createApp(Blogs);
    app.mount('#blogscomponent');
};

if(document.getElementById('contactocomponent')){
    const app = createApp(Contacto);
    app.mount('#contactocomponent');
};

if(document.getElementById('formcomponent')){
    const app = createApp(Form);
    app.mount('#formcomponent');
}; */















