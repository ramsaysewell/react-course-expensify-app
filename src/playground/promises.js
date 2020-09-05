const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Hello');
	}, 3000);
});

promise.then((res) => {
	console.log(res);
});
