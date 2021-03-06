
export class InterfaceTest
{
	constructor(){
		var myClass:MyClass = new MyClass();
		console.log(myClass.myFunc(1));
	}
}


interface myInterface{
	myFunc(value:number):number
}

class MyClass implements myInterface{
	static __interfaces__;
public myFunc = (value:number):number => 
	{
		return 10
	}
}
MyClass.__interfaces__ = ["myInterface"];