<?php
header('Content-Type: text/txt; charset=UTF-8');
$nombre='' ;
$apellido='' ;
$direccion='' ;

if ($_REQUEST['cod']=='1'){
  $nombre='Pepito';
  $apellido='Pérez' ;
  $direccion='Calle Real 18' ;
}

if ($_REQUEST['cod']=='2'){
  $nombre='Paco';
  $apellido='García' ;
  $direccion='Calle Mayor 13' ;
}

if ($_REQUEST['cod']=='3'){
  $nombre='María';
  $apellido='López' ;
  $direccion='Plaza de España 7' ;
}

echo json_encode(array(
	'nombre' => $nombre,
	'apellido' => $apellido,
	'direccion' => $direccion
));

?>
