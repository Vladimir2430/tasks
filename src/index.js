module.exports = function multiply(first, second) {
  let a = second.split('').map((s) => first.split('').map((f) => (+s) * (+f)).reverse()).reverse();

  let b =[];
  for (let j = 0; j < a.length; j++) {
	  if (j === 0) {b = a[0];
	  } else {
		  b.push(0);
		  for (let k = 0; k < a[j].length; k++) {
			  b[j+k] += a[j][k];
		  }
	  }
  };

  let c = '';
  for (let i = 0; i < b.length; i++) {
	  if (b[i] < 10) {c += b[i];
    } else if (i === b.length-1) {c += b[i].toString().split('').reverse().join('');
	  } else {
      c += b[i] % 10;
		  b[i+1] += (b[i] - b[i] % 10) / 10;
	  }
  };

  return c.split('').reverse().join('');
}
