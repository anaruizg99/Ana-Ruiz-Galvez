<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="mediaqueries.css" />
    <style>
      .column {
        float: left;
        width: 30%;
        padding: 10px;
        height: 400px; /* Should be removed. Only for demonstration */
      }

        /* Clear floats after the columns */
      .row:after {
      content: "";
      display: table;
      clear: both;
      }
      .gender-options label{
        /* display: flex; */
        align-items: center;
      }
      .main {
        width: 700;
        margin: auto;
        padding: 30px;
        text-align: center;
      }

  </style>
  </head>
  <body>
    <nav id="desktop-nav">
      <div class="logo">Girls Gain</div>
      <div>
        <ul class="nav-links">
          <li><a href="#Get Started">Get Started</a></li>
          <li><a href="#Connect">Connect</a></li>
        </ul>
      </div>
    </nav>
    <nav id="hamburger-nav">
      <div class="logo">Girls Gain</div>
      <div class="hamburger-menu">
        <div class="hamburger-icon" onclick="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="menu-links">
          <li><a href="#Get Started" onclick="toggleMenu()">Get Started</a></li>
          <li><a href="#Connect" onclick="toggleMenu()">Connect</a></li>
        </div>
      </div>
    </nav>
   
    <section id="intro">
       <div class="section__pic-container">
        <img src="./images/introimage.png" >
        </div>
   
    </section>
    <section id="Get Started">
      <p class="section__text__p1">Personalized Work Out Routine</p>
      <h1 class="title">Get Started</h1>
 
      <div class="main">
        <form id="calorieCalculatorForm">
            <label for="weight">Weight (lb):</label>
            <input type="number" id="weight">
            <br>
            <label for="height_ft">Height - Feet:</label>
            <input type="number" id="height_ft">
            <br>
            <label for="height_in">Height - Inches:</label>
            <input type="number" id="height_in">
            <br>
            <label for="age">Age:</label>
            <input type="number" id="age">
            <br>
            <label>Gender:</label>
            <!-- <div class = "gender-options"> -->
                <input type = "radio" name = "gender" id = "Male" value = "M">
                <label for = "male" >Male</label>
                <input type = "radio" name = "gender" id = "Female" value = "F">
                <label for = "female" >Female</label>
            <br>
            <br>
            <button type="button" onclick="calculateCalories()">Calculate</button>
        </form>
 
        <div id="result"></div>
 
        <script>
            function calculateCalories() {
                var weight = parseFloat(document.getElementById('weight').value);
                var height_ft = parseInt(document.getElementById('height_ft').value);
                var height_in = parseInt(document.getElementById('height_in').value);
                var age = parseInt(document.getElementById('age').value);
                var gender = document.querySelector('input[name = "gender"]:checked').value;
 
                var height_cm = (height_ft * 30.48) + (height_in * 2.54);
                var weight_kg = (weight * 0.453592);
 
 
                var calorie_calc;
 
                if (gender === "F") {
                    calorie_calc = 65.51 + (9.563 * weight) + (1.850 * height_cm) - (4.676 * age);
                } else {
                    calorie_calc = 66.47 + (13.75 * weight) + (5.003 * height_cm) - (6.755 * age);
                }
 
                document.getElementById('result').innerHTML = "Calorie Calculation: " + calorie_calc.toFixed(2) + " calories";
            }
        </script>
            <br>
            <div class="row">
                <div class="column" style="background-color:white;">
                <img src="./images/download.jpeg"
                    width = "200"
                    height = "175">
                  <h3>If you want to focus on building leg muscle</h3>
                  <p>Click below to find the best workout routine for leg day!</p>
                  <a href="legday.html" target="_blank">
                    <button>Click Me!</button>
                  </a>

                </div>
                <div class="column" style="background-color:white;">
                  <img src="./images/arm.jpeg"
                    width = "200"
                    height = "175">
                  <h3>If you want to focus on building arm muscle</h3>
                  <p>Click below to find the best workout routine for arm day!</p>
                  <a href="arm.html" target="_blank">
                    <button>Click Me!</button>
                  </a>
                </div>
                <div class="column" style="background-color:white;">
                    <img src="./images/abs.jpeg"
                        width = "200"
                        height = "175">
                    <h3>If you want to focus on building abs</h3>
                    <p>Click below to find the best workout routine for abs!</p>
                    <a href="abs.html" target="_blank">
                      <button>Click Me!</button>
                    </a>
                </div>
              </div>    
    
    
    
    
    </section>
    <section id="Connect">
      <p class="section__text__p1">Add Your Favorite Work Out Songs</p>
      <h1 class="title">Share with Friends!</h1>

      
      <br>
      <iframe src="https://open.spotify.com/embed/playlist/5Y2hhgRIv4HwUpgKuwqcYz?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
     </label>


    </section>
    <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Us</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
    
          <p><a href="mailto:examplemail@gmail.com">girlsgain@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
        </div>
      </div>


    </section>
    <footer>
      <nav>
        <div class="nav-links-container">
          <ul class="nav-links">
            <li><a href="#Get Started">Get Started</a></li>
            <li><a href="#Connect">Connect</a></li>
          </ul>
        </div>
      </nav>
    </footer>
    <script src="script.js"></script>
  </body>
</html>
