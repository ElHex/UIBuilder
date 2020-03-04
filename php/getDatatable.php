<?php

header('Access-Control-Allow-Origin: *'); // borrar, solamente para trabajar local.
require_once  '../config/config.php';
 
/*
 * DataTables example server-side processing script.
 *
 * Please note that this script is intentionally extremely simply to show how
 * server-side processing can be implemented, and probably shouldn't be used as
 * the basis for a large complex system. It is suitable for simple use cases as
 * for learning.
 *
 * See http://datatables.net/usage/server-side for full details on the server-
 * side processing requirements of DataTables.
 *
 * @license MIT - http://datatables.net/license_mit
 */
 
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Easy set variables
 */
 
if(isset($_POST['columns']) && $_POST['columns']!="" &&  isset($_POST['type']) && $_POST['type']!=""){


// DB table to use
$table = '';

$id_campaing = $_POST['id_campaing'];
$id_clave = $_POST['id_clave'];



$type= $_POST['type'];

	if($type == "datatables"){

	$table = 'crm_cliente_base';

	}
	else if($type == "debts"){

		$table = 'crm_deuda';

	}
	else if($type == "managements"){
			
		$table = 'crm_agenda2';

	}
	else if($type == "telephones"){
			
		$table = 'crm_telefonos';

	}
	else if($type == "addresses"){
			
		$table = 'crm_direccion';

	}
 


// Table's primary key
$primaryKey = '';
 
// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes

$Webflow_columns= json_decode($_POST['columnas']);


$columns= [];


foreach ($Webflow_columns as $key=>$cname) {

    array_push($columns, array( 'db' => '`c`.'.'`'.$cname.'`', 'dt' => $cname, 'field' => $cname ));
    
}
// SQL server connection information
$sql_details = array(
    'user' => DB_USER,
    'pass' => DB_PASS,
    'db'   => DB_NAME,
    'host' => DB_HOST,
    'port' => DB_PORT
);
 
 $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

 

require( 'tparty/ssp.php');



$joinQuery = "FROM `{$table}` AS `c`";

$id_campaing = $_POST['id_campaing'];

$id_clave = $_POST['id_clave'];



$extraCondition = "`id_campaing`=".$id_campaing." AND `clave`='".$id_clave."'";

//$extraCondition = "`id_campaing`=".$id_campaing. " AND `id_empresa`='".$id_empresa."'"." AND `id_bolsa`='".$id_bolsa."'"." AND `clave`='".$id_clave."'";

$having = "";



$groupBy = ''; 

//$Ssp::simple( $_POST, $sql_details, $table, $primaryKey, $columns, $joinQuery, $where, $groupBy);

echo json_encode(
       SSP::simple( $_POST, $sql_details, $table, $primaryKey, $columns, $joinQuery, $extraCondition, $groupBy, $having)
     );

}else{
	echo "Error";
}



?>