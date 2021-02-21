console.log("Hello master")

function hello(){
	console.log('Hello by PC');
}


function callback(fn){
	fn();
}
callback(hello);

console.log("commit by master")