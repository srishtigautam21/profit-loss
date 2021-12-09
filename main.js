var profitLossInput=document.querySelectorAll('.input-price');
var btnInput=document.querySelector("#input-btn");
var output=document.querySelector("#output");

function clickHandler()
{
    var currentPrice=Number(profitLossInput[2].value);
    var initialPrice=Number(profitLossInput[0].value);
    var stockquantity=Number(profitLossInput[1].value);
    if(currentPrice<=0 || initialPrice<=0 || stockquantity<=0)
    {
        output.style.display="block";
        output.innerText="All the quantities in the input should be greater than zero";
    }
    else if(currentPrice>initialPrice)
    {
        var profit=(currentPrice-initialPrice) * stockquantity;
        var profitpercentage=(profit/initialPrice) *100;
        output.innerText="Hey!! the profit is " + profit + " and the percentage is "
        + profitpercentage + "%";

    }
    else if(initialPrice>currentPrice)
    {
        var loss=(initialPrice-currentPrice) * stockquantity;
        var losspercentage=(loss/initialPrice) * 100;
        output.innerText="Hey!! the loss is " + loss + " and the percentage is "
        + losspercentage + "%";
       
    }
    else{
        output.innerText="You faced no loss no profit!!";

    }

}

btnInput.addEventListener("click",clickHandler);