class CustomFunctions {
    static getRandomString(length){
        var randomChars =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var result = "";
        for (var i = 0; i < length; i++) {
          result += randomChars.charAt(
            Math.floor(Math.random() * randomChars.length)
          );
        }
        return result;
      };
      //Get Unique ID which is not in given ids
      static uniqueId(ids){
          let id = this.getRandomString(16);
          for (let i = 0; i < ids.length; i++) {
              if(ids[i] === id){
                  return this.uniqueId(ids);
              }
          }
          return id;
      }
}

export default CustomFunctions;