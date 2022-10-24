function titleCase(str){
      let array = str.split(" ");
      let word ="";
      let result = [];
      for(let i= 0; i<array.length; i++){
          word += array[i][0].toUpperCase();
          for(let j = 1; j<array[i].length; j++){
            word += array[i][j].toLowerCase();
          }
          result[i] = word;
          word = "";
      }
      console.log(`Original string is ${str}`);
      result = result.join(" ");
      console.log(`Modified string is ${result}`);

}
titleCase("I'm a little tea pot")
titleCase("sHoRt AnD sToUt")