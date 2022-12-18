class cell{

    constructor( i , j , s , w , h , alive ){
        
        this.row = i;
        this.col = j;

        this.s = s;

        this.w = w;
        this.h = h;

        this.Alive = alive;
        this.stay = false;

        this.body = "*";
        
        this.eternal = false;

    }

    make(p){
        stroke(255);
        strokeWeight(0.1);
        
        
        if( this.stay || this.eternal ){
            
            try{
                if (p[this.col][this.row] > 5){
                    fill(p[this.col][this.row]);
                    this.eternal = true;
                }
                else{
                    fill(0);       
                    // fill(0 , 255 , 0);        

                }
            }
            catch(e){
                // fill(0 , 255 , 0);        
                fill(0);        
            }
        }

        else{
            fill(0 , 0 , 0);
        }

        rect(this.row*this.s , this.col*this.s , this.s-1 , this.s-1);
    }

    add_neibour(Neibour){
        
        this.neibour_count = 0

        if( this.row > 0){
            if( Neibour[this.row - 1][this.col].Alive ){
            
                this.neibour_count += 1
            }
        }

        if( this.row < this.w -1){
                if( Neibour[this.row + 1][this.col].Alive ){

            
                this.neibour_count += 1
            }
        
        }

        if( this.col > 0){

            if( Neibour[this.row][this.col- 1].Alive ){
            
                this.neibour_count += 1
            }
        }


        if( this.col < this.h -1 ){

                if( Neibour[this.row][this.col + 1].Alive ){
            
                this.neibour_count += 1
            }
        }

        if( this.row > 0 && this.col > 0){
                if( Neibour[this.row - 1][this.col -1].Alive ){
            
                this.neibour_count += 1
            }
        
        }

        if( this.row < this.w - 1 && this.col < this.h - 1){
                if( Neibour[this.row + 1][this.col + 1].Alive ){
            
                this.neibour_count += 1
            }
        }

        if( this.row < this.w - 1 && this.col > 0){
                if( Neibour[this.row + 1][this.col - 1].Alive ){
            
                this.neibour_count += 1
            }
        
        }

        if( this.row > 0 && this.col < this.h - 1){
            if( Neibour[this.row - 1][this.col + 1].Alive ){
            
                this.neibour_count += 1
            }
        
        }


        if( this.neibour_count < 2){

            this.Alive = false
        }


        else if( this.neibour_count > 3){

            this.Alive = false
        }
        

        else if( this.Alive  && this.neibour_count == 2){

            this.Alive = true
        }


        else if( this.neibour_count == 3){

            this.Alive = true
        }

        else{

            this.Alive = false
        }
        
        // if()
     
    }

}