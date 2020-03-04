<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


header('Access-Control-Allow-Origin: *'); // borrar, solamente para trabajar local.

require_once '../config/config.php';


$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$id_campaing 	= $_POST['idcampaing'];
$clave = $_POST['id_clave']; 



$sql = "SELECT telefono  FROM `crm_telefonos` WHERE  `id_campaing`='$id_campaing' AND `clave` = '$clave' ";


$result = $conn->query($sql);



if ($result) {

	if ($result->num_rows > 0) {

	 $rows = array();

	while($row = $result->fetch_array(MYSQLI_ASSOC)) {

			array_push($rows, $row);

		}

	 echo json_encode($rows);
}
else{
	echo json_encode("");
}


    
}
else{
	trigger_error('Invalid query: ' . $conn->error);
}


mysqli_close($conn);

?>