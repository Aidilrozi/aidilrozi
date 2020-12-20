<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{asset('css/w3.css')}}">
        <link href={{asset('css/app.css')}} rel="stylesheet"/> 
        <link href={{asset('particle-js/css/style.css')}} rel="stylesheet"/> 
        
        <title>Mohamad Aidilrozi</title>
       <style>

        .tinted{
        
        width: 100%;
        height: 800px;
        background-color:black;
        opacity: 0;
        
        
        }
        .card{
        margin: 0 auto; /* Added */
        float: none; /* Added */
        margin-bottom: 10px; /* Added */
        width: 70%;
        border-color: #eeeeee;
    border-left-width: 2px;
    border-style: solid;
    border-top-width: 2px;
    text-align: center;
    background-color: white;
    border-radius: 15px;
    padding: 1em;
    height: 100%;

        }
        .card-body{
          max-height:200px;
        }
        .outer-container {
          position: relative;
        }
      
        .outer-container .your-content {
          position: relative;
          z-index: 1;
          background-color: transparent;
        }
   

       </style>
    </head>
    <body>
    <div class="outer-container">
        <!-- Particle JS -->
        <div id="particles-js"></div>
       


        <!-- Page Content -->
        <div class="w3-content w3-padding your-content" style="max-width:1564px">
                <!-- Navbar (sit on top) -->
        <div class="w3-top">
            <div class="w3-bar w3-black w3-wide w3-padding w3-card">
                <a href="#home" class="w3-bar-item w3-button w3-text-white"><b>AR</b> Developer</a>
                <!-- Float links to the right. Hide them on small screens -->
                <div class="w3-right w3-hide-small">
                <a href="#projects" class="w3-bar-item w3-button w3-text-white">Projects</a>
                <a href="#about" class="w3-bar-item w3-button w3-text-white">About</a>
                <a href="#contact" class="w3-bar-item w3-button w3-text-white">Contact</a>
                </div>
            </div>
        </div>
      
        <!-- Header -->
        <header class="w3-display-container w3-content w3-wide fade-in" style="max-width:1500px;" id="home">    
            <div class="tinted"> </div>
             <div class="w3-display-middle w3-margin-top w3-center">
                <img class="img-responsive img-round-me" src="home/media/profile.jpg" alt="">
                <h1 class="w3-xxlarge w3-text-white main-text"><span class="w3-padding w3-black w3-opacity-min"><b>Hi there!</b></span> <span class="w3-hide-small w3-text-light-grey">Welcome...</span></h1>
            </div> 
        </header>
            <!-- Project Section -->
           
            <!-- Project -->
            <div id="app"></div>
            <!-- About Role -->
            {{-- <div id='about'></div> --}}
            <!-- Contact Form -->
            {{-- <div id='contact-form'></div> --}}
        </div>
        </div>
        <!-- Footer -->
        <footer class="w3-center w3-black w3-padding-16">
        <p>Made by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">AR</a></p>
        </footer>
    </body>
    <script type="text/javascript" src={{asset('js/Main.js')}}></script>
    <!-- scripts -->
    <script src={{asset('js/particles.js')}}></script>
    <script src={{asset('particle-js/js/app.js')}}></script>
    <!-- stats.js -->
<script src={{asset('particle-js/js/lib/stats.js')}}></script>

    <script type="text/javascript">
    const text = document.querySelector(".main-text");

var n = 0;
let timer = setInterval(onTick, 2500);

function onTick() {
  if (n === 0) {
    text.innerHTML = "<span class=\"w3-padding w3-black w3-opacity-min\"><b>I'm</b></span> <span class=\"w3-hide-small w3-text-light-grey\">a Web Developer</span>";

    n = 1;
    return;
  }
  if (n === 4) {
    text.innerHTML = "<span class=\"w3-padding w3-black w3-opacity-min\"><b>I'm</b></span> <span class=\"w3-hide-small w3-text-light-grey\">a Programmer</span>";


    n = 1;
    return;
  } else if (n == 1) {
    text.innerHTML = "<span class=\"w3-padding w3-black w3-opacity-min\"><b>I'm</b></span> <span class=\"w3-hide-small w3-text-light-grey\">a Mobile Developer</span>";

    n = 2;
    return;
  } else if (n == 2) {
    text.innerHTML = "<span class=\"w3-padding w3-black w3-opacity-min\"><b>I'm</b></span> <span class=\"w3-hide-small w3-text-light-grey\">an Entreprenuer</span>";

    n = 3;
    return;
  } else if (n == 3) {
    text.innerHTML = "<span class=\"w3-padding w3-black w3-opacity-min\"><b>I'm</b></span> <span class=\"w3-hide-small w3-text-light-grey\">Aidil</span>";

    n = 4;
    return;
  }
}
    
    </script>
</html>
