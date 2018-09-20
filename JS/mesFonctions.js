function Exo1()
{
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesCategories.php",
            success:function(data)
            {
                $("#lesDeals").empty();
                $("#identifiant").empty();
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

function Exo2()
{
    $.ajax
    (
        {
            type:'get',
            url:'PHP/identifiant.php',
            success:function(data)
            {
                $("#lesCategories").empty();
                $("#lesServices").empty();
                $("#identifiant").empty();
                $("#identifiant").append(data);
            },
            error:function()
            {
                alert("Erreur dans l'affichage de l'identifiant");
            }
        }
    );
}

function AfficherLesDeals()
{
    $.ajax
    (
        {
            type:"get",
            url:'PHP/getLesDeals.php',
            data:"idCreateur="+$("#idCreateur").val(),
            success:function(data)
            {
                $("#lesDeals").empty();
                $("#lesDeals").append(data);
            },
            error:function()
            {
                alert("Erreur dans la récupération des deals")
            }
        }
    )
}