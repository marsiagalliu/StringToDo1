// Remove Blanks

function removeBlanks(str){
    let count = 0;
    for (let i = 0; i < str.length; i++)
        if (str[i] !== " ")
            str[count++] = str[i];
    return count;
}

// Get Digits

function getDigits(str){
    let new_str='';
    for (let char in str){
        if(!isNaN(str[char])){
            new_str += str[char];
        }
    }
    return Number(new_str);
}

// Acronyms

function acronyms(str) {
    let word = str.split(/\s+/);
    let acronym = '';
    for (let i = 0; i < word.length; i++) {
        acronym += word[i][0];
    }
    return acronym.toUpperCase();
}

// Count Non-Spaces

function countNonSpaces(nonspace){
    let count = 0;
    for (let i = 0; i < nonspace.length; i++) {
        if (nonspace[i] !== ' '){
            count++;
        }
    }
    return count;
}

// Remove Shorter Strings

function removeShorterStrings(arr,length){

    let new_str=[];
    let index=0;
    for (let value in arr){
        if(arr[value].length>=length){
            new_str[index++]=arr[value];
        }
    }
    return new_str;
}
