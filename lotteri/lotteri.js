const svar_div = document.getElementById("svara_div")
const antal_vinster = document.getElementById("input_antal_vinster")

const vinster = ["Solsto", "Röd Porche", "Handduk", "Ockelbo 500", "BMX cykel", "surf Bräda"]

function slumpaClick() {
    console.log(`click`)
    let vinst = `<h3>Dina vinster</h3>`
    let antalv = antal_vinster.value;
    let int_antalv = parseInt(antalv);

    for (i=0; i<int_antalv; i++){
        let slumptal =Math.floor(Math.random() * 6) ;
        let t_vinst = vinster[slumptal];
        vinst +=`<p>${t_vinst}</p>`;
    }
    //console.log(`vinster:${vinst}`);
    svar_div.innerHTML = vinst;
}