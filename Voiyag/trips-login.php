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
          <a class="navbar-brand" href="index.html">
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

    <div class="trips-login">
      <div class="limitWidth padSides">
        <div class="space-adaptive-large"></div>
        <div class="space-adaptive-large"></div>
        <form class="form-signin text-center formPadMargin">
          <img class="mb-4" src="imgFiles/Logo.jpg" alt="" width="60" height="60">
          <h3 class="h3 mb-3 font-weight-normal smallHeaderInfo">View your trip by signing in, or find your trip by itinerary number</h3>
          <label for="inputEmail" class="sr-only">Email or Username</label>
          <input type="text" id="" class="form-control limitForm" placeholder="Email or Username*" required autofocus>
          <div class="space-adaptive-small"></div>
          <div class="row">
            <div class="col-md-6 verticallyAlign login-left">
              <label for="inputPassword" class="sr-only">Password</label>
              <input type="password" id="" class="form-control limitForm" placeholder="Password" required>
            </div>
            <div class="col-md-6 verticallyAlign">
              <label for="inputPassword" class="sr-only">Itinerary Number</label>
              <input type="text" id="" class="form-control limitForm" placeholder="Itinerary Number" required>
            </div>
          </div>
          <div class="checkbox mb-3">
            <label class="" id="loginCheck">
              <input type="checkbox" value="remember-me" class="rememberMe"> Remember me
            </label>
          </div>
          <button class="btn btn-primary btn-lg" type="submit">Sign in</button>
          <div style="text-align: center">
            <a href="javascript:;" class="text-muted">&copy; 2018-2019</a>
          </div>
          <div style="text-align: center">
            <span class="">Don't have an account?</span><a href="signUp.html"> Register Now</a>
          </div>
          <div style="text-align: center">
            <a href="javascript:;" class="">Forgot your password?</a>
          </div>
        </form>
        <div class="space-adaptive-large"></div>
        <div class="space-adaptive-large"></div>
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

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"></script>

  <!-- End google search -->
  <script src="jsFiles/test.js"></script>
  <!-- Total JS for this page including calendar / google maps -->
  <script src="jsFiles/planATrip.js"></script>
</html>