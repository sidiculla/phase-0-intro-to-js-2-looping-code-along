                                                                                                                                       
//function writeCards(["Guadalupe", "Ollie", "Aki"] , "surprise")
function writeCards(array , event){
    const newArray = [];
    for (let i=0;i<3;i++){
        newArray[i]= (`Thank you, ${array[i]}, for the wonderful ${event} gift!`) ;
    }
    return newArray;

}


function countDown(n){
    let i =0;
    while (i<n+1){
        console.log(n--);
    }
}