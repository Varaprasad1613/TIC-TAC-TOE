var p1="X";
var p2="O";

var player = p1 ;

function check()
{
    var ele_one=document.getElementById("b1_1").innerHTML;
    var ele_two=document.getElementById("b1_2").innerHTML;
    var ele_three=document.getElementById("b1_3").innerHTML;
    var ele_four=document.getElementById("b2_1").innerHTML;
    var ele_five=document.getElementById("b2_2").innerHTML;
    var ele_six=document.getElementById("b2_3").innerHTML;
    var ele_seven=document.getElementById("b3_1").innerHTML;
    var ele_eight=document.getElementById("b3_2").innerHTML;
    var ele_nine=document.getElementById("b3_3").innerHTML;

    var win_P= false;
    var player_choose;

    if((ele_one == 'X' && ele_two == 'X'  && ele_three == 'X') || (ele_one == 'O' && ele_two == 'O'  && ele_three == 'O')) 
    {
        win_P =true;
        if(ele_one == 'X')
        {
            player_choose = "Player One"
        }
        else{
            player_choose = "Player Two"
        }
    }
    else if((ele_four == 'X' && ele_five == 'X' && ele_six == 'X') || (ele_four == 'O' && ele_five == 'O' && ele_six == 'O') )
    {
        win_P =true;
        if(ele_four == 'X')
        {
            player_choose = "Player One"
        }
        else{
            player_choose = "Player Two"
        }
    }
    else if((ele_seven == 'X' && ele_eight == 'X' && ele_nine == 'X') || (ele_seven == 'O' && ele_eight == 'O' && ele_nine == 'O'))
    {
        win_P =true;
        if(ele_seven == 'X')
        {
            player_choose = "Player One"
        }
        else{
            player_choose = "Player Two"
        }
    }
    else if((ele_one == 'X' && ele_four=='X' && ele_seven=='X') || (ele_one == 'O' && ele_four=='O' && ele_seven=='O') )
    {
        win_P =true;
        if(ele_one == 'X')
        {
            player_choose = "Player One"
        }
        else{
            player_choose = "Player Two"
        }
    }
    else if((ele_two == 'X' && ele_five == 'X' && ele_eight == 'X') || (ele_two == 'O' && ele_five == 'O' && ele_eight == 'O'))
    {
        win_P =true;
        if(ele_two == 'X')
        {
            player_choose = "Player One"
        }
        else{
            player_choose = "Player Two"
        }
    }
    else if((ele_three == 'X' && ele_six == 'X' && ele_nine == 'X') || (ele_three == 'O' && ele_six == 'O' && ele_nine == 'O'))
    {
        win_P =true;
        if(ele_three == 'X')
        {
            player_choose = "Player One"
        }
        else{
            player_choose = "Player Two"
        }
    }
    else if((ele_one == 'X' && ele_five == 'X' && ele_nine == 'X') || (ele_one == 'O' && ele_five == 'O' && ele_nine == 'O') )
    {
        win_P =true;
        if(ele_one == 'X')
        {
            player_choose = "Player One"
        }
        else{
            player_choose = "Player Two"
        }
    }
    else if((ele_three == 'X' && ele_five=='X' && ele_seven == 'X') || (ele_three == 'O' && ele_five=='O' && ele_seven == 'O'))
    {
        win_P =true;
        if(ele_three == 'X')
        {
            player_choose = "Player One"
        }
        else{
            player_choose = "Player Two"
        }
    }


    if(win_P == true)
    {
        document.getElementById("win_dec").innerHTML=player_choose+" has won the game";
        reset();
    }

}

function myFunc(ide)
{
    var eleToWrite=document.getElementById(ide);
    
    if(eleToWrite.innerHTML!="")
    {
        alert("Click another block");
        return;
    }
    else if(player == p1)
    {
        eleToWrite.innerHTML='X';
        player=p2;
        if(check())
        {
            return;
        }
        document.getElementById("pTwo").classList.add("redMe");
        document.getElementById("pOne").classList.remove("redMe");
    }
    else
    {
        eleToWrite.innerHTML='O';
        player=p1;
        if(check())
        {
            return;
        }
        document.getElementById("pOne").classList.add("redMe");
        document.getElementById("pTwo").classList.remove("redMe");
    }
    allFilled();
}