var img;
var gradient = 1.5;

function preload(){
    img = loadImage("redskins.png");
}

function setup(){
    createCanvas(img.width,img.height);
}

function draw(){
    image(img, 0, 0);
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width; col++){
            var index = (col + row * width) * 4;
            
            var r = pixels[index];
            var g = pixels[index + 1];
            var b = pixels[index + 2];
            var a = pixels[index + 3];
            
            if(keyIsPressed){
                if(key=="2"){
                    color_filter(index,r,g,b,a,row,col);
                }
                if(key=="1"){
                    grey_filter(index,r,g,b,a);
                }
                if(key=="3"){
                    vibrance_filter(index,r,g,b,a,row,col);
                }
                if(key=="4"){
                    light_filter(index,r,g,b,a,row,col);
                }
            }
            else{
               
            }
        }
    }
    
    updatePixels();
}
function grey_filter(index,b){
    pixels[index + 0] =b; //red
    pixels[index + 1] = b; //green
    pixels[index + 2] = b; //blue
    pixels[index + 3] = 255; //alpha

}

function color_filter(index,r,g,b,a,row,col){
    pixels[index] = r + row - 190; //red
    pixels[index + 1] = g + col -190; //green
    pixels[index + 2] = b; //blue
    pixels[index + 3] = a; //alpha
}

function vibrance_filter(index,r,g,b,a,row,col){
    pixels[index] = r*1.50+col*.1; //red
    pixels[index + 1] = g; //green
    pixels[index + 2] = b+row*.5-100; //blue
    pixels[index + 3] = a; //alpha
}

function light_filter(index,r,g,b,a,row,col){
    pixels[index] = r+row/5; //red
    pixels[index + 1] = g+col/7; //green
    pixels[index + 2] = b+col/7; //blue
    pixels[index + 3] = 255; //alpha
}