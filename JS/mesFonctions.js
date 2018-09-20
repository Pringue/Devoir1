function Exo1()
{
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesCategories.php",
            success:function(data)
            {
                $("#lesCategories").empty();
                $("#lesCategories").append(data);
            },
            error:function()
            {
                alert("Erreur dans la récupération des catégories");
            }
        }
    );
}

function AfficherLesServices()
{
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesServices.php",
            data:"idCateg="+$("#lstCategorie").val(),
            success:function(data)
            {
                $("#lesServices").empty();
                $("#lesServices").append(data);
            },
            error:function()
            {
                alert("Erreur dans la récupération des services");
            }
        }
    );
}
