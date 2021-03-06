<!DOCTYPE html>
<html lang="en"> <!-- Speaking english -->
  <head>
  	<link rel="icon" href="imgFiles/Logo.jpg">
    <title>Plan Your Adventure</title>
    <meta charset="utf-8"> <!-- Common throughout web -->
    <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- This is for the phone scaling -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  	<link rel="stylesheet" href="cssFiles/indexCss.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

    <!-- Scripts for Calendar -->
    <link rel="stylesheet" type="text/css" href="cssFiles/dateRangePicker.css" />
    <!-- End Calendar Scripts -->
  </head>

  <body>	
    <nav class="navbar navbar-expand-sm navbar-dark navbarColor">  <!-- Navbar -->
  		<div class="container limitWidth">       <!-- Limits text to a certain width -->
        <!-- Toggles for Plan a Trip and the collapsable button in the toolbar -->
  			<div class="navbar-nav">
          <a class="navbar-brand" href="#">
            <img src="imgFiles/Logo.jpg" width="30" height="30" class="d-inline-block align-top" alt="">
          </a>
  			</div>
  			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".myNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  			  <span class="navbar-toggler-icon"></span>
  			</button>

        <!-- Collapsable section of the navbar -->
  			<div class="collapse navbar-collapse myNavbar" id="navbarSupportedContent">
  			  <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link loginNav" href="PlanATrip.html"><span class="loginNav">Plan a Trip</span></a>
            </li>
    				<li class="nav-item" id="discoverMain">
    				  <a class="nav-link" href="discover.html"><span class="loginNav">Discover</span></a>
    				</li>
            <li class="nav-item d-none" id="popularMain">
              <a class="nav-link" href="populartrips.html"><span class="loginNav">Popular Trips</span></a>
            </li>
            <li class="nav-item d-none" id="aboutMain">
              <a class="nav-link" href="about.html"><span class="loginNav">About</span></a>
            </li>
            <li class="nav-item d-none" id="contactMain">
              <a class="nav-link" href="contactus.html"><span class="loginNav">Contact Us</span></a>
            </li>
    				<li class="nav-item dropdown navbar-nav d-none" id="more">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <strong><span class="loginNav">More</span></strong>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item d-none" href="PopularTrips.html" id="popularSec"><strong>Popular Trips</strong></a>
                <a class="dropdown-item d-none" href="About.html" id="aboutSec"><strong>About</strong></a>
                <a class="dropdown-item d-none" href="ContactUs.html" id="contactSec"><strong>Contact Us</strong></a>
              </div>
            </li>
  			  </ul>
          <ul class="nav-item navbar-nav" id="secondNav">
            <li class="nav-item">
              <a class="nav-link" href="trips.html"><strong><span class="loginNav">Trips</span></strong></a>
            </li>
            <li class="nav-item">
              <a class="pointer nav-link" data-toggle="modal" data-target="#loginModal"><strong><span class="loginNav">Login</span></strong></a>
            </li>
          </ul>
  			</div>
  		</div>
    </nav>

    <div class="limitWidth">
      <div class="space-adaptive-large"></div>
      <h1 class="padSides" id="headerInfo"><strong>Start Planning Your Adventure</strong></h1>
      <h3 class="padSides smallHeaderInfo">From Exploring Cities to Thrilling Safaris</h3>
      <div class="space-adaptive-small"></div>
      <div class="space-adaptive-small"></div>
      <div class="row padSides">
        <div class="col-md-6 col-lg-3 col-sm-12 col-xs-12 addPlanPadding placeholderColor">
          <input class="tripLocation" id="fromLocation" type="search" placeholder="From?" aria-label="search...">
        </div>
        <div class="col-md-6 col-lg-3 col-sm-12 col-xs-12 addPlanPadding placeholderColor">
          <input class="tripLocation" id="toLocation" type="search" placeholder="To?" aria-label="search...">
        </div>
        <div class="col-md-12 col-lg-5 col-sm-12 col-xs-12 addPlanPadding">
          <div id="datePicker" class="topValue">
            <i class="fa fa-calendar"></i>&nbsp;
            <span></span> 
            <div class="floatRight"><i class="fa fa-caret-down floatRight centerI"></i></div>          
          </div>
        </div>
        <div class="col-md-12 col-lg-1 col-sm-12 col-xs-12 addPlanPadding">
          <button class="btn search" id="search" role="" data-toggle="" data-target="" onclick="checkData()">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="space-adaptive-large"></div>
    <div class="space-adaptive-large"></div>

    <div class="limitWidth">
      <h3 class="padSides smallHeaderInfo" id="colorSmallHeader"><strong>Explore popular trips</strong></h3>
      <div class="space-adaptive-small"></div>
      <div class="card-deck padCards">
        <div class="card">
          <img class="card-img-top" src="imgFiles/iceland.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title"><strong>Card title</strong></h5>
            <p class="card-text">This card is a placeholder until we can pull in pre-created plans</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card d-none" id="replaceDeck2">
          <img class="card-img-top" src="imgFiles/iceland.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title"><strong>Card title</strong></h5>
            <p class="card-text">This card is a placeholder until we can pull in pre-created plans</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card d-none" id="replaceDeck">
          <img class="card-img-top" src="imgFiles/iceland.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title"><strong>Card title</strong></h5>
            <p class="card-text">This card is a placeholder until we can pull in pre-created plans</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>

    <div class="space-adaptive-large"></div>
    <div class="space-adaptive-large"></div>

    <div class="limitWidth padSides">
      <div class="container-fluid">
        <div class="emailSubscription text-center">
          <div class="row addSubscribePad">
            <div class="col-md-1 col-lg-1 col-sm-3 col-xs-3 verticallyAlign">
              <i class="fa fa-envelope" id="envelopeSize" aria-hidden="true"></i>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-9 col-xs-9 verticallyAlign">
              <h3 class="" id="" aria-hidden="true">Join our Email List</h3>
              <i class="" id="" aria-hidden="true">Subscribe now and receive the latest news and updates</i>
            </div>
            <div class="col-md-5 col-lg-5 col-sm-12 col-xs-12 emailSubscribe">
              <input class="emailSubscribeInput" id="" type="search" placeholder="Email Address" aria-label="search...">
            </div>
            <div class="col-md-2 col-lg-2 col-sm-12 col-xs-12 searchSubscribe">
              <button class="btn search" id="" role="" data-toggle="" data-target="" onclick="">
              <i class="fontSubscribe">Subscribe</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="space-adaptive-large"></div>
    <div class="space-adaptive-large"></div>

    <div class="limitWidth">
      <h3 class="padSides smallHeaderInfo" id="colorSmallHeader"><strong>Discover new destinations</strong></h3>
      <div class="space-adaptive-small"></div>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="card-deck padCards">
              <div class="card">
                <img class="card-img-top" src="imgFiles/iceland.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title"><strong>Card title</strong></h5>
                  <p class="card-text">This card is a placeholder until we can pull in pre-created plans</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div class="card" id="replaceDeck2">
                <img class="card-img-top" src="imgFiles/iceland.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title"><strong>Card title</strong></h5>
                  <p class="card-text">This card is a placeholder until we can pull in pre-created plans</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div class="card" id="replaceDeck">
                <img class="card-img-top" src="imgFiles/iceland.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title"><strong>Card title</strong></h5>
                  <p class="card-text">This card is a placeholder until we can pull in pre-created plans</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card-deck padCards">
              <div class="card">
                <img class="card-img-top" src="imgFiles/iceland.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title"><strong>Card title</strong></h5>
                  <p class="card-text">This card is a placeholder until we can pull in pre-created plans</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div class="card" id="replaceDeck2">
                <img class="card-img-top" src="imgFiles/iceland.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title"><strong>Card title</strong></h5>
                  <p class="card-text">This card is a placeholder until we can pull in pre-created plans</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div class="card" id="replaceDeck">
                <img class="card-img-top" src="imgFiles/iceland.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title"><strong>Card title</strong></h5>
                  <p class="card-text">This card is a placeholder until we can pull in pre-created plans</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card-deck padCards">
              <div class="card">
                <img class="card-img-top" src="imgFiles/iceland.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title"><strong>Card title</strong></h5>
                  <p class="card-text">This card is a placeholder until we can pull in pre-created plans</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div class="card" id="replaceDeck2">
                <img class="card-img-top" src="imgFiles/iceland.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title"><strong>Card title</strong></h5>
                  <p class="card-text">This card is a placeholder until we can pull in pre-created plans</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div class="card" id="replaceDeck">
                <img class="card-img-top" src="imgFiles/iceland.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title"><strong>Card title</strong></h5>
                  <p class="card-text">This card is a placeholder until we can pull in pre-created plans</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon fontSubscribe" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon fontSubscribe" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <div class="space-adaptive-large"></div>
    <div class="space-adaptive-large"></div>

    <!-- Search Modal -->
    <div class="modal fade" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchModal" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content text-center">
          <div class="space-adaptive-large"></div>
          <h3>You didn't select a start or end location</h3>
          <div class="space-adaptive-small"></div>
          <div class="card-groug">
            <div class="row">
              <div class="col-md-5 col-lg-5 col-sm-12 col-xs-12" style="padding-bottom: 10px; margin: auto;">
                <div class="card border-info">
                  <div class="card-header">You know where you want to go</div>
                  <div class="card-body text-info">
                    <p class="card-text">Fill out the start and end locations to start planning your adventure!</p>
                  </div>
                  <a href="#" class="btn dataButton" data-toggle="modal" data-target="#searchModal">Search</a>
                </div>
              </div>
              <div class="col-md-5 col-lg-5 col-sm-12 col-xs-12" style="padding-bottom: 10px; margin: auto;">
                <div class="card border-info">
                  <div class="card-header">You don't know where to go</div>
                  <div class="card-body text-info">
                    <p class="card-text">Search destinations in order to find a location that fits you perfectly</p>
                  </div>
                  <a href="discover.html" class="btn dataButton">Search</a>
                </div>
              </div>
            </div>
          </div>
          <div class="space-adaptive-large"></div>
        </div>
      </div>
    </div>

    <!-- Login Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header" id="loginHeader">
            <h2 class="modal-title" id="loginLabel">Log In</h2>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" id="loginBody">
            <form class="form-signin text-center formPadMargin">
              <img class="mb-4" src="imgFiles/Logo.jpg" alt="" width="60" height="60">
              <h3 class="h3 mb-3 font-weight-normal colorWhite">Enter Account Information</h3>
              <label for="inputEmail" class="sr-only">Email or Username</label>
              <input type="text" id="" class="form-control limitForm" placeholder="Email or Username" required autofocus>
              <div class="space-adaptive-small"></div>
              <label for="inputPassword" class="sr-only">Password</label>
              <input type="password" id="" class="form-control limitForm" placeholder="Password" required>
              <div class="checkbox mb-3">
                <label class="colorWhite" id="loginCheck">
                  <input type="checkbox" value="remember-me" class="rememberMe"> Remember me
                </label>
              </div>
              <button class="btn btn-primary btn-lg" type="submit">Sign in</button>
              <div style="text-align: center">
                <a href="javascript:;" class="text-muted">&copy; 2018-2019</a>
              </div>
              <div style="text-align: center">
                <span class="colorWhite">Don't have an account?</span><a href="signUp.html"> Register Now</a>
              </div>
              <div style="text-align: center">
                <a href="javascript:;" class="">Forgot your password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Language Modal -->
    <div class="modal fade" id="languageModal" tabindex="-1" role="dialog" aria-labelledby="languageModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header" id="languageHeader">
            <h3 class="modal-title">Language</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" id="languageBody">
            <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div class="row language" data-dismiss="modal" ><a>English (US)</a></div>
              <div class="row language" data-dismiss="modal" ><a>Español</a></div>
              <div class="row language" data-dismiss="modal" ><a>Français</a></div>
              <div class="row language" data-dismiss="modal" ><a>Italiano</a></div>
              <div class="row language" data-dismiss="modal" ><a>English (US)</a></div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div class="row language" data-dismiss="modal" ><a>Português</a></div>
              <div class="row language" data-dismiss="modal" ><a>Polski</a></div>
              <div class="row language" data-dismiss="modal" ><a>日本語</a></div>
              <div class="row language" data-dismiss="modal" ><a>繁體中文</a></div>
              <div class="row language" data-dismiss="modal" ><a>简体中文</a></div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="container-fluid">
      <div class="space-adaptive-large"></div>
        <div class="NavbarFooter">
          <div class="limitWidth">
            <a class=pointer><i class="fa fa-globe" style="font-size:16px" data-toggle="modal" data-target="#languageModal"> English (US) &#9660;</i></a>
            <div class="text-center footerPad">
              <a href="index.html"><h3>Voiyag Onward</h3></a>
            </div>
            <div class="text-center footerPad">
              <a href="About.html" class="">ABOUT</a>
              <a class="vertDivide">|</a>
              <a href="Help.html" class="">HELP / FAQ</a>
              <a class="vertDivide">|</a>
              <a href="contactUs.html" class="">CONTACT US</a>
              <a class="vertDivide">|</a>
              <a href="careers.html" class="">CAREERS</a>
            </div>
            <div class="text-center footerPad">
              <a href="https://www.facebook.com/PlannedJourneys-222086925035409/" class ="fab fa-facebook-f "></a>
              <a href="https://twitter.com/PlannedJourneys" class ="fab fa-twitter "></a>
              <a href="https://www.instagram.com/plannedjourneys/?hl=en" class ="fab fa-instagram "></a>
              <a href="https://www.linkedin.com/in/planned-journeys-9053a715b/" class ="fab fa-linkedin "></a>
              <a href="https://www.youtube.com/channel/UCCBDTcQADAt_Hg2dETKlF3w" class ="fab fa-youtube "></a>
            </div>
            <div class="space-adaptive-small"></div>
            <div class="text-center">
              <a href="privacy.html" class="contracts footerColor"><small class="footerColor">Privacy</small></a>
              <a class="vertDivide"><small>|</small></a>
              <a href="terms.html" class="contracts footerColor"><small class="footerColor">Terms</small></a>
              <a class="vertDivide"><small>|</small></a>
              <a class="footerColor"><small class="footerColor">&#9400;2019 VOIYAG</small></a>
            </div>
            <div class="text-center">
              <a><small class="footerColor">Create the ideal trip itinerary with VOIYAG. VOIYAG automatically assembles trip itineraries based on preferences or assists in assembling your own preferred itinerary</small></a>
            </div>
          </div>
        </div>
      <div class="space-adaptive-large"></div>
    </footer>
  </body>

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <!-- Script necessary for Google Search -->
  <script type="text/javascript" src="jsFiles/Jquery/jquery.min.js"></script>

  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

  <!-- <script type="text/javascript" src="jsFiles/moment-develop/min/moment.min.js"></script> -->
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"></script>
  <script type="text/javascript" src="jsFiles/dateRangePicker.js"></script>
  <!-- End Calendar Javascript -->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwrNqUFd-cdOvpiis6e38bDGVWio8gSGY&libraries=places"></script>
  <!-- End google search --><!-- 
  <script src="jsFiles/signUp.js"></script> -->
  <script src="jsFiles/test.js"></script>
  <!-- Total JS for this page including calendar / google maps -->
  <script src="jsFiles/planATrip.js"></script>
</html>