import strings from './quotes.js';
// strings from https://terebess.hu/english/tao/gia.html#Kap03


// detect if the button is clicked
document.getElementById('regenerate').addEventListener('click', function () {
    // clear the passage element on the page
    document.getElementById('passage').innerHTML = '';
    // generate a new passage
    generatePassage();
    // clear the chinese element on the page
    document.getElementById('chinese').innerHTML = '';
    // generate a new chinese
    generateChinese();

    // update citation
    updateCitation();

});

// detect if the spacebar is pressed
document.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        // prevent the default behavior of spacebar
        event.preventDefault();
        // clear the passage element on the page
        document.getElementById('passage').innerHTML = '';
        // generate a new passage
        generatePassage();
        // clear the chinese element on the page
        document.getElementById('chinese').innerHTML = '';
        // generate a new chinese
        generateChinese();

        // update citation
        updateCitation();
    }
});

const randomChineseCharacters = () => {
    // set length to a random value between 5 and 15
    const length = Math.floor(Math.random() * 10) + 5;

    // create a new string of random chinese characters
    let string = '';
    for (var i = 0; i < length; i++) {
        // pick a random unicode value between 0x4E00 and 0x9FFF
        const randomUnicode = Math.floor(Math.random() * (0x9FFF - 0x4E00 + 1)) + 0x4E00;
        // convert the unicode value to a character and add it to the string
        string += String.fromCharCode(randomUnicode);
    }
    return string;
};

const generateChinese = () => {
    // set length to a random value between 2 and 5
    const length = Math.floor(Math.random() * 4) + 2;

    // create a new paragraph element and fill it with random chinese characters then push it to the #chinese div
    for (var i = 0; i < length; i++) {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = randomChineseCharacters();
        document.getElementById('chinese').appendChild(paragraph);
    };
};
generateChinese();


const generatePassage = () => {
    // set length to a random value between 10 and 20
    const length = Math.floor(Math.random() * 10) + 10;

    // pick a random amount of random string from the array and print them to the console
    let lastString = '';
    for (var i = 0; i < length; i++) {

        // pick a random string from the array
        var randomIndex = Math.floor(Math.random() * strings.length);

        // if the random string is the same as the last string, try again
        if (strings[randomIndex] === lastString) {
            i--;
            continue;
        }
        lastString = strings[randomIndex];

        // push the random string to the passage element on the page
        document.getElementById('passage').innerHTML += strings[randomIndex] + '<br>';
    }
};
generatePassage();

const updateCitation = () => {
    document.getElementById('citation').innerHTML = '- Tao Te Ching, Chapter ' + (Math.floor(Math.random() * 100) + 81);

};
updateCitation();
