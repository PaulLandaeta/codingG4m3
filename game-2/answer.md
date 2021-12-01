The actual code is not working due to the promise because we have a await sentence in the function to call this promise, we need to add async before the function to fix that. 

Solving the problem above the code is working correctly 
the function is a small sample how to invoke a promise and wait this promise's  result for these reason we put the await before the calling, when you get the result expected by the promise we show an alert. In other words, we are converting a asynchronous method to a synchronous without blocking the flow. 