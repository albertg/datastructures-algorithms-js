//CODE
class Node{
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class LinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(value){
		var node = new Node(value);
		this.length++;
		if(!this.head){
			this.head = node;
		}else{
			this.tail.next = node;
		}
		this.tail = node;
	}
	pop(){	
		return this.delete(this.length-1);
	}	
	get(index){
		var node = this._find(index, this._testIndex);
		if(!node){
			return null;
		}else{
			return node.value;
		}
	}
	delete(index){
		if(index === 0){
			var head = this.head;
			if(head){
				this.head = head.next;
			}else{
				this.tail = this.head = null;
			}
			this.length--;
			return head.value;
		}
		
		var node = this._find(index-1, this._testIndex);
		var excise = node.next;
		if(!excise) return null;
		node.next = excise.next;
		if(node.next && !node.next.next){
			this.tail = node.next;
		}else{
			this.tail = node;
		}
		this.length--;
		return excise.value;
	}
	_find(value, test = this._test){
		var current = this.head;
		var i=0;
		while(current){
			if(test(value, current.value, i, current)){
				return current;
			}else{
				current = current.next;
				i++;
			}
		}
		return null;
	}
	_test(a,b){
		return a === b;
	}
	_testIndex(search, __, i){
		return search === i;
	}	
}
