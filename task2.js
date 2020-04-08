let data = [{Principal:2500, time: 1.8}, 
    {Principal:1000, time: 5}, 
    {Principal: 3000, time: 1},
    {Principal: 2000, time: 3},
];
function interestCalculator(calc){
    for(let i = 0; i < calc.length; i++){
        if(calc[i].Principal >= 2500 && calc[i].time > 1 && calc[i].time < 3 ){
            calc[i].rate = 3;
        } 
        
        else if(calc[i].Principal >= 2500 && calc[i].time >= 3){
            calc[i].rate =4;
        }
        else if (calc[i].Principal < 2500 || calc[i].time <= 1){
            calc[i].rate = 2; 
        }
        else {
            calc[i].rate = 1;
        }
        {
            calc[i].interest = calc[i].Principal * calc[i].time * calc[i].rate /100;
        }

        
    }
    let interestData = [calc];
        console.log(interestData);
        return interestData;

}
interestCalculator(data);