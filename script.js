// Oppgave 1

 let fruktArray = [];                                                        // Oppretter et array 
         function leggTilFrukt() {
             let fruktInput = document.getElementById('fruktInput').value;   // Henter teksten fra inputfeltet
             if (fruktInput !== "") {                                        // Sjekker at input ikke er tom 
                 fruktArray.push(fruktInput);                                // Legger til inputen i arrayet
                 oppdaterListe();                                            // Oppdaterer listen
                 document.getElementById('fruktInput').value = "";           // Tømmer inputfeltet
             }
         }

         function oppdaterListe() {
             let fruktListe = document.getElementById('fruktListe');         // Henter ul-elementet 
             fruktListe.innerHTML = "";                                      // Tømmer nåværende innhold i ul-elementet

             for (let i = 0; i < fruktArray.length; i++) {
                 let li = document.createElement('li');                      // Oppretter li-element
                 li.textContent = fruktArray[i];                             // Setter teksten til frukten fra arrayet
                 fruktListe.appendChild(li);                                 // Legger li-elementet til i ul-listen
             }
         }


// Oppgave 2 

 let x = Math.floor(Math.random() * 100) + 1;                                // Oppretter en variabel for å lagre en tilfeldig tallverdi mellom 1 og 100

 document.getElementById("Knapp").onclick = function () {                    // Setter opp en funksjon som kjører når knappen med ID Knapp blir klikket
     x = Math.floor(Math.random() * 100) + 1;                                // Genererer en ny tilfeldig tallverdi mellom 1 og 100
     document.getElementById("xlabel").innerHTML = x;                        // Oppdaterer innholdet i label-elementet med ID 'xlabel' med den nye verdien
 };

// Oppgave 3 

document.getElementById("countButton").onclick = function () {                 // Setter opp en funksjon som kjører når knappen med ID 'countButton' blir klikket
    let input = document.getElementById("elementInput").value;                 // Henter verdien fra input-feltet
    
    let elements = input.split(',').map(e => e.trim());                        // Del opp input-strengen på komma og fjern ekstra mellomrom
    
    let counts = {};                                                           // Oppretter et objekt for å telle forekomster av hvert element
    for (let element of elements) {                                            // Går gjennom hvert element i arrayen
        if (element) {                                                         // Sjekker at elementet ikke er tomt
            counts[element] = (counts[element] || 0) + 1;                      // Øker telleren for elementet i objektet
        }
    }
    
    let resultList = document.getElementById("resultList");                    // Henter ul-elementet der resultatene skal vises
    resultList.innerHTML = '';                                                 // Tømmer ul-elementet for å oppdatere resultatene
    
    for (let element in counts) {                                              // Går gjennom hvert element i counts-objektet
        let li = document.createElement('li');                                 // Oppretter et nytt li-element
        li.textContent = `${element}: ${counts[element]}`;                     // Setter teksten til elementet og antallet
        resultList.appendChild(li);                                            // Legger li-elementet til i ul-listen
    }
};


// Oppgave 4

 document.getElementById("addColorButton").onclick = function () {
   
     let colorInput = document.getElementById("colorInput").value;
     let colors = colorInput.split(',').map(color => color.trim()).filter(color => color);

     let colorList = document.getElementById("colorList");
     colorList.innerHTML = '';

 
     for (let color of colors) {
         let li = document.createElement('li');
         li.textContent = color;
         li.style.backgroundColor = color;                                      // Sett bakgrunnsfargen til li-elementet
         li.onclick = function () {
             document.body.style.backgroundColor = color;                       // Endre bakgrunnsfargen på nettsiden
         };
         colorList.appendChild(li);
     }
    
     document.getElementById("colorInput").value = '';
 };

// Oppgave 5
// Array med bildebaner
const images = [
    'pic/1.png',  // Bilde 1
    'pic/2.jpg',  // Bilde 2
    'pic/3.png',  // Bilde 3
    'pic/4.png',  // Bilde 4
    'pic/5.png'   // Bilde 5
];

// Array med Spotify-lenker for hvert bilde
const songLinks = [
    'https://open.spotify.com/track/7BRD7x5pt8Lqa1eGYC4dzj?si=014670342bee4c08', // Bilde 1
    'https://open.spotify.com/track/0O0bttAxJKKWqAqY2Nq4mC?si=2011e79b4d504eb7', // Bilde 2
    'https://open.spotify.com/track/7CYPzawmBUJUN3tDGhQh1I?si=188c19719abe4d27', // Bilde 3
    'https://open.spotify.com/track/2JAiwcWRLIRI4uiroJ86U7?si=85d8b9b8d26c4d8a', // Bilde 4
    'https://open.spotify.com/track/3bwIVaOlLSX4rInoLgB3uX?si=8b4a9bd9771a4a0a'  // Bilde 5
];

// Hent elementene fra DOM
const imageElement = document.getElementById('randomImage');
const songLinkElement = document.getElementById('songLink');
const changeImageButton = document.getElementById('changeImageButton');

// Funksjon for å vise et tilfeldig bilde
function showRandomImage() {
    // Generer et tilfeldig indeks
    const randomIndex = Math.floor(Math.random() * images.length);
    // Oppdater bilde
    imageElement.src = images[randomIndex];
    // Oppdater lenke
    songLinkElement.href = songLinks[randomIndex];
    songLinkElement.textContent = 'Hør sangen på Spotify';
}

// Når knappen klikkes, vis et nytt bilde og oppdater lenken
changeImageButton.onclick = showRandomImage;

// Initial oppdatering ved innlasting
showRandomImage();
