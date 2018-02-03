<!DOCTYPE html>
<html>
	<title>Register</title>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1">
	  <link rel="stylesheet" href="default.css">
	  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
	  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	  <body>
	  	<!-- Navbar -->
	    <div class="top">
	      <div class="bar blueberry card">
	        <!--<a class="bar-item button padding-large hide-medium hide-large right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>-->
	        <a href="./index.php" class="bar-item button hover-apple-core padding-large"><img src="./images/d-pad_example.png" style="max-height:25px"> PLAY TO GIVE</a>
	        <a href="./index.php#events" class="bar-item button hover-apple-core padding-large hide-small">EVENTS</a>
	        <a href="./index.php#charities" class="bar-item button hover-apple-core padding-large hide-small">CHARITIES</a>
	        <a href="./index.php#games" class="bar-item button hover-apple-core padding-large hide-small">GAMES</a>
	        <a href="./index.php#about" class="bar-item button hover-apple-core padding-large hide-small">ABOUT US</a>
	        <a href="./index.php#contact" class="bar-item button hover-apple-core padding-large hide-small">CONTACT</a>
	        <!--<div class="dropdown-hover hide-small">
	          <button class="padding-large button" title="More">MORE <i class="fa fa-caret-down"></i></button>
	          <div class="dropdown-content bar-block card-4">
	            <a href="#" class="bar-item button">Merchandise</a>
	            <a href="#" class="bar-item button">Extras</a>
	            <a href="#" class="bar-item button">Media</a>
	          </div>
	        </div>-->
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
    		<div class="container content center padding-64" style="max-width:800px" id="info">
		        <h2 class="wide">Sign Up</h2>
		        <form class="form-horizontal">
		        	<div class="form-group">
                        <label class="col-sm-2 control-label" htmlFor="first_name">First Name:</label>
                        <div class="col-sm-10">
                            <input class="form-control" id="first_name" type="text" placeholder="First Name"/>
                        </div>
                    </div>
		        	<div class="form-group">
                        <label class="col-sm-2 control-label" htmlFor="last_name">Last Name:</label>
                        <div class="col-sm-10">
                            <input class="form-control" id="last_name" type="text" placeholder="Last Name"/>
                        </div>
                    </div>
		        	<div class="form-group">
                        <label class="col-sm-2 control-label" htmlFor="primary_email">Email:</label>
                        <div class="col-sm-10">
                            <input class="form-control" id="primary_email" type="email" placeholder="Email Address"/>
                        </div>
                    </div>
			        <div class="form-group">
                        <label class="col-sm-2 control-label" htmlFor="username">Username:</label>
                        <div class="col-sm-10">
                            <input class="form-control" id="username" type="text" placeholder="Username"/>
                        </div>
                    </div>
			        <div class="form-group">
                        <label class="col-sm-2 control-label" htmlFor="password">Password:</label>
                        <div class="col-sm-10">
                            <input class="form-control" id="password" type="password" placeholder="Password"/>
                        </div>
                    </div>
			        <button class="button block blueberry hover-apple-core padding-16 section right">Register <i class="fa fa-check"></i></button>
	            </form>
	      	</div>
    	</div>
	  </body>
</html>