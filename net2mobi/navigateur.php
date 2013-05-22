<?php

$NAV_CHROME = 0;
$NAV_FIREFOX = 1;
$NAV_NETSCAPE = 2;
$NAV_UNKNOWN = 3;
$NAV_SAFARI = 4;
$NAV_KONQUEROR = 5;
$NAV_OPERA = 6;
$NAV_MSIE = 7;
$BOT_GOOGLE = 8;
 
$HUA = getenv("HTTP_USER_AGENT");
 
$nav = $NAV_UNKNOWN;
if ( strstr($HUA, "(Nav|Gold|X11|Netscape)") && !strstr($HUA, "(MSIE|Konqueror)") ) $nav = $NAV_NETSCAPE;
elseif (strstr($HUA, "Opera")) $nav = $NAV_OPERA;
elseif (strstr($HUA, "MSIE")) $nav = $NAV_MSIE;
elseif (strstr($HUA, "Chrome")) $nav = $NAV_CHROME;
elseif (strstr($HUA, "Mozilla")) $nav = $NAV_FIREFOX;
elseif (strstr($HUA, "Konqueror")) $nav = $NAV_KONQUEROR;
elseif (strstr($HUA, "(Google|Slurp|Scooter)") || stristr($HUA, "(bot|Spider|Infoseek)")) $nav = $BOT_GOOGLE;
 
echo $nav ;

?>


