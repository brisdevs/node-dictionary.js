const fetch = require('node-fetch');

module.exports = class {
    static async trFindWord(kelime){
        if(!kelime) throw 'Türk Dil Kurumunda arıyacağım bir kelime belirtmelisin.';
        const cıktı = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/tr/${kelime}`).then(res => res.json());
        let obje = {}
        
        if(cıktı.title == 'No Definitions Found'){
            obje = { error: { title: cıktı.title, message: cıktı.message, resolution: cıktı.resolution }}
            return obje
        }else if(cıktı.title == undefined){
            const word = cıktı[0].word;
            const anlam = cıktı[0].meanings[0].definitions[0].definition ? cıktı[0].meanings[0].definitions[0].definition : "Bulunamadı!"
            const ornek = cıktı[0].meanings[0].definitions[0].example ? cıktı[0].meanings[0].definitions[0].example : "Bulunamadı!" 
            const kokenı = cıktı[0].origin ? cıktı[0].origin : "Bulunamadı!"
            obje = { kelime: word, anlami: anlam, kokeni: kokenı, ornek: ornek };
            return obje    
        }
    }


    static async enFindWord(word){
        if(!word) throw 'You have to write a word you want me to find';
        const cıktı = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(res => res.json());
        let obje = {}
        
        if(cıktı.title == 'No Definitions Found'){
            obje = { error: { title: cıktı.title, message: cıktı.message, resolution: cıktı.resolution }}
            return obje
        }else if(cıktı.title == undefined){
            const word = cıktı[0].word;
            const anlam = cıktı[0].meanings[0].definitions[0].definition ? cıktı[0].meanings[0].definitions[0].definition : "Not found!"
            const ornek = cıktı[0].meanings[0].definitions[0].example ? cıktı[0].meanings[0].definitions[0].example : "Not found!" 
            const kokenı = cıktı[0].origin ? cıktı[0].origin : "Not found!"
            obje = { word: word, meaning: anlam, origin: kokenı, example: ornek };
            return obje    
        }
    }


    static async frFindWord(word){
        if(!word) throw 'Vous devez écrire un mot que vous voulez que je trouve'
        const cıktı = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/fr/${word}`).then(res => res.json());
        let obje = {}
        
        if(cıktı.title == 'No Definitions Found'){
            obje = { error: { title: cıktı.title, message: cıktı.message, resolution: cıktı.resolution }}
            return obje
        }else if(cıktı.title == undefined){
            const word = cıktı[0].word;
            const anlam = cıktı[0].meanings[0].definitions[0].definition ? cıktı[0].meanings[0].definitions[0].definition : "Pas trouvé!!!"
            const ornek = cıktı[0].meanings[0].definitions[0].example ? cıktı[0].meanings[0].definitions[0].example : "Pas trouvé!!!" 
            const kokenı = cıktı[0].origin ? cıktı[0].origin : "Pas trouvé!!!"
            obje = { mot: word, sens: anlam, origine: kokenı, exemple: ornek };
            return obje    
        }
    }
}
