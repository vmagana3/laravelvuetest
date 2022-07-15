<template>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Test App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">                                                
                    <li class="nav-item">                                             
                        <a exact-active-class="active" href="/" class="nav-link active" aria-current="page">Home</a>
                    </li>
                    <li class="nav-item">
                        <a  exact-active-class="active" href="/blogs" class="nav-link" aria-current="page">Blogs</a>
                    </li>
                    <li class="nav-item">
                        <a  exact-active-class="active" href="/contacto" class="nav-link" aria-current="page">Contacto</a>    
                    </li>
                    <li class="nav-item">
                        <a  exact-active-class="active" href="/form" class="nav-link" aria-current="page">Form</a>    
                    </li>
                    <li class="nav-item">
                        <a  exact-active-class="active" href="/newform" class="nav-link" aria-current="page">NewForm</a>    
                    </li>
                </ul>                    
            </div>
        </div>
    </nav>    
</template>