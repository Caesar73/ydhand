/*
 *
 *
 *
 */

// 1.
// Define the father class
class PralseButton {
  constructor(id) {
    this.id  = id;
    this.sum = 0;
    this.chars = ['0','1','2','3','4','5','6','7','8','9','A','B',
    	'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
    	'R','S','T','U','V','W','X','Y','Z'];
  }

	generateMixed(n) {
		var res = '';
		for(var i = 0; i < n ; i ++) {
			var id = Math.ceil(Math.random()*35);
			res += this.chars[id];
		}
		return res;
	}

  addOne() {
  	return ++this.sum;
  }

  handleClick() {
  	this.addOne()
  }

  render() {

  }

  toString() {
    return '(' + this.id + ', ' + this.sum + ')';
  }
}


// 2.
// Define the child class
class Thumb extends PralseButton {
  constructor(id, max) {
  	// 调用父类的constructor(id)
    super(id);
    this.max = max;
  }

  addOne() {
  	super.addOne();
  }

  render() {

  }

  toString() {
    return this.max + ' ' + super.toString(); // 调用父类的toString()
  }
}


let oPB = new PralseButton('oPB');
let oT  = new Thumb('oT', 10);
console.log(oPB);
console.log(oT);
console.log(oPB.toString());
console.log(oT.toString());





