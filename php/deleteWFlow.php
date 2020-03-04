<?php

header('Access-Control-Allow-Origin: *'); // borrar, solamente para trabajar local.

require_once '../config/config.php';

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);


$id_webflow 	=   $_POST['idwebflow'];

if($id_webflow!=""){

	$query = "DELETE FROM `crm_webflow` WHERE id_webflow=$id_webflow";


	$finalquery_escaped = $conn->real_escape_string($query);


	$conn->set_charset('utf8');

	if ($conn->query($query) === TRUE) {

	    echo "Se ha eliminado el webflow exitosamente.";

	} else {

	    echo $query."  Hubo un error al intentar guardar la info : " . $conn->error;

	}


}
else {
	echo "¡Este webflow aun no se ha guardado! (No existe)";
}

$conn->close();

?>