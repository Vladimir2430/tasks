module.exports = function multiply(first, second) {
let arr = second.split('').map(s => {	
	return first.split('').map(f => {
		return (+s)*(+f);
	}).reverse(); 
});

arr.reverse();

let a=[];
for (let j=0; j<arr.length; j++){
	if (j===0) {
		a = arr[0];
	} else {
		a.push(0);
		for(let k=0; k<arr[j].length;k++){
			a[j+k] = a[j+k] + arr[j][k];
		}
	}
};

let strng = '';
for (let i=0; i<a.length; i++) {
	if (a[i] < 10 ) {
		strng += a[i];
	} else if (i === a.length-1) {
		let lastPart = (''+a[i]).split('').reverse().join('');
		strng += lastPart;
	} else {
		let partString = a[i]%10;
		a[i+1] += (a[i]- partString)/10;
		strng += partString;
	}
};
return strng.split('').reverse().join('');
}
