
interface AudioPlayer{
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details,
}

interface Details{
    author: string,
    year: number,
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}
//A esto se le conoce como desestructuracion, guarda la variable dentro de 
// una constante

// const {song} = 'New Song';
const {song: anotherSong, songDuration: duration, details}= audioPlayer;

console.log('Song: ', anotherSong);
console.log('Duration: ', duration);

//Desestructuracion de DETAILS, puede realizarse en la primera constante

const { author } = details;
console.log('Author: ', author);
//console.log('Year: ', release);

// DESESTRUCTURACION DE ARREGLOS
// Se utilizan llaves cuadradas y se asignan nombres a cada posicion
// En caso que no se encuentre se va a devolver "Undefined" pero se puede cambiar el valor 
// por defecto

const [,,trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];

console.log('Personaje 3: ',trunks);


export{}