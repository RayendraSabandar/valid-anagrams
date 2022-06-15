# valid-anagrams
### A simple code to determine whether or not 2 seperate strings are anagrams or not.

### Change string1 and string2 to your liking and invoke the `isAnagram` function with string1 and string2 as parameters

### If the return value is `true`, those two strings are anagrams
### If the return value is `false`, those two strings are not anagrams 

<br>

## Example code
> Anagram strings
```
const string1 = "danger"
const string2 = "garden"

console.log(isAnagram(string1, string2)) // true
```

<br>

> Non anagram strings
```
const string1 = "books"
const string2 = "shelf"

console.log(isAnagram(string1, string2)) // false
```

<br>

> Different length
```
const string1 = "short"
const string2 = "notsoshort"

console.log(isAnagram(string1, string2)) // false
```