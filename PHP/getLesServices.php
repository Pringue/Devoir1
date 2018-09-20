<?php
include "cnx.php";

$sql = $cnx->prepare("select nomService from service where idCateg=".$_GET["idCateg"]);
$sql->execute();

foreach($sql->fetchall(PDO::FETCH_ASSOC) as $ligne)
{
    echo "<p>".$ligne["nomService"]."</p>";
}

?>