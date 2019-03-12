function showDiv(divIdHide, divIdShow, style, subtitle)
{
    document.getElementById(divIdHide).style.display = 'none';
    document.getElementById(divIdShow).style.display = style;
    document.getElementById("subtitle").innerHTML = subtitle;
}