function findMonth(){

    var month = document.getElementById("monthInput").value;

    switch(month) {

        case "1":
            console.log("Je Leden.");

            document.getElementById("monthOutput").innerHTML = "Je Leden"

            break;
        
        case "2":
            console.log("Je Únor.");
            document.getElementById("monthOutput").innerHTML = "Je Únor"
            break;
        
        case "3":
            console.log("Je Březen.");
            document.getElementById("monthOutput").innerHTML = "Je Březen"
            break;

        case "4":
            console.log("Je Duben");
            document.getElementById("monthOutput").innerHTML = "Je Duben"
            break;
        
        case "5":
            console.log("Je Květen");
            document.getElementById("monthOutput").innerHTML = "Je Květen"
            break;

        case "6":
            console.log("Je Červen");
            document.getElementById("monthOutput").innerHTML = "Je Červen"
            break;

        case "7":
            console.log("Je Červenec");
            document.getElementById("monthOutput").innerHTML = "Je Červenec"
            break;
            
        case "8":
            console.log("Je Srpen.");
            document.getElementById("monthOutput").innerHTML = "Je Srpen"
            break;
        
        case "9":
            console.log("Je Září.");
            document.getElementById("monthOutput").innerHTML = "Je Září"
            break;
        
        case "10":
            console.log("Je Říjen.");
            document.getElementById("monthOutput").innerHTML = "Je Říjen"
            break;

        case "11":
            console.log("Je Listopad");
            document.getElementById("monthOutput").innerHTML = "Je Listopad"
            break;

        case "12":
            console.log("Je Prosinec");
            document.getElementById("monthOutput").innerHTML = "Je Prosinec"
            break;
                
        
    
    }

}




function evenNumbers(){
    
    let i=1 

    while (i<=20){

        if(i%2==0){

        console.log(i)

        document.getElementById("evenNumberOutput").innerHTML += " " + (i)

        }

        i++
    }

}



function checkPass(){

    do{

        var password = prompt("Jaké je heslo? (Je to heslo)");

    }while(password !== "heslo");

    alert("Správně")
    
}

