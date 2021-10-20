const timer = document.getElementById("time");
const word = document.getElementById("word");
const holder = document.getElementById("holder");

let points = 0;
let seconds = 60;

const nodes = ["Adoption","Alicia Edwards","Almonzo","Amanda Whipple","Amitié","Amuvarte indienne","Animal","Ardoise","Attelage","Aveugle","Bandit","Bible","Blé","Cabane",
"Cadeau","Canne à pêche","Capeline","Caroline Ingalls","Champs","Chapeaux","Chariot","Charlotte Stewart","Charrue","Cheminée","Cheval","Citrouille","Cochon",
"Corbeau","Craies","Dakota","Dictionnaire","Dindons","Ecole","Eglise","Etats-Unis","Famille","Feux","Figurine","Foi","Halloween","Hirondelles","Incendie","Indépendence",
"James","Jardin","Journal","Jupon","L'appel","L'heure de la retraite","La discipline","La Grange","La réincarnation de Nellie","Les chasseurs","Lunettes","Mademoiselle Beadle","Maison",
"Mercantile","Minnesota"];

nodes.sort(() => 0.5-Math.random());

word.innerHTML = nodes[0].toLowerCase();

holder.onkeyup = () => {
    if(holder.value === word.innerHTML){
        nodes.sort(() => {return 0.5-Math.random()});
        word.innerHTML = nodes[0].toLowerCase();
        points++;
        holder.value ="";
    }
}

function countDown(){
    point = 0;
    const countDownTimer = setInterval(() => {
        seconds--;
        timer.innerHTML = seconds;

        if(seconds === 0){
            alert("Game Over! Your score is : " + points);
            seconds = 60;
            points = 0;

            clearInterval(countDown);
        }
    }, 1000);

    
}
countDown();
