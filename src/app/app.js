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
    this.View = document.getElementById('app');
    this.chars = ['0','1','2','3','4','5','6','7','8','9','A','B',
    	'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
    	'R','S','T','U','V','W','X','Y','Z'];

    this.id = this.id + '-' + this.generateMixed(5);
    console.log('ID: ' + this.id);

    this.ele = document.createElement('div');
    this.ele.className = 'thumb';
    this.ele.id = this.id;
    this.ele.innerHTML = '<div><\/div>'

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
  	this.View.appendChild(this.ele);
  	const hr = document.createElement('hr');
  	this.View.appendChild(hr);
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
  	super.render();
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

oPB.render();
oT.render();



