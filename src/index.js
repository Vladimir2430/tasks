module.exports = function multiply(first, second) {
let arrBig = second.split('').map(s => {	
	return first.split('').map(f => {
		return (+s)*(+f);
	}).reverse(); 
});

arrBig.reverse();

let ddd=[];
for (let j=0; j<arrBig.length; j++){
	if (j===0) {
		ddd = arrBig[0];
	} else {
		ddd.push(0);
		for(let k=0; k<arrBig[j].length;k++){
			ddd[j+k] = ddd[j+k] + arrBig[j][k];
		}
	}
};

let strng = '';
for (let i=0; i<ddd.length; i++) {
	if (ddd[i] < 10 ) {
		strng += ddd[i];
	} else if (i === ddd.length-1) {
		let lastPart = (''+ddd[i]).split('').reverse().join('');
		strng += lastPart;
	} else {
		let partString = ddd[i]%10;
		ddd[i+1] += (ddd[i]- partString)/10;
		strng += partString;
	}
};
return strng.split('').reverse().join('');
}
