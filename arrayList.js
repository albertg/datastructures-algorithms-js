//CODE
class ArrayList{
	constructor(){
		this.length = 0;
		this.data = {};
	}
	
	push(value){
		this.data[this.length] = value;
		this.length++;
	}
	
	pop(){
		/*var poppedValue = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return poppedValue;*/
		return this.delete(this.length - 1);
	}
	
	get(index){
		return this.data[index];
	}
	
	delete(index){
		var deletedValue = this.data[index];
		this._collapseTo(index);
		return deletedValue;
	}
	
	_collapseTo(index){
		for(i=index;i<this.length;i++){
			this.data[i] = this.data[i+1];			
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

//EXECUTION
var al = new ArrayList();

al.push(10);
al.push(20);
al.push(30);
al.push(40);
al.push(50);

al.data;

al.get(3);

al.pop();

al.delete(3);
