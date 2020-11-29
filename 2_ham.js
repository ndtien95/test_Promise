


function hello(){
	console.log('Hello by PC');
}

function callback(fn){
	fn();
}
callback(hello);

console.log("this is branch PC")