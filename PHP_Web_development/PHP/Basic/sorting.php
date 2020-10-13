<?php

echo "<h1>Sort </h1>";

$dinner = array(
    'Sweet Corn and Asparague',
    'Lemon Chicken',
       	'Braised Bamboo Fungus'
    );
    echo "Original Array";
   foreach($dinner as $i)
   {
       echo $i."<br>";
   }
   sort($dinner);
   echo "After Sorting using sort()";

   foreach($dinner as $value)
   {
       echo $value."<br>";
   }




?>