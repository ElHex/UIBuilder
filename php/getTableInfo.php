<?php

header('Access-Control-Allow-Origin: *');
require_once '../config/config.php';


$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}



$table="";

if(isset($_POST['type']) && !empty($_POST['type']) ){



	$type = $_POST['type'];

		if($type == "base"){

			$table = 'crm_clientes';

		}
		else if($type == "debt"){
			
			$table = 'crm_deuda';

		}
		else if($type == "management"){
			
			$table = 'crm_agenda2';

		}
		else if($type == "telephone"){
			
			$table = 'crm_telefonos';

		}
		else if($type == "address"){
			
			$table = 'crm_direccion';

		}

}


$sql = "SELECT `COLUMN_NAME` from INFORMATION_SCHEMA.columns where table_name = '$table' ";



if ($result = $conn->query($sql)) {

		$json = mysqli_fetch_all ($result, MYSQLI_ASSOC);

		echo json_encode($json );
  
    $result->free();
}


mysqli_close($conn);


?>