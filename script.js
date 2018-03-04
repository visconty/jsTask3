
function reverse(word) {
	var newWord = '';
	console.log(word)
	for (var i = word.length - 1; i >= 0; i--) {
	newWord = newWord + word[i];
	}
	return newWord;
}

console.log(reverse('speaker'))
console.log(reverse('test'))
