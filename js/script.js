
function moveLeft(sliderid) {
    let slider, slidercontent, textIndent;

    slider = document.getElementById(sliderid);

    if (!slider) return false;

    slidercontent = slider.getElementsByClassName('slidercontent')[0]; 

    textIndent = parseInt(slider.style.textIndent || 0);
    
    slider.style.textIndent=(textIndent-25)+"%";

    slider.getElementsByClassName('arrow left')[0].style.visibility = "visible";


    if (slider.style.textIndent >= -50+"%")  {
       slider.style.textIndent= -50+"%";
       slider.getElementsByClassName('arrow right')[0].style.visibility = "hidden";    
    };

    return true;

}

function moveRight(sliderid) {
    let slider, slidercontent, textIndent;

    slider = document.getElementById(sliderid);

    if (!slider) return false;

    slidercontent = slider.getElementsByClassName('slidercontent')[0];

    textIndent = parseInt(slider.style.textIndent || 0);
    
    slider.style.textIndent=(textIndent+25)+"%";

    slider.getElementsByClassName('arrow right')[0].style.visibility = "visible";

    if (slider.style.textIndent >= 0+"%")  {
        slider.style.textIndent=(0)+"%";
        slider.getElementsByClassName('arrow left')[0].style.visibility = "hidden";
    };

    return true;

}
