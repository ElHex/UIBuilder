<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Access-Control-Allow-Origin: *'); // borrar, solamente para trabajar local.
require_once '../config/config.php';


$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);
$conn->set_charset("utf8");
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


if(isset($_POST['id_campaña']) && $_POST['id_campaña'] ){

$id_campaña=$_POST['id_campaña'];

$tipologia1_subtypeid = "";

$sql ="";

	if( isset($_POST['objetive']) ){ 

//codigo tipo

		if($_POST['objetive'] == "tipologia1"){


			$sql = "SELECT tipologia1.codigo_subtipo AS codigo1, tipologia1.subtipo_descripcion AS descripcion1 FROM `crm_pal_subtipologia` AS tipologia1 WHERE tipologia1.`id_campaing` = '$id_campaña'"; //tabla para subtipologia1
		
		}

		else if ($_POST['objetive'] == "tipologia2"){

			if( isset($_POST['tip1_subtype']) ){

				$codigosubtipo1 = $_POST['tip1_subtype'];

				//$sql= "SELECT tipologia2.codigo_subtipo2 AS codigo,tipologia2.subtipo2_descripcion AS descripcion FROM `crm_pal_subtipologia` AS tipologia1 INNER JOIN `crm_pal_subtipologia2` AS tipologia2
				//WHERE tipologia1.id_campaing = $id_campaña AND tipologia2.codigo_subtipo = $codigosubtipo1 AND tipologia2.codigo_subtipo2 = $codigosubtipo1";


				$sql="SELECT codigo_subtipo2 AS codigo, subtipo2_descripcion AS descripcion FROM `crm_pal_subtipologia2` WHERE `codigo_subtipo` = '$codigosubtipo1'";
			}
			else { echo null;}

		}
		else if ($_POST['objetive'] == "tipologia3"){


					if( isset($_POST['tip1_subtype']) && isset($_POST['tip2_subtype']) ){ //se añade para buscar tipologia3

							$codigosubtipo1 = $_POST['tip1_subtype'];
							$codigosubtipo2 = $_POST['tip2_subtype'];

						/*/	$sql="SELECT tipologia3.codigo_subtipo3 AS codigo,
				    				     tipologia3.subtipo3_descripcion AS descripcion
				    			FROM `crm_pal_subtipologia` AS tipologia1 
				    			INNER JOIN `crm_pal_subtipologia2` AS tipologia2
				    			INNER JOIN `crm_pal_subtipologia3` AS tipologia3
				    		     WHERE tipologia3.id_campaing = $id_campaña 
				    		     AND tipologia3.codigo_subtipo = $codigosubtipo1 
				    		     AND tipologia3.codigo_subtipo2 = $codigosubtipo2 
				    		     AND tipologia3.codigo_subtipo3  = $codigosubtipo2";/*/

				    $sql="SELECT `codigo_subtipo3` AS codigo, subtipo3_descripcion AS descripcion FROM `crm_pal_subtipologia3` WHERE `codigo_subtipo` = '$codigosubtipo1' AND `codigo_subtipo2`= '$codigosubtipo2'";



					}	
					else { echo null;}	    

		}


		if($sql!=""){

			//echo $sql;

			$result = $conn->query($sql);

				if ($result->num_rows > 0) {

					$rows = array();

					while($row = $result->fetch_array(MYSQLI_ASSOC)) {

						  array_push($rows, $row);

						}


					// echo $sql;
					// echo "\n";
					 echo json_encode($rows);
				}

		}
	}

}


mysqli_close($conn);

?>