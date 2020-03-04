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


$id_webflow 	=   $_POST['idwebflow'];

$id_campaing 	= $_POST['idcampaing'];



$sql = "SELECT *  FROM `crm_webflow` WHERE `id_webflow`='$id_webflow' AND `id_campaing`='$id_campaing' ";


$result = $conn->query($sql);




if ($result) {

	if ($result->num_rows > 0) {

	 $row = $result->fetch_array(MYSQLI_ASSOC);

	 echo json_encode($row);
}

    
}
else{
	trigger_error('Invalid query: ' . $conn->error);
}


mysqli_close($conn);

?>