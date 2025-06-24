function buttonwork () {
    window.location.href="bj/index.html";
}


 // code to create a D20 dice roller

        // define the range of numbers to pick from
        var lowest = 1;             // lowest possible side of the dice
        var highest = 20;           // highest possible side of the dice
        var numbers_of_dice = 1;    // how many dice to roll     
        
        var this_roll = []; // array to store the results of this roll

        for (var j = 1; j <= numbers_of_dice; j++) {

            // loop for the number of dice

            // for each dice, generate a number between lowest and highest
            var dice_face = Math.floor(Math.random() * (highest-lowest+1) + lowest);
            this_roll.push(dice_face); //store this in the array
        }
            
        
        // print all the generated rolls
            
        for (j = 0; j < this_roll.length; j++) {

            // loop through the dice array 

            //print each dice roll value followed by a space
            document.write(this_roll[j]);
            document.write(" ");

        }
            
        
    

    /* 

    Sample output 
    */