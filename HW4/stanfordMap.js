"use strict";
var mapFrame = document.getElementById("map-frame");
var map = document.getElementById("map");
var mapDiv = document.getElementById("map-div");
var zoomBtn = document.getElementById("zoom-btn");
var moveBtn = document.getElementById("move-btn");



resizeFrame();

function resizeFrame() {
}

var isDragging = false;

mapDiv.onmousedown = function handleMouseDown(evt) {

    evt.preventDefault();
    // console.log(evt.clientX);
    var specialX = evt.clientX - mapDiv.offsetLeft;
    var specialY = evt.clientY - mapDiv.offsetTop;
    // console.log(specialX);
    mapFrame.style.cursor = "move";

    mapFrame.onmousemove = function (evt) {
        evt.preventDefault();
        var newX = evt.clientX - specialX;
        var newY = evt.clientY - specialY;
        mapDiv.style.left = newX + "px";
        mapDiv.style.top = newY + "px";
    };

    mapFrame.onmouseleave = function () {
        mapFrame.onmousemove = null;
        mapFrame.onmouseup = null;
    };
    mapFrame.onmouseup = function () {
        mapFrame.onmousemove = null;
        mapFrame.onmouseup = null;
        mapFrame.style.cursor = "default";

    }
};

function handleDblClick(evt) {
    evt.preventDefault();
    var initialPosX = evt.clientX - mapFrame.offsetLeft - 20;
    var initialPosY = evt.clientY - 50;
    if (initialPosX >= 0 && initialPosX <= mapFrame.offsetWidth && initialPosY >= 0 && initialPosY <= mapFrame.offsetHeight) {
        console.log(mapFrame.offsetWidth);
        var deltaX = 0.5*mapFrame.offsetWidth - initialPosX;
        var deltaY = 0.5*mapFrame.offsetHeight - initialPosY;
        var finalX = mapDiv.offsetLeft + deltaX;
        var finalY = mapDiv.offsetTop + deltaY;
        mapDiv.style.left = finalX + "px";
        mapDiv.style.top = finalY + "px";
    }


}

function zoomIn() {
    if (map.getAttribute("src") === "map-s.gif") {
        console.log("yep!");
        map.src = "map-m.gif";
        var initialPosX = 0.5*mapFrame.offsetWidth - mapDiv.offsetLeft;
        var initialPosY = 0.5*mapFrame.offsetHeight - mapDiv.offsetTop;
        console.log("initialX: " + initialPosX + ", initialY: " + initialPosY);
        var leftX = -(initialPosX * 0.59 - mapDiv.offsetLeft);
        var topY = -(initialPosY * 0.59 - mapDiv.offsetTop);
        // console.log("leftX: " + leftX + ", topY: " + topY);
        mapDiv.style.left = leftX + "px";
        mapDiv.style.top = topY + "px";
    } else if (map.getAttribute("src") === "map-m.gif") {
        map.src = "map-l.gif";
        initialPosX = 0.5*mapFrame.offsetWidth - mapDiv.offsetLeft;
        initialPosY = 0.5*mapFrame.offsetHeight - mapDiv.offsetTop;
        console.log("initialX: " + initialPosX + ", initialY: " + initialPosY);
        leftX = -(initialPosX * 0.49 - mapDiv.offsetLeft);
        topY = -(initialPosY * 0.49 - mapDiv.offsetTop);
        // console.log("leftX: " + leftX + ", topY: " + topY);
        mapDiv.style.left = leftX + "px";
        mapDiv.style.top = topY + "px";
    }else if(map.getAttribute("src") === "map-l.gif"){
        map.src = "map-xl.gif";
        initialPosX = 0.5*mapFrame.offsetWidth - mapDiv.offsetLeft;
        initialPosY = 0.5*mapFrame.offsetHeight - mapDiv.offsetTop;
        console.log("initialX: " + initialPosX + ", initialY: " + initialPosY);
        leftX = -(initialPosX * 0.33 - mapDiv.offsetLeft);
        topY = -(initialPosY * 0.33 - mapDiv.offsetTop);
        // console.log("leftX: " + leftX + ", topY: " + topY);
        mapDiv.style.left = leftX + "px";
        mapDiv.style.top = topY + "px";
    }

}

function zoomOut() {
    if (map.getAttribute("src") === "map-l.gif") {
        map.src = "map-m.gif";
        var initialX = 0.5*mapFrame.offsetWidth - mapDiv.offsetLeft;
        var initialY = 0.5*mapFrame.offsetHeight - mapDiv.offsetTop;
        var leftX = 0.5*mapFrame.offsetWidth-initialX * 0.67 ;
        var topY = 0.5*mapFrame.offsetHeight - initialY * 0.67;
        mapDiv.style.left = leftX + "px";
        mapDiv.style.top = topY + "px";

    } else if (map.getAttribute("src") === "map-m.gif") {
        map.src = "map-s.gif";
        initialX = 0.5*mapFrame.offsetWidth - mapDiv.offsetLeft;
         initialY = 0.5*mapFrame.offsetHeight - mapDiv.offsetTop;
         leftX = 0.5*mapFrame.offsetWidth-initialX * 0.626 ;
         topY = 0.5*mapFrame.offsetHeight - initialY * 0.626;
        mapDiv.style.left = leftX + "px";
        mapDiv.style.top = topY + "px";
    }else if (map.getAttribute("src") === "map-xl.gif") {
        map.src = "map-l.gif";
        initialX = 0.5*mapFrame.offsetWidth - mapDiv.offsetLeft;
        initialY = 0.5*mapFrame.offsetHeight - mapDiv.offsetTop;
        leftX = 0.5*mapFrame.offsetWidth-initialX * 0.75 ;
        topY = 0.5*mapFrame.offsetHeight - initialY * 0.75;
        mapDiv.style.left = leftX + "px";
        mapDiv.style.top = topY + "px";
    }

}

function sUp() {
    mapDiv.style.top = mapDiv.offsetTop - 0.5*mapFrame.offsetHeight + "px";
}

function sLeft() {
    mapDiv.style.left = mapDiv.offsetLeft - 0.5*mapFrame.offsetWidth + "px";
}

function sRight() {
    mapDiv.style.left = mapDiv.offsetLeft + 0.5*mapFrame.offsetWidth + "px";
}

function sDown() {
    mapDiv.style.top = mapDiv.offsetTop + 0.5*mapFrame.offsetHeight + "px";
}


document.addEventListener("dblclick", handleDblClick, false);
window.addEventListener("resize", resizeFrame, false);
document.getElementById("zoom-in").addEventListener("click", zoomIn, false);
document.getElementById("zoom-out").addEventListener("click", zoomOut, false);
