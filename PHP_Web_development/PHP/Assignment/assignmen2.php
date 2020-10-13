<?php
$American_cities =
array(
    'New York, NY'    =>8175133,
    'Los Angeles,CA'  =>3792621,
    'Chicago,LL'      =>2695598,
    'Houston,TX'      =>2100263,
    'Philadelphia,PA' =>1526006,
    'Phoenix,AZ'      =>1445623,
    'San Antonio,TX'  =>1327407,
    'San Diego,CA'    =>1307402,
    'Dallas,TX'       =>1197816,
    'San Jose,CA'     =>945942
);
$total = 0;
echo "<table border=1 >";
foreach($American_cities as $key =>$value )
{
    echo ("<tr><td>".$key."</td><td>".$value."</td></tr>");
    $total+= $value;
}
echo "<tr><td>Total</td><td>".$total."</td></tr></table>";

?>