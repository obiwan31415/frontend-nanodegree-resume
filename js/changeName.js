//Capitalize last name

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    var names = oldName.split(" ");
    
    //finalName = nameArr[0].concat(" ", nameArr[1].toUpperCase());
    finalName = names[0].slice(0,1) + names[0].slice(1).toLowerCase() + " " + names[1].toUpperCase();
    // Don't delete this line!
    return finalName;
};