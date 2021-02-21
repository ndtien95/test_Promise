console.log("Hello master")

function hello(){
	console.log('Hello every body');
}


function callback(fn){
	fn();
}
callback(hello);

console.log("commit by master")
console.log("this is branch PC 1")
