// the default number of photos is 3. if you have more photos, change Photos number
let Photos = 3;



let Number = 1;
Photos = Photos + 1;

function PrevSlide() {
    Number -= 1;
    if (Number === 0) {
        document.getElementById("img").src = 'pic/pic%20(1).jpg';
        Number = 1;
    }
    document.getElementById("img").src = 'pic/pic%20(' + Number + ').jpg';
}

function NextSlide() {
    Number += 1;
    if (Number === Photos) {
        document.getElementById("img").src = 'pic/pic%20(1).jpg';
        Number = 1;
    }
    document.getElementById("img").src = 'pic/pic%20(' + Number + ').jpg';

}

function AutomaticNextSlide() {
    Number += 1;
    if (Number === Photos) {
        document.getElementById("img").src = 'pic/pic%20(1).jpg';
        Number = 1;
    }
    document.getElementById("img").src = 'pic/pic%20(' + Number + ').jpg';
    setTimeout(AutomaticNextSlide, 4000);
}
