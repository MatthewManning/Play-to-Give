<!DOCTYPE html>
<html>
  <title>Play to Give</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="default.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
    /*body {font-family: "Lato", sans-serif}*/
    .mySlides {display: none}
  </style>
  <body>
    <!-- Navbar -->
    <div class="top">
      <div class="bar blueberry card">
        <!--<a class="bar-item button padding-large hide-medium hide-large right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>-->
        <a href="#" class="bar-item button hover-apple-core padding-large"><img src="./images/d-pad_example.png" style="max-height:25px"> PLAY TO GIVE</a>
        <a href="#events" class="bar-item button hover-apple-core padding-large hide-small">EVENTS</a>
        <a href="#charities" class="bar-item button hover-apple-core padding-large hide-small">CHARITIES</a>
        <a href="#games" class="bar-item button hover-apple-core padding-large hide-small">GAMES</a>
        <a href="#about" class="bar-item button hover-apple-core padding-large hide-small">ABOUT US</a>
        <a href="#contact" class="bar-item button hover-apple-core padding-large hide-small">CONTACT</a>
        <!--<div class="dropdown-hover hide-small">
          <button class="padding-large button" title="More">MORE <i class="fa fa-caret-down"></i></button>
          <div class="dropdown-content bar-block card-4">
            <a href="#" class="bar-item button">Merchandise</a>
            <a href="#" class="bar-item button">Extras</a>
            <a href="#" class="bar-item button">Media</a>
          </div>
        </div>-->
        <button class="bar-item button padding-large hover-apple-core hide-small right" onclick="document.getElementById('loginModal').style.display='block'">login / sign up</button>
        <!--<a href="#loginModal" class="bar-item button padding-large hover-red hide-small right">login / sign up</a>-->

        <!-- Login / Sign up Modal -->
        <div id="loginModal" class="modal">
          <div class="modal-content animate-top card-4">
            <header class="container blueberry center padding-32">
              <span onclick="document.getElementById('loginModal').style.display='none'"
              class="button blueberry hover-red xlarge display-topright">×</span>
              <h2 class="wide"><i class="fa fa-user margin-right"></i>Login</h2>
            </header>
            <form class="container text-dark-grey">
              <p><label><i class="fa fa-user"></i> Username</label></p>
              <input class="input border" type="text" placeholder="Enter Username or Email Address">
              <p><label><i class="fa fa-key"></i> Password</label></p>
              <input class="input border" type="password" placeholder="Enter Password">
              <button class="button block blueberry hover-apple-core padding-16 section right">LOGIN <i class="fa fa-check"></i></button>
              <p class="left">Not a member? <a href="./register.php" class="text-blue">Sign Up</a></p>
            </form>
          </div>
        </div>

      </div>
    </div>

    <!-- Navbar on small screens -->
    <div id="navDemo" class="bar-block blueberry hide hide-large hide-medium top" style="margin-top:46px">
      <a href="#events" class="bar-item button padding-large">EVENTS</a>
      <a href="#charities" class="bar-item button padding-large">CHARITIES</a>
      <a href="#games" class="bar-item button padding-large">GAMES</a>
      <a href="#about" class="bar-item button padding-large">ABOUT US</a>
      <a href="#contact" class="bar-item button padding-large">CONTACT</a>
    </div>

    <!-- Page content -->
    <div class="content" style="max-width:2000px;margin-top:46px">

      <!-- Automatic Slideshow Images -->
	  <?php
	  $dirname = "images/slideshow/";
	  $images = glob($dirname."*.jpg");
	  foreach($images as $image) {
		  echo '<div class="mySlides display-container center">
					<img src="'.$image.'" style="max-height:540px; max-width:90%; padding:20px">
			    </div>';
	  }
	  ?>
	  
	  <!-- <div class="display-bottommiddle container text-white padding-32 hide-small">
			  <h3>Trevor Project</h3>
			  <p><b>The Trevor Project is....</b></p>
			</div> -->

      <!-- The Events Section -->
      <div class="container content center padding-64" style="max-width:800px" id="events">
        <h2 class="wide">EVENTS</h2>
        <p class="opacity center"><i>Find one near you!</i></p><br>
        <table style="width:80%; max-width:600px; margin: auto" class="table-all white text-grey">
          <?php
		  $servername = "localhost";
		  $username = "root";
		  $dbname = "playtogive_db";
		  
		  $conn = new mysqli($servername, $username, NULL, $dbname);
		  if ($conn->connect_error){
			  die("Connection failure - " . $conn->connect_error);
		  }
		  
		  $sql = "SELECT * FROM events";
		  $result = $conn->query($sql);
		  
		  if ($result->num_rows > 0) {
			while($row = $result->fetch_assoc()) {
				echo "<tr>
					<td style=\"vertical-align: middle; height:50px\">" . $row["location"] . "</td>
					<td style=\"vertical-align: middle; height:50px\"><button class=\"button apricot hover-apple-core right\" style=\"width:70%\">" . $row["date"] . "</button></td>
				</tr>";
				}
			} else {
				echo "<tr>
					<td style=\"vertical-align: middle; height:50px\">No events, check back later!</td>
					</tr>";
			}
			$conn->close();
		  ?>
        </table>
      </div>

      <!-- The Charities Section -->
      <div class="blueberry" id="charities">
        <div class="container content padding-64" style="max-width:90%">
          <h2 class="wide center">CHARITIES</h2>
          <p class="opacity center"><i>Contribute to one of these great organizations!</i></p><br>
          <table class="table-all white text-grey">
			 <?php
			  $servername = "localhost";
			  $username = "root";
			  $dbname = "playtogive_db";
			  
			  $conn = new mysqli($servername, $username, NULL, $dbname);
			  if ($conn->connect_error){
				  die("Connection failure - " . $conn->connect_error);
			  }
			  
			  $sql = "SELECT * FROM charities";
			  $result = $conn->query($sql);
			  
			  if ($result->num_rows > 0) {
				while($row = $result->fetch_assoc()) {
					echo "<tr>
					  <td style=\"vertical-align: middle; text-align:center; height:100px\"><img src=./images/" . $row["picture"] . " style=\"max-width:60%; min-width:30%; max-height:100px\"></td>
					  <td style=\"vertical-align: middle; height:100px\">" . $row["charity"] . "</td>
					  <td style=\"vertical-align: middle; height:100px\"><button class=\"button blueberry hover-apple-core right\">Learn More</button></td>
					  <td style=\"vertical-align: middle; height:100px\"><button class=\"button apricot hover-apple-core right\">Select</button></td>
					</tr>";
					}
				} else {
					echo "<tr>
						<td style=\"vertical-align: middle; height:100px\">No charities, check back later!</td>
						</tr>";
				}
				$conn->close();
			  ?>
          </table>
        </div>
      </div>

      <!-- The Games Section -->
      <div class="container content center padding-64" style="max-width:800px" id="games">
        <h2 class="wide">GAMES</h2>
        <p class="opacity center"><i>Which one will you choose?</i></p><br>
        <table class="table-all white text-grey">
			<?php
			  $servername = "localhost";
			  $username = "root";
			  $dbname = "playtogive_db";
			  
			  $conn = new mysqli($servername, $username, NULL, $dbname);
			  if ($conn->connect_error){
				  die("Connection failure - " . $conn->connect_error);
			  }
			  
			  $sql = "SELECT * FROM games";
			  $result = $conn->query($sql);
			  
			  if ($result->num_rows > 0) {
				while($row = $result->fetch_assoc()) {
					echo "<tr>
						<td style=\"vertical-align: middle; height:100px\"><img src=./images/" . $row["picture"] . " style=\"max-width:267px; max-height:100px\"></td>
						<td style=\"vertical-align: middle; height:100px\">". $row["game"] . "</td>
						<td style=\"vertical-align: middle; height:100px\"><button class=\"button blueberry hover-apple-core right\">Learn More</button></td>
						<td style=\"vertical-align: middle; height:100px\"><button class=\"button apricot hover-apple-core right\">Play</button></td>
					  </tr>";
					}
				} else {
					echo "<tr>
						<td style=\"vertical-align: middle; height:100px\">No games, check back later!</td>
						</tr>";
				}
				$conn->close();
			?>
        </table>
      </div>

      <!-- The About Us Section -->
      <div class="blueberry" id="about">
        <div class="container content padding-64" style="max-width:800px">
          <h2 class="wide center">ABOUT US</h2>
          <p class="opacity center"><i>This is who we are.</i></p><br>
          <p class="center padding-16">
            Play to Give is a not-for-profit whose goal is to provide players
            with a fun gaming experience that also makes a positive impact on
            the world.
            How does this work? Well, we host a variety of games for players to
            enjoy for a small fee which is put into a pot. When players sign up,
            they must pay their fee and register to support the charity of their
            choice.  Then, at the end of the day, the players who have the
            highest scores each receive a portion of the total pot to go to the
            charity that they championed.
          </p>
          <p class="center">
            Pretty cool, huh?
          </p>
        </div>
      </div>

      <!-- The Contact Section -->
      <div class="container content padding-64" style="max-width:800px" id="contact">
        <h2 class="wide center">CONTACT</h2>
        <p class="opacity center"><i>Question? Comment? Here's how to let us know</i></p>
        <div class="row padding-32">
          <div class="col m6 large margin-bottom">
            <i class="fa fa-map-marker" style="width:30px"></i> Nashville, TN, USA<br>
            <i class="fa fa-phone" style="width:30px"></i> Phone: +1-800-867-5309<br>
            <i class="fa fa-envelope" style="width:30px"> </i> Email: playtogive@gmail.com<br>
          </div>
          <div class="col m6">
            <form action="./mail.php" target="_blank">
              <div class="row-padding" style="margin:0 -16px 8px -16px">
                <div class="half">
                  <input class="input border" type="text" placeholder="Name" required name="Name">
                </div>
                <div class="half">
                  <input class="input border" type="text" placeholder="Email" required name="Email">
                </div>
              </div>
              <input class="input border" type="text" placeholder="Message" required name="Message">
              <button class="button blueberry section right" type="submit">SEND</button>
            </form>
          </div>
        </div>
      </div>

    <!-- End Page Content -->
    </div>

    <!-- Footer -->
    <footer class="container padding-64 center opacity light-grey xlarge">
      <i class="fa fa-facebook-official hover-opacity"></i>
      <i class="fa fa-instagram hover-opacity"></i>
      <i class="fa fa-snapchat hover-opacity"></i>
      <i class="fa fa-pinterest-p hover-opacity"></i>
      <i class="fa fa-twitter hover-opacity"></i>
      <i class="fa fa-linkedin hover-opacity"></i>
    </footer>

    <script>
      // Automatic Slideshow - change image every 4 seconds
      var myIndex = 0;
      carousel();

      function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}
        x[myIndex-1].style.display = "block";
        setTimeout(carousel, 4000);
      }

      // Used to toggle the menu on small screens when clicking on the menu button
      function myFunction() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("show") == -1) {
          x.className += " show";
        } else {
          x.className = x.className.replace(" show", "");
        }
      }

      // When the user clicks anywhere outside of the modal, close it
      var modal = document.getElementById('loginModal');
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    </script>

  </body>
</html>
