<?php

      echo "<h1> Indexed / Numeric Array</h1>";

      $fruits =array("apple","oragne","banana","graph");
       
      echo $fruits[0];

      for ($i=0; $i <4 ; $i++) { 
          echo ($fruits[$i]."<br>");
      }


      foreach ($fruits as $fruit) {
          echo $fruit.' ';
      }

      echo "<h3>Associate Arrays</h3>";

      $results = array(
          "A" => 10,
          "B" => 20,
          "C" => 30,
          "D" => 40
      );
      echo $results['B'];

      echo "<h3>Multidimetional Array</h3>";

      $meals = array(
          'breakfast' =>['coffe','Bread'],
          'lunch'     =>['Fried Rice',"Dummmy","Chicken Curry"],
          'dinner'    =>['Banana','fruit','rice']

      );

      echo $meals['dinner'][1];



?>