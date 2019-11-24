var player = [0,0];


     var cells = 0;

     while(cells < 25)
     {

       for(var i=0; i<2; i++)
       {
         var die = (Math.floor(Math.random() * 6) + 1);
         document.write("Player " + (i+1) + "  rolls the die: " + die+" ");
         player[i] = player[i] + die;

                   if(player[i]==15)
                     {
                         player[i] = 5;
                         document.write("You got eaten by the snake. You will return to position 5" + "<br>");
                     }
                   else if(player[i]==23)
                     {
                       player[i] = 16;
                       document.write("You got eaten by the snake. You will return to position 16" + "<br>");
                     }
                   else if(player[i]==8)
                     {
                       player[i] = 15;
                       document.write("You found a ladder, moving to position 15" + "<br>");
                     }
                   else if(player[i]==19)
                     {
                       player[i] = 24;
                       document.write("You found a ladder, moving to position 24" + "<br>");
                     }
                   else
                     {
                      document.write("Move to position " + player[i] + "<br>");
                     }


                   if(player[i] > 24)
                    {

                       document.write("Player " + (i+1) + " won the game" + "<br>");
                       break;
                     }
                 }

      document.write("<br>");
       if (player[0] > player[1])
       {
         cells = player[0];
       }
       else {
         cells = player[1]
       }

     }

       document.write("End of the match" + "<br>");
