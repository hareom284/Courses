<?php

 $text = "      Hello    <br> ";
 //print the length of text and 
 var_dump($text);

$text = var_dump(trim($text));
echo "<h4>$text</h4>";
// find the length of variable
$tec = "helo"; 
echo (strlen($tec)."<br>");
$string  = "hello world";
$string1 = "HELLO WOrLD";

if(strcasecmp($string,$string1)==0)
{
    echo " Matched";
}
else
{
    echo "Nope ";
}
echo substr($string,3)


?>