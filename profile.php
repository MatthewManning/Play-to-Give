<!DOCTYPE html>
<html>
  <title>User Profile</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="default.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <body>
    <!-- Navbar -->
    <div class="top">
      <div class="bar blueberry card">
        <!--<a class="bar-item button padding-large hide-medium hide-large right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>-->
        <a href="/Play-to-Give" class="bar-item button hover-apple-core padding-large"><img src="./images/d-pad_example.png" style="max-height:25px"> PLAY TO GIVE</a>
        <a href="#info" class="bar-item button hover-apple-core padding-large hide-small">PROFILE</a>
        <a href="#achievements" class="bar-item button hover-apple-core padding-large hide-small">ACHIEVEMENTS</a>
        <div class="dropdown-hover hide-small">
          <button class="padding-large button" title="Events">EVENTS <i class="fa fa-caret-down"></i></button>
          <div class="dropdown-content bar-block card-4">
            <a href="#my_events" class="bar-item button hover-apple-core padding-large hide-small">My Events</a>
            <a href="/Play-to-Give/#events" class="bar-item button hover-apple-core padding-large hide-small">All Events</a>
          </div>
        </div>
        <div class="dropdown-hover hide-small">
          <button class="padding-large button" title="Charities">CHARITIES <i class="fa fa-caret-down"></i></button>
          <div class="dropdown-content bar-block card-4">
            <a href="#my_charity" class="bar-item button hover-apple-core padding-large hide-small">My Charity</a>
            <a href="/Play-to-Give/#charities" class="bar-item button hover-apple-core padding-large hide-small">All Charities</a>
          </div>
        </div>
        <div class="dropdown-hover hide-small">
          <button class="padding-large button" title="Games">GAMES <i class="fa fa-caret-down"></i></button>
          <div class="dropdown-content bar-block card-4">
            <a href="#my_games" class="bar-item button hover-apple-core padding-large hide-small">My Games</a>
            <a href="/Play-to-Give/#games" class="bar-item button hover-apple-core padding-large hide-small">All Games</a>
          </div>
        </div>
        <button class="bar-item button padding-large hover-apple-core hide-small right" onclick="document.getElementById('logoutModal').style.display='block'">logout</button>
        <!--<a href="#loginModal" class="bar-item button padding-large hover-red hide-small right">login / sign up</a>-->

        <!-- Logout Modal -->
        <div id="logoutModal" class="modal">
          <div class="modal-content animate-top card-4">
            <header class="container blueberry center padding-32">
              <span onclick="document.getElementById('logoutModal').style.display='none'"
              class="button blueberry hover-red xlarge display-topright">×</span>
              <h2 class="wide"><i class="fa frown margin-right"></i>Logged Out</h2>
            </header>
          </div>
        </div>

      </div>
    </div>

    <!-- Page content -->
    <div class="content" style="max-width:2000px;margin-top:46px">

      <!-- The User Information Section -->
      <div class="container content center padding-64" style="max-width:800px" id="info">
        <img src="./images/default_user_profile_pic_example.jpg" style="max-width:267px; max-height:100px">
        <h2 class="wide">Default User</h2>
        <p>This is my user blurb.</p>
        <table style="margin: auto" class="table-all white text-grey">
          <tr>
            <td style="vertical-align: middle; height:50px">Email</td>
            <td style="vertical-align: middle; height:50px">defaultuser@mail.com</td>
            <td style="vertical-align: middle; height:50px"><button class="button apricot hover-apple-core right">Edit</button></td>
          </tr>
          <tr>
            <td style="vertical-align: middle; height:50px">Date of Birth</td>
            <td style="vertical-align: middle; height:50px">1997-01-01</td>
            <td style="vertical-align: middle; height:50px"><button class="button apricot hover-apple-core right">Edit</button></td>
          </tr>
        </table>
      </div>

      <!-- The Events Section -->
      <div class="container content center padding-64" style="max-width:800px" id="my_events">
        <h2 class="wide">EVENTS</h2>
        <p class="opacity center"><i>You are registered for these events:</i></p><br>
        <table style="width:400px; margin: auto" class="table-all white text-grey">
          <tr>
            <td style="vertical-align: middle; height:50px">Nashville</td>
            <td style="vertical-align: middle; height:50px"><button class="button apricot hover-apple-core right">April 23</button></td>
          </tr>
        </table>
      </div>

      <!-- The User's Charity Section -->
      <div class="blueberry" id="my_charity">
        <div class="container content padding-64" style="max-width:800px">
          <h2 class="wide center">CHARITY</h2>
          <p class="opacity center"><i>You are representing this charity:</i></p><br>
          <table class="table-all white text-grey">
            <tr>
              <td style="vertical-align: middle; height:100px"><img src="./images/The_Trevor_Project_logo_example.svg" style="max-width:267px; max-height:100px"></td>
              <td style="vertical-align: middle; height:100px">The Trevor Project</td>
              <td style="vertical-align: middle; height:100px"><button class="button blueberry hover-apple-core right">Learn More</button></td>
            </tr>
          </table>
        </div>
      </div>

      <!-- The User's Games Section -->
      <div class="container content center padding-64" style="max-width:800px" id="my_games">
        <h2 class="wide">GAMES</h2>
        <p class="opacity center"><i>You have paid to access these games:</i></p><br>
        <table class="table-all white text-grey">
          <tr>
            <td style="vertical-align: middle; height:100px"><img src="./images/2048_logo_example.svg" style="max-width:267px; max-height:100px"></td>
            <td style="vertical-align: middle; height:100px">2048</td>
            <td style="vertical-align: middle; height:100px"><button class="button blueberry hover-apple-core right">Learn More</button></td>
            <td style="vertical-align: middle; height:100px"><button class="button apricot hover-apple-core right">Play</button></td>
          </tr>
          <tr>
            <td style="vertical-align: middle; height:100px"><img src="./images/xpilot_logo_example.png" style="max-width:267px; max-height:100px"></td>
            <td style="vertical-align: middle; height:100px">XPilot</td>
            <td style="vertical-align: middle; height:100px"><button class="button blueberry hover-apple-core right">Learn More</button></td>
            <td style="vertical-align: middle; height:100px"><button class="button apricot hover-apple-core right">Play</button></td>
          </tr>
        </table>
      </div>

      <!-- The User's Achievements Section -->
      <div class="container content center padding-64" style="max-width:800px" id="achievements">
        <h2 class="wide">ACHIEVEMENTS</h2>
        <p class="opacity center"><i>You have earned these achievement! Good Job!</i></p><br>
        <table class="table-all white text-grey">
          <tr>
            <td style="vertical-align: middle; height:100px"><img src="./images/over9000_example.png" style="max-width:267px; max-height:100px"></td>
            <td style="vertical-align: middle; height:100px; width:266px">What 9000?!</td>
            <td style="vertical-align: middle; height:100px; width:266px">Earn a score of 9001 or more in a game.</td>
          </tr>
          <tr>
            <td style="vertical-align: middle; height:100px"><img src="./images/white_heat_example.png" style="max-width:267px; max-height:100px"></td>
            <td style="vertical-align: middle; height:100px; width:266px">Made it, Ma! Top of the world!</td>
            <td style="vertical-align: middle; height:100px; width:266px">Earn the top score world-wide.</button></td>
          </tr>
        </table>
      </div>

    <!-- End Page Content -->
    </div>

    <script>

      // When the user clicks anywhere outside of the modal, close it
      var modal = document.getElementById('logoutModal');
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    </script>

  </body>
</html>
