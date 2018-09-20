<?php
include "cnx.php";

$sql = $cnx->prepare("select idCateg, nomCateg from categorie");
$sql->execute();

echo "<select id='lstCategorie' onchange='AfficherLesServices()'>";

foreach($sql->fetchall(PDO::FETCH_ASSOC) as $ligne)
{
    echo "<option value='".$ligne["idCateg"]."'>".$ligne["nomCateg"]."</option>";
}

echo "</select>";
?>