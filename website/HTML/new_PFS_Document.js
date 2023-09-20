function recalc() {
    for (let e of document.getElementsByTagName("*")) {
        calculateGradient(e);
    }      
}
window.onresize = recalc;

function calculateGradient(e) {
    
    gradient = getGradientFromClassname(e.className);
    if (gradient == null)
      return;
    startX = gradient.startX;
    startY = -gradient.startY; 
    endX = gradient.endX;
    endY = -gradient.endY;
    vx = endX - startX;
    vy = endY - startY;
    width = e.getBoundingClientRect().width;
    height = e.getBoundingClientRect().height;
 

    degree = (180/Math.PI) * (-Math.atan2(vy * height, vx * width)) + 90;
    line = Math.abs(width * Math.sin(degree/(180/Math.PI))) + Math.abs(height * Math.cos(degree/(180/Math.PI)))
    ruler = Math.sqrt(Math.pow(vx * width, 2) + Math.pow(vy * height, 2));
    factor = line / ruler;


    normX = (vx*width)/ruler;
    normY = (vy*height)/ruler;

    startVX = startX*width;
    startVY = startY*height;

    //FIRST QUADRANT
    if (vx >= 0 && vy <= 0) {
        startVX = startX * width;
        startVY = startY * height;
    }
    //SECOND QUADRANT
    if (vx <= 0 && vy <= 0) {
        startVX = startX * width - width;
        startVY = startY * height;
    }
    //THRID QUADRANT
    if (vx <= 0 && vy >= 0) {
        startVX = startX *width - width
        startVY = height + startY * height;
       
    }
    //FORTH QUADRANT
    if (vx >= 0 && vy >= 0) {
        startVX = startX * width;
        startVY = height + startY * height;

    }

    dist = normX * startVX + normY * startVY;
    offset = dist / line;
    
    linearGradient = "linear-gradient(" + degree + "deg,";

    index = 0;
    for (let cstop of gradient.stops) {
        if (index != 0) {
            linearGradient += ",";
        }
        linearGradient += cstop.color;

        per = ((cstop.offset) / factor) + offset;


        linearGradient += " " + (100 * per) +"%";
        index++;
    }

    linearGradient += ")";

    e.style.backgroundImage = linearGradient;
}

function getGradientFromClassname(name) {
    for (let gradient of gradient_map) {   
        if (name === gradient.className) {           
            return gradient;
        }
    }
}

