<?php
$array = array(
'hambugers' => 4.95,
'chocolate' => 1.95,
'cola'      => 0.85,
'tax'       => 0.075,
'pre_tax'   => 0.16);
// print_r($array);
$total = 0;
$tax =0;
$temp =0.075 + 0.16 ;
foreach($array as $key => $value)
{
    echo ($key." ".$value."<br>");
    $total+=$value;


}
echo ("Total cost of the items is ".$total."(without tax) <br>");
$total-=$temp;
$tax=$total * $temp;
$total+=$tax;
echo ("Total cost of the items is ".$total."(including tax)");


?>