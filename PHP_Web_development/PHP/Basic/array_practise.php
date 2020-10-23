<?php

echo "<h1> Array Key Exits </h1>";

$meals = array(

    "Walnut Bun" => 1,
    "Cashew Nuts and White Mushrooms" => 4.95,
    "Dried Mulberries" => 3.00,
    "Eggplant with Chili Sauce" => 6.50,
    "Shrimp Puffs" => 0
);

if(array_key_exists("Shrimp Puffs",$meals))
{
    echo "Yes";
}
else
{
    echo "No";
}
if(array_key_exists("3.00",$meals))
{
    echo "Yes";
}
else
{
    echo "No";
}

// in_array() check
if(in_array("Shrimp Puffs",$meals))
{
    echo "Yes";
}
else
{
    echo "No";
}
if(in_array("3.00",$meals))
{
    echo "Yes";
}
else
{
    echo "No";
}

//if you want to delete a index value from array
$array = array(10,20,30 ,40);

unset($array[1]);
foreach($array as $i)
{
    echo $i.'<br>';
}

# 
$dimsum = array('Chicken Bun', 'Stuffed Duck Web', 'Turnip Cake');
$dimsum_menu = implode(",",$dimsum);
echo $dimsum_menu;

$dimsum = explode(",",$dimsum_menu);

foreach($dimsum as $i)
{
    echo $i."<br>";
}

?>