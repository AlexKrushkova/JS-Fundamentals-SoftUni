function solve (array){

    class Song{
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs =  [];
    let numberOfSongs = array.shift();
    let typeOfSong = array.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let[type, name, time] = array[i].split("_");
        let song = new Song(type,name, time);
        songs.push(song); 
    }

    if(typeOfSong === "all"){
        songs.forEach((i) => console.log(i.name));
    }
    else {
        let filtered = songs.filter((i) => i.type === typeOfSong);
        filtered.forEach((i) => console.log(i.name));
    }

}
