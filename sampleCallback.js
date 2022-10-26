function myAsync1(callback) {
	setTimeout(() => {
  	callback(null, "async1")
  }, 3000)
}

function myAsync2(callback) {
	setTimeout(() => {
  	callback(null, "async2")
  }, 2000)
}

function myAsync3(callback) {
	setTimeout(() => {
  	callback(null, "async3")
  }, 1000)
}

function myAsync4(callback) {
	setTimeout(() => {
  	try {
		// lets say something happened
    	throw new Error("forced error")
    } catch (err) {
    	return callback(err)
    }
  }, 3000)
}

// 1. Need to fix this så that we run it in the proper sequence
// 2. it should be printing the values "async1","async2"... but it seems there is an error in the callback handling
// 3. should 
function start() {
  myAsync1((err, c) => {
    console.log(c)
    myAsync2((err, c) => {
        console.log(c)
        myAsync3((err, c) => {
            console.log(c)
            myAsync4((err, c) => {
                console.log(err.message)
            })
        })
    })
  })
}

start()



// Convert this using promises and name the file samplePromise.js
// convert this to promise where everything is needed to be run in parallel and get all result. name the file samplePromis2.js
// convert this using async await where the sequence is respected. name the file sampleAsyncAwait.js