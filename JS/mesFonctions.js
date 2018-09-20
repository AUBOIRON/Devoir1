function Exo1()
{
    //alert("EXO1");
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesCategories.php",
            success:function(data)
            {
                $('#divCategories').empty();
                $('#divCategories').append(data);
            },
            error:function()
            {
                alert("Erreur sur les activités");
            }
        }
    );
}
function Exo2()
{
    //alert("EXO2");
}
function AfficherLesServices()
{   
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesServices.php",
            data:"id="+$('#lstCategorie').val(),
            success:function(data)
            {
                $('#divServices').empty();
                $('#divServices').append(data);
            },
            error:function()
            {
                alert("Erreur sur les activités");
            }
        }
    );
}