

const antal_vinster = document.getElementById("antalvinster")
const svaretdiv = document.getElementById("svar_div")

const vinster = ["godis", "lyxvilla", "kamera", "mjölk"]

function buttonOnclick(e){


    console.log(`funkar e`)

    let vinst = `<h3>Dina vinster</h3>`

    let antalv = antal_vinster.value;

    console.log(`funkar e ${antalv}`);

    if( antalv < 3 && antalv > 0){
        
        
        for (i=0; i<antalv; i++){
            let slumptal = Math.floor(Math.random() * vinster.length);
            let t_vinst = vinster[slumptal];

            vinst += `<p>${t_vinst} </p>`
        }
        svaretdiv.innerHTML=vinst
    }
    else{
        alert("för många eller för få lotter")
    }
    


}