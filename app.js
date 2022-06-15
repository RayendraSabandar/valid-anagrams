function isAnagram(string1, string2) {
    var result = false

    var string1length = 0
    var string2length = 0

    var freq1 = {}
    var freq2 = {}

    for (character of string1) {
        string1length++
        if(freq1[character]) {
            freq1[character]++
        } else {
            freq1[character] = 1
        }
    }

    for (character of string2) {
        string2length++
        if(freq2[character]) {
            freq2[character]++
        } else {
            freq2[character] = 1
        }
    }

    if(string1length !== string2length) {
        return false
    } else {
        for(key in freq1) {
            if(freq1[key] !== freq2[key]){
                return false
            } else {
                result = true
            }
        }
    }

    return result
}


const string1 = "danger"
const string2 = "garden"

console.log(isAnagram(string1, string2))