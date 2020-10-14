<?php 

$name  = $_POST['name'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$address =$_POST['address'];
$profile = $_FILES['profile'];

// var_dump($profile);

$basepath = "images/";
$fullpath = $basepath.$profile['name'];
// echo $fullpath;
move_uploaded_file($profile['tmp_name'], $fullpath);

$students = array(
    "name"    => $name,
    "email"   => $email,
    "gender"  => $gender,
    "address" => $address

);


// var_dump($students);
$josonData = file_get_contents("Students.json");
if(!$josonData)
{
    $josonData = '[]';
}

$data_array = json_decode($josonData);
array_push($data_array,$students);

$josonData = json_encode($data_array, JSON_PRETTY_PRINT);

var_dump ($josonData);

file_put_contents('Students.json', $josonData);


// header("location:index.php");

?>