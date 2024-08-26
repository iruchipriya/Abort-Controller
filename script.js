// Step 1: Create an AbortController
const abortController = new AbortController();
const signal = abortController.signal;

// Function to simulate a delayed fetch request
const fetchData = async (signal) => {
  try {
    // Simulate a delay in response for better testing
    const response = await fetch('https://testapi.devtoolsdaily.com/users', {
      signal,
    });
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Request aborted');
    } else {
      console.error('Error during API call:', error);
    }
  }
};

// Call the API
fetchData(signal);

// Abort the API request after 1 second
setTimeout(() => {
  console.log('Aborting the fetch request...');
  abortController.abort();
}, 10);

//for post/other requests
//********************************************************************************
// Create an AbortController
const abortController2 = new AbortController();
const signal2 = abortController.signal;

// POST request example
const sendData = async (signal) => {
  try {
    const response = await fetch('https://example.com/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key: 'value' }),
      signal2, // Attach the signal to the request
    });
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Request aborted');
    } else {
      console.error('Error during API call:', error);
    }
  }
};

// Call the POST API
sendData(signal2);

// Abort the request after 1 second
setTimeout(() => {
  console.log('Aborting the POST request...');
  abortController2.abort();
}, 1000);
