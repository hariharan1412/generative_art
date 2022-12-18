class ascii{

  constructor(gloria){
    
    // console.log(gloria)
    this.gloria = gloria
    console.log(this.gloria)
  }
  
  value(){
    
    gloria = gloria.loadPixels();

    this.p = [];
    console.log(this.gloria.height , this.gloria.width);

    for (let j = 0; j < this.gloria.height; j++) {
      let p_ = []
      
      for (let i = 0; i < this.gloria.width; i++) {
        const pixelIndex = (i + j * this.gloria.width) * 4;
        const r = this.gloria.pixels[pixelIndex + 0];
        const g = this.gloria.pixels[pixelIndex + 1];
        const b = this.gloria.pixels[pixelIndex + 2];

        const avg = (r + g + b) / 3;

        p_.push(avg)

      }
      this.p.push(p_)
    }

    return this.p

  }

  draw(){
    
    console.log(this.gloria) 
    console.log(this.gloria.width, this.gloria.height)
    for(let i = 0 ; i < this.gloria.height; i++){
      for(let j = 0 ; j < this.gloria.width; j++){
      
          fill(this.p[i][j])
          rect(j*10 , i*10 , 10 , 10 )

      }
    }
    
  }

}

