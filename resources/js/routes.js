//Componentes principales
const Home = ()=> import('./components/Home.vue');
const Contacto = ()=> import('./components/Contacto.vue');

//Componentes para el blog
const Mostrar = ()=> import('./components/blogs/Mostrar.vue');
const Editar = ()=> import('./components/blogs/Editar.vue');
const Crear = ()=> import('./components/blogs/Crear.vue');

/* const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]
 */

export const routes = [
    {
        name:'home',
        path:'/',
        component:Home, 
    },
    {
        name:'contacto',
        path:'/contacto',
        component:Contacto,
    },
    {
        name:'mostrarBlogs',
        path:'/blogs',
        component:Mostrar,
    },
    {
        name:'crearBlog',
        path:'/blogs',
        component:Crear,
    },
    {
        name:'editarBlog',
        path:'/editar/:id',
        component:Editar,
    },

]
