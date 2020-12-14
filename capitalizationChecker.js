

const capitalizationChecker = (keyPhrase, userPhrase, weightedWord) => {
    let capitalizationEdits = 0;
    let weightedWordEdits = 0;
    for (let i = 0; i < userPhrase.length; i++) {
      if (arIncludeAr(userPhrase[i], keyPhrase) != true) {
        for (let j = 0; j < keyPhrase.length; j++) {
          if (arIncludeAr(keyPhrase[j], userPhrase) != true) {
            console.log("cap check: ", keyPhrase[j], keyPhrase[j][0])
            if (keyPhrase[j][0].toLowerCase() == userPhrase[i][0].toLowerCase()) {
                userPhrase.splice(i, 1, keyPhrase[j]);
                capitalizationEdits++;
                if (keyPhrase[j][0].toLowerCase() == weightedWord.toLowerCase()) {
                  weightedWordEdits++;
                }
            }   
          }
        }
      }
    }
    return [userPhrase, capitalizationEdits, weightedWordEdits];
  }
  
 // console.log(capitalizationChecker(["This", "is", "me"], ["This", "is", "Me"], "me"));