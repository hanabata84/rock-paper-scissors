function computerPlay() {
    let randomPlay = Math.floor((Math.random() * 10));
    // random paper 0, 1, 2, 3, rock 4, 5, 6, scissors 7, 8, 9
    if (randomPlay >= 0 && randomPlay < 4) { 
        return 'Paper ' + randomPlay;
    } else if (randomPlay >= 4 && randomPlay < 7){
        return 'Rock ' + randomPlay;
    } else if (randomPlay >= 7 && randomPlay <= 9) {
        return 'Scissors ' + randomPlay;
    }
}