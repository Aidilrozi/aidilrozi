<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Mohamad Aidilrozi</title>
        <link href={{asset('css/app.css')}} rel="stylesheet"/> 
    <style>
    #wrapper {
    overflow: hidden;
    z-index:1;
    }

    #app {
        position: absolute;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        
    }
    .tinted{
        
        width: 100%;
        background-color:black;
        min-height: 100vh;
        
        
    }
    .display-middle{
    position: absolute;
    top: 50%;
    left: 50%;
    }
    </style>
    </head>
    <body>
        <!-- Particle js -->
        <div id="particle-js"></div>  
        <!-- Wrapper --> 
        <div id="wrapper"></div>   
    
       
    </body>
    <script type="text/javascript" src={{asset('js/Main.js')}}></script>

</html>
