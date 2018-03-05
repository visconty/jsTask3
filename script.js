//Task1
// function reverse(word) {
// 	var newWord = '';
// 	console.log(word)
// 	for (var i = word.length - 1; i >= 0; i--) {
// 	newWord = newWord + word[i];
// 	}
// 	return newWord;
// }

// console.log(reverse('speaker'));
// console.log(reverse('test'));

//Task2
// function camelize(wordcomb) {
// 	var newWord = '';
// 	var arr = wordcomb.split(' ');
// 	for (var i = 0; i < arr.length; i++) {
// 		var word = arr[i].split('');
// 		console.log(word);
// 		// word = word.toUpperCase();
// 		word[0] = word[0].toUpperCase()
// 		var lastIndex = word.length - 1;
// 		 word[lastIndex] = word[lastIndex].toUpperCase();
// 		newWord = newWord + ' ' + word.join('');
// 	}
// 	return newWord;	
// }

// console.log(camelize('new day'));

// Task3
// function isWeekEnd(date) {
// 	if(date.getDay() == 6 || date.getDay() == 0)
//        {
//         return "Выходной!";
//         } 
//         else {
//         	return "Работаем дальше...";
//         }
// }
// 	var date = new Date(2014, 0, 3);
// 	console.log(isWeekEnd(date)); 

// 	var date = new Date(2018, 5, 2);
// 	console.log(isWeekEnd(date)); 

//Task4
function runJS(code) {
     try{
     	eval(code);
     	return true;
     } catch(error){
     	return error;
     }
}

console.log(runJS('2+2')); // 4
console.log(runJS('qwerty();')); // ‘qwerty is not defined (qwerty is not a function - зависит от версии браузера)
console.log(runJS("throw new Error('my error');")); // my error



