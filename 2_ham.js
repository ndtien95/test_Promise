
//Cách 1 
 /*function tong(a,b)
{
	return eval(a)+b;
}
var x =tong('5',5);
console.log(x);*/

//Cách 2: gọi hàm từ hàm khác

function hello(){
	console.log('Hello every body');
}

function callback(fn){
	fn();
}
callback(hello);

/*//Cách 3
var ham = function(){
	console.log('bố mày đây gọi gì đấy?')
}
ham();*/

//*/