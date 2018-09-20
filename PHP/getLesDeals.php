<?php
include "cnx.php";

$sql = $cnx->prepare("select idDeal, dateDeal, nomEtat from deal inner join etat where deal.idEtat=etat.idEtat and idCreateur=".$_GET["idCreateur"]);
$sql->execute();

foreach($sql->fetchall(PDO::FETCH_ASSOC) as $ligne)
{
    echo "<p>".$ligne["idDeal"]." - ".$ligne["dateDeal"]." - ".$ligne["nomEtat"]."</p>";
}

?>