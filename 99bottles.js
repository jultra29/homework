/*Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
If you're unfamiliar with the song, you can find the lyrics here.
Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").
*/

for (var num = 99; num >= 1; num--) {
if (num > 1 ) {
	console.log(num + ' bottles of beer on the wall, ' + num + ' bottles of beer');
} else if (num === 1) {
	console.log(num + ' bottle of beer on the wall, ' + num + ' bottle of beer')
} else {
	console.log('Lyric not found.')
}
}
