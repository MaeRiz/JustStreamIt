getDataByCat('action')
getDataByCat('horror')
getDataByCat('sci-fi')


var modal = document.getElementById("modalBox");
var span = document.getElementsByClassName("close")[0];

function showModal(movieid) {
    
    let url = "http://localhost:8000/api/v1/titles/" + movieid;
    
    $.get(url).done(changeModalContent);
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
  }
};

function scrollWin(x, y) {
    window.scrollBy(x, y);
};

function getDataByCat(genre) {

    let resultsp1;
    let resultsp2;
    let results;
    let url_page1 = 'http://localhost:8000/api/v1/titles/?genre=' + genre + '&sort_by=-imdb_score';
    let url_page2 = 'http://localhost:8000/api/v1/titles/?genre=' + genre + '&sort_by=-imdb_score&page=2';

    $.get(url_page1).done(
        function(data) {
            resultsp1 = data.results;

            $.get(url_page2).done(
                function(data) {
                    resultsp2 = data.results;
                
                    results = resultsp1.concat(resultsp2);
        
                    changeSliderContent(genre, results)
                }
            );
        }
    );
};


function changeSliderContent(genre, data) {

    let slider = document.getElementById(genre);
    let sliders = slider.getElementsByClassName('movie_item');


    for (let i = 0; i < sliders.length; i++) {

        let img = sliders[i].getElementsByTagName('img')[0];
        img.src = data[i].image_url;
        img.alt = data[i].title;
        img.setAttribute('onclick','showModal(' + data[i].id +')' )

      };
      
};


let changeModalContent = function(data) {

    let title = document.getElementById('movie-title');
    let desc = document.getElementById('desc');
    let rated = document.getElementById('rated');
    let date = document.getElementById('date');
    let sec = document.getElementsByClassName('s-cont');
    let image = document.getElementById('modal-image');


    title.innerHTML = data.title  + " - " + data.duration + "min";
    desc.innerHTML = data.description;
    date.innerHTML = data.year;
    imdb.innerHTML = "Imdb: " + data.imdb_score;
    sec[0].innerHTML = data.genres;
    sec[1].innerHTML = data.rated;
    sec[2].innerHTML = data.directors;
    sec[3].innerHTML = data.actors;
    sec[4].innerHTML = data.countries;
    sec[5].innerHTML = data.worldwide_gross_income + " entrés";
    image.src = data.image_url;
};



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
};

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
};
