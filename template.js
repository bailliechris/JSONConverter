
function convert(){
    let dataString = document.getElementById("data").value;
    dataString = dataString.trim();
    dataString = dataString.replace(/(\r\n|\n|\r)/gm, ",");

    let dataOption = document.getElementById("options").value;

    let dataArray = dataString.split(",");
    document.getElementById("output").innerHTML = dataArray;

    dataString = "[";
    if (dataArray.length % 2 === 0){
        for (let i=0; i<dataArray.length; i++){
            if (i===0 || (i % 2) === 0){
                if (dataOption === "Variables"){
                    dataString = dataString + "{" + dataArray[i].trim() + ":";
                }
                else if (dataOption ==="Twin String"){
                    dataString = dataString + "{\"" + dataArray[i].trim() + "\":"; 
                }
                else if (dataOption === "Keyword Quiz"){
                    dataString = dataString + "{\"word\":" + "\"" + dataArray[i].trim() + "\","; 
                }
            }
            else{
                if (dataOption === "Keyword Quiz"){
                    dataString = dataString + "\"def\":" + "\"" + dataArray[i].trim() + "\"}";
                }
                else {
                    dataString = dataString + "\"" + dataArray[i].trim() + "\"}";
                }

                if (i <(dataArray.length -1)){
                    dataString = dataString + "," 
                }
            }
        }

        dataString = dataString + "]";


        document.getElementById("output").innerHTML = dataString;
 



    }
    else{
        document.getElementById("output").innerHTML = "Not a valid input";
    }
}