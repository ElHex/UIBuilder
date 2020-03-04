<?php

header('Access-Control-Allow-Origin: *'); // borrar, solamente para trabajar local.

require_once '../config/config.php';

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);


$id_webflow 	=   $_POST['idwebflow'];

$id_campaing 	= $_POST['idcampaing'];

$id_empresa 	= $_POST['id_empresa'];

$nombre_webflow = $_POST['name'];

$descripcion_webflow = $_POST['description'];

$estructura = $_POST['JSONList'];


$query = "INSERT INTO `crm_webflow` (id_webflow, id_campaing, id_empresa, nombre_webflow, descripcion_webflow, estructura)
	VALUES ('$id_webflow',
	        '$id_campaing',
	        '$id_empresa',
	        '$nombre_webflow',
	        '$descripcion_webflow',
	        '$estructura'
	        ) ON DUPLICATE KEY
			UPDATE  `id_webflow` = '$id_webflow',
					`id_campaing` = '$id_campaing',
					`nombre_webflow` = '$nombre_webflow',
					`descripcion_webflow` = '$descripcion_webflow',
					`estructura` = '$estructura' ";


$finalquery_escaped = $conn->real_escape_string($query);


$conn->set_charset('utf8');

if ($conn->query($query) === TRUE) {

	if($id_webflow == "" ){ 

		echo json_encode(array('generatedId' => $conn->insert_id, 'message'  => "Se ha insertado la data seleccionada exitosamente en la BD." ) ); }

	else{
		echo json_encode(array('generatedId' => null, 'message'  => "Se ha insertado la data seleccionada exitosamente en la BD." ) ); 
	}

    

} else {

	echo json_encode(array('generatedId' => null, 'message'  => $conn->error ) ); 


}




$conn->close();

?>