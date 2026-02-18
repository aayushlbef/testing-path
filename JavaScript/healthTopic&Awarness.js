function click(id, location){
    id.addEventListener("click", ()=>{
    window.location.href = location;
})
}

let mha = document.getElementById("MHA")
click(mha, "/HTML/HealthTopic&Awareness/mentalHealthAwarness.html")

let ph = document.getElementById("PF")
click(ph, "/HTML/HealthTopic&Awareness/physicalHealth.html")

let nhe = document.getElementById("NHE")
click(nhe, "/HTML/HealthTopic&Awareness/nutrition&HealthyEating.html")

let sm = document.getElementById("SM")
click(sm, "/HTML/HealthTopic&Awareness/stressManagement.html")

let sh = document.getElementById("SH")
click(sh, "/HTML/HealthTopic&Awareness/sleepHygiene.html")

let aa = document.getElementById("AA")
click(aa, "/HTML/HealthTopic&Awareness/adictionAwarness.html")