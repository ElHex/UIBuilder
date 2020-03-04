<?php

header('Access-Control-Allow-Origin: *'); // borrar, solamente para trabajar local.

require_once '../config/config.php';


$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$columns 	=  $_POST['columns'];

$id_campaing 	=  $_POST['id_campaing'];


$id_clave	=  $_POST['id_clave'];


$sql = "SELECT $columns FROM `crm_clientes` WHERE `id_campaing`='$id_campaing' AND `clave`='$id_clave' ";

//echo $sql;


$result = $conn->query($sql);

if ($result->num_rows > 0) {

	 $row = $result->fetch_array(MYSQLI_ASSOC);

	 echo json_encode($row);
}


mysqli_close($conn);

?>