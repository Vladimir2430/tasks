module.exports = function multiply(first, second) {
let a = second.split('').map(s => {	
	return first.split('').map(f => {
		return (+s)*(+f);
	}).reverse(); 
});
let b = [];
for (let j=0; j<arr.length; j++){
	if (j===0) {
		b = a[0];
	} else {
		b.push(0);
		for(let k=0; k<a[j].length;k++){
			b[j+k] = b[j+k] + a[j][k];
		}
	}
};
let strng = '';
for (let i=0; i<b.length; i++) {
	if (b[i] < 10 ) {
		strng += b[i];
	} else if (i === b.length-1) {
		let lastPart = (''+b[i]).split('').reverse().join('');
		strng += lastPart;
	} else {
		let partString = b[i]%10;
		b[i+1] += (b[i]- partString)/10;
		strng += partString;
	}
};
return strng.split('').reverse().join('');
}
