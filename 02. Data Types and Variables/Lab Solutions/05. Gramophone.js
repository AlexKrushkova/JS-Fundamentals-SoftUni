function solve (band, album, song){
    let durationSeconds = (album.length * band.length) * song.length/2;

    let rotations = Math.ceil(durationSeconds/2.5);
    console.log(`The plate was rotated ${rotations} times.`)
}
