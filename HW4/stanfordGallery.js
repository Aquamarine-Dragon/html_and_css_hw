var photoArray = [
    {filename: "memchu.jpg",
        caption: "Stanford Memorial Church - the church used to have an 80' bell tower, which fell in the 1906 earthquake."},
    {filename: "quad.jpg",
        caption: "The Stanford Quad"},
    {filename: "hoop.jpg",
        caption: "The <i>Red Hoop Fountain</i> with Green Library in the background."},
    {filename: "memorial-court.jpg",
        caption: "Memorial Court (in the front of the Quad) with Rodin's <i>Burghers of Calais</i> statues."},
    {filename: "gates.jpg",
        caption: "The Gates Building - home of Stanford Computer Science."},
    {filename: "stone-river.jpg",
        caption: "The Stone River statue near the Cantor Arts Center (Stanford's own art museum)."},
];

var picDiv = document.getElementById("photoSection");
var photo = document.getElementById("photo");



handleResize();

function handleResize() {
    picDiv.style.marginLeft = (window.innerWidth-photo.width) * 0.5 + "px";


}

function preciousPic() {
    var currentPic = document.getElementById("photo");
    console.log("current: " + currentPic.getAttribute("src"));
    var index;
    for (var i = 0; i < photoArray.length; i++) {
        if (currentPic.getAttribute("src") === photoArray[i].filename) {
            console.log("sucessfully matched! " + i + " " + photoArray[i].filename)

            if ((i - 1) !== -1) {
                document.getElementById("photo").src = photoArray[i-1].filename;
                index = i-1;
                break;
            }else{
                document.getElementById("photo").src = photoArray[5].filename;
                index = 5;
                break;
            }
        }
    }
    document.getElementById("caption").innerHTML = photoArray[index].caption;
}

function nextPic(){
    var currentPic = document.getElementById("photo");
    console.log("current: " + currentPic.getAttribute("src"));
    var index;

    for (var i = 0; i < photoArray.length; i++) {
        if (currentPic.getAttribute("src") === photoArray[i].filename) {
            console.log("sucessfully matched! " + i + " " + photoArray[i].filename);
            if ((i + 1) !== 6) {
                document.getElementById("photo").src = photoArray[i+1].filename;
                index = i+1;
                break;
            }else{
                document.getElementById("photo").src = photoArray[0].filename;
                index = 0;
                break;
            }
        }
    }
    document.getElementById("caption").innerHTML = photoArray[index].caption;

}




document.getElementById("forwardOverlay").addEventListener("click", preciousPic, false);
document.getElementById("backwardOverlay").addEventListener("click", nextPic, false);
window.addEventListener("resize",handleResize,false);










