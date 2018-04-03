//CODE
class Node{
	constructor(value, left=null, right=null){
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

class Tree{
	constructor(){
		this.root = null;
	}
	add(value){
		//no root, create one
		if(this.root === null){
			this.root = new Node(value);
			return;
		}
		var current = this.root;
		while(true){
			if(current.value > value){
				//go left
				if(current.left){
					current = current.left;
				}else{
					current.left = new Node(value);
					break;
				}
			}else{
				//go right
				if(current.right){
					current = current.right;
				}else{
					current.right = new Node(value);
					break;
				}
			}
		}
	}
}
