<?
    require 'steamauth/steamauth.php';
    require 'steamauth/userInfo.php';

    if(isset($_SESSION['steamid']))
    {
        $id = $_SESSION['steamid']; 
    }
    else{
        #Not logged in
    }
?>

<!DOCTYPE html>
<html lang="en-us">
  <head>
    <link rel="stylesheet" href="../main.css">    
    <script async defer src="https://buttons.github.io/buttons.js"></script>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  </head>
<body>
    <div class="topnav copyright" style="position: relative; text-align:end">
        <div class="test">
            <a class="active" href="#home">Home</a>
            <? echo loginbutton(); ?>
        </div>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        
        <? if(isset($_SESSION['steamid'])) {?>
        <a href='#' class="dropdown-toggle" data-toggle="dropdown"><img class="img-rounded" src="<?=$steamprofile['avatar'];?>"> <b><?=$steamprofile['personaname'];?></b><b class="caret"></b></a>
        
        <p> logged in O_o</p>
        <? }else{?>
        <p> feelsbad no worky</p>
        <? } ?>
    </div>
    
    
    <footer class="copyright footer" style="position:absolute">
        <p>&copy; 2019 Sebastian Waring</p>
    </footer>
    
    
    <script>
        var index = localStorage.getItem("randomInt");
        var ColourBg = "06366D"; // default color - white (index = 0)
        var ColourOutline = "46D3AC"; // default color - white (index = 0)
        var ColourFill = "EDB566"; // default color - white (index = 0)
        
        if(index == 1){
            ColourBg = "674d3c"; 
            ColourOutline = "ff6f69";
            ColourFill = "ffcc5c";
        }
        if(index == 2){
            ColourBg = "3F1D55";
            ColourOutline = "46D3AC";
            ColourFill = "FDBFFE";
        }
        if(index == 3){
            ColourBg = "2F4F4F";
            ColourOutline = "0496FF";
            ColourFill = "eee";
        }
        
        document.documentElement.style
        .setProperty('--bg', "#" + ColourBg);
        document.documentElement.style
        .setProperty('--outline', "#" + ColourOutline);
        document.documentElement.style
        .setProperty('--fill', "#" + ColourFill);
    </script>
    </body>
</html>