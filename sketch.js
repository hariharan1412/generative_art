
let width = 600
let height = 600

let s = 10

let w = width /s
let h = height / s

let life = []

var gloria;

var asc;
var img;

function preload() {
  gloria = loadImage("gloria48.jpg");
}


function setup() {
    let c = createCanvas(width, height);
    frameRate(10);

    for(let i = 0 ; i < w ; i++){
        let f = []
        for(let j = 0 ; j < h ; j++){
            
            n = random(0 , 100)

            if(n < 10){
                f.push(new cell(i , j , s , w , h ,  true));            
            }
            else{
                f.push(new cell(i , j , s , w , h ,  false));             

            }
        }
        life.push(f);
    }

    asc = new ascii(gloria)
    img = asc.value()
    // asc.draw()
}   

function draw() {
    
    background(0);

    for(let i = 0 ; i < w ; i++){
        for(let j = 0 ; j < h ; j++){
            life[i][j].make(img);
            life[i][j].add_neibour(life);
        }
    }

    for(let i = 0 ; i < w ; i++){
        for(let j = 0 ; j < h ; j++){
            
            if(life[i][j].Alive){
                life[i][j].stay = true;
            }
            else{
                life[i][j].stay = false;
            }

        }
    }   

}

function keyPressed() {

    if (key === 's') {

        saveGif('art.gif', 10);
    //   saveGif('GameofLife.gif', 5);
    }
  }
