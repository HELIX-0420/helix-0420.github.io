<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>HΞLIX'S WΞBSITΞ</title>
    <!-- Og Card -->
    <meta property="og:type" content="article">
    <meta property="og:description" content="">
    <meta property="og:image:secure_url" content="">
    <meta property="og:image" content="">
    <meta property="og:site_name" content="">
    <meta property="og:url" content="">
    <meta property="og:title" content="">
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:description" content=""/>
    <meta name="twitter:title" content=""/>
    <meta name="twitter:site" content=""/>
    <meta name="twitter:image" content=""/>
    <meta name="twitter:creator" content=" "/>
    <!-- fontawesome CSS -->
    <script src="https://kit.fontawesome.com/2083a1c344.js" crossorigin="anonymous"></script>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <!-- Main CSS -->
    <link rel="stylesheet" href="accets/css/main.css">
  </head>
  <body>

    <!-- The social media icon bar -->
    <div class="icon-bar d-none d-md-block">
      <a href="https://twitter.com/HELIX__TV" target="_blank" class="twitter"><i class="fab fa-twitter"></i></a>
      <a href="https://discord.gg/XQ2RfEqYFa" target="_blank" class="discord"><i class="fab fa-discord"></i></a>
      <a href="https://www.twitch.tv/helix__tv" target="_blank" class="twitch">
        <i class="fab fa-twitch">
          <div class="tw-channel-status-indicator tw-channel-status-indicator--pulse"></div>
        </i>
      </a>
      <a href="https://www.tiktok.com/@everything_developing?" target="_blank" class="tiktok"><i class="fab fa-tiktok"></i></a>
      <a href="https://github.com/HELIX-0420" target="_blank" class="github"><i class="fab fa-github"></i></a>
    </div>

    <!-- NAVAGATION -->
    <div class="container">
      <nav class="navbar navbar-expand-md">
        <div class="navbar-brand select-none">H͓̽E͓̽L͓̽I͓̽X͓̽ ͓̽D͓̽E͓̽V͓̽S͓̽</div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="nav navbar-nav ml-auto">
            <li class="divider d-none d-lg-block"></li>
            <li class="nav-item active">
              <a class="nav-link current" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="divider d-none d-md-block"></li>
            <li class="nav-item">
              <a class="nav-link" href="#">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" data-toggle="tooltip" data-placement="bottom" title="COMING SOON">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled devider" href="#" data-toggle="tooltip" data-placement="top" title="COMING SOON">terms of service</a>
            </li>
            <li class="divider d-none d-lg-block"></li>
          </ul>
      </nav>
    </div>

    <!-- The social media icon bar (Mobile)-->
    <!-- <div class="centered">
      <div class="icon-bar2 d-lg-none">
        <a href="https://twitter.com/HELIX__TV" target="_blank" class="twitter"><i class="fab fa-twitter"></i></a>
        <a href="https://discord.gg/XQ2RfEqYFa" target="_blank" class="discord"><i class="fab fa-discord"></i></a>
        <a href="https://www.twitch.tv/helix__tv" target="_blank" class="twitch">
          <i class="fab fa-twitch">
            <div class="tw-channel-status-indicator tw-channel-status-indicator--pulse"></div>
          </i>
        </a>
        <a href="https://www.tiktok.com/@everything_developing?" target="_blank" class="tiktok"><i class="fab fa-tiktok"></i></a>
        <a href="https://github.com/HELIX-0420" target="_blank" class="github"><i class="fab fa-github"></i></a>
      </div>
    </div> -->
<?php
  $response = file_get_contents('twitchFetch/live.txt');
echo $response;

?>
    <!-- Optional JavaScript -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick.min.css">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script>
    <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick.min.js'></script>
    <script src="accets/js/main.js"></script>
  </body>
</html>
