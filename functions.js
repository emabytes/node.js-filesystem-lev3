const fs = require("fs");

//lev 3_1
function appendToFile(parameter) {
    if (!fs.existsSync("./ordner")) {
          fs.mkdirSync("ordner");
    }
    fs.appendFile('ordner/file.txt', parameter + "\n", (err) => {
        if (err) throw err; 
        console.log('The file has been saved!'); 
    });
}

// lev 3_2
function checkCreateDelete() {
    if (!fs.existsSync("./MyFunnyFolder")) {
        fs.mkdirSync("MyFunnyFolder")
        console.log("MyFunnyFolder erstellt")
    } 
    else {
        fs.rmdir('./MyFunnyFolder', (err) => {
            if (err) throw err;
            console.log("MyFunnyFolder deleted")
        })  
    }
}

module.exports.appendToFile = appendToFile;
module.exports.checkCreateDelete = checkCreateDelete;
