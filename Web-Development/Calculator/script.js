function clearScreen()
{
    document.getElementById('input').value="";
    document.getElementById('answer').value="";
}

function getElement(num)
{
    var inp=document.getElementById('input')
    switch(num)
    {
        case 0:
            inp.value+=0;
            break;
        case 1:
            inp.value+=1;
            break;
        case 2:
            inp.value+=2;
            break;
        case 3:
            inp.value+=3;
            break;
        case 4:
            inp.value+=4;
            break;
        case 5:
            inp.value+=5;
            break;
        case 6:
            inp.value+=6;
            break;
        case 7:
            inp.value+=7;
            break;
        case 8:
            inp.value+=8;
            break;
        case 9:
            inp.value+=9;
            break;       
    }


}


function backspace()
{
    var inp=document.getElementById('input')
    if(inp.value.length>0)
    {
        inp.value=inp.value.substring(0,inp.value.length-1);
    }
    else
    {
        inp.value="";
    }
}


function getOperand(operand)
{
    switch(operand)
    {
    case '.':
        document.getElementById('input').value+='.';
        break;

    case '*':
        document.getElementById('input').value+='*';
        break;
    case '/':
        document.getElementById('input').value+='/';
        break;

    case '+/-':
        document.getElementById('input').value='-'+ document.getElementById('input').value;
        break;
    case '+':
        document.getElementById('input').value+='+'
        break;
    case '-':
        document.getElementById('input').value+='-'
        break;
    }
}



function compute()
{
    document.getElementById('answer').value=eval(document.getElementById('input').value);
}