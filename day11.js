// Promises and Async/Await

// Understanding Promises
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 10 seconds");
  }, 10000);
});
myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Promise rejected after 2 seconds"));
  }, 2000);
});
myPromise2
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

// Chaining Promises
function fetchDataFromServer1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from server 1");
    }, 1000);
  });
}

function fetchDataFromServer2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from server 2");
    }, 1500);
  });
}

function fetchDataFromServer3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from server 3");
    }, 500);
  });
}

fetchDataFromServer1()
  .then((data1) => {
    console.log(data1);
    return fetchDataFromServer2();
  })
  .then((data2) => {
    console.log(data2);
    return fetchDataFromServer3();
  })
  .then((data3) => {
    console.log(data3);
  })
  .catch((error) => {
    console.error("Chaining Promises Error:", error.message);
  });

// Using Async/Await
async function logResolvedValue(promise) {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}
const examplePromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hello, world!"), 1000);
});

logResolvedValue(examplePromise);

// Simulate a function that returns a promise which might be rejected
function fetchData(shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject("Failed to fetch data.");
      } else {
        resolve("Data fetched successfully.");
      }
    }, 1000); // Simulate a 1-second delay
  });
}
// Async function to handle the promise
async function handleDataFetch(shouldReject) {
  try {
    const result = await fetchData(shouldReject);
    console.log(result); // Log the result if the promise resolves successfully
  } catch (error) {
    console.error("Error occurred:", error); // Log the error message if the promise is rejected
  }
}
// Example usage
handleDataFetch(true); // This will simulate an error
handleDataFetch(false); // This will simulate successful data fetching

// Fetching Data from an API
// URL of the public API
const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
// Using fetch to get data from the API
fetch(apiUrl)
  .then((response) => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    // Parse the response as JSON
    return response.json();
  })
  .then((data) => {
    // Log the response data to the console
    console.log("1", data);
  })
  .catch((error) => {
    // Log any errors to the console
    console.error("There has been a problem with your fetch operation:", error);
  });

// URL of a public API (e.g., JSONPlaceholder for demo purposes)
// const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
// Async function to fetch data and log it
async function fetchData() {
  try {
    // Make the fetch request
    const response = await fetch(apiUrl);

    // Check if the response is okay (status in the range 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Log the received data
    console.log("2 Data received:", data);
  } catch (error) {
    // Log any errors
    console.error("Error fetching data:", error);
  }
}
// Call the async function to fetch and log data
fetchData();

// // Concurrent Promises
// When working with concurrent promises, you often need to handle multiple asynchronous operations simultaneously. There are a few common patterns for managing concurrent promises in JavaScript:
// Promise.all: Waits for all promises to resolve. If any promise rejects, the entire operation fails.
// Promise.allSettled: Waits for all promises to settle, regardless of their outcome. Useful for handling partial success.
// Promise.race: Resolves or rejects as soon as the first promise resolves or rejects.

// Define an array of URLs for demonstration
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

// Function to fetch data from multiple URLs
async function fetchAllData() {
  try {
    // Create an array of promises from the fetch requests
    const fetchPromises = urls.map((url) =>
      fetch(url).then((response) => response.json())
    );

    // Wait for all promises to resolve
    const results = await Promise.all(fetchPromises);

    // Log all the resolved values
    console.log("All data received:", results);
  } catch (error) {
    // Log any error that occurs
    console.error("Error fetching data:", error);
  }
}
// Call the function to fetch and log data
fetchAllData();

// Define an array of URLs for demonstration
// const urls = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/posts/2",
//   "https://jsonplaceholder.typicode.com/posts/3",
// ];

// Function to fetch data from multiple URLs and log the first resolved value
async function fetchFirstResolved() {
  // Create an array of promises from the fetch requests
  const fetchPromises = urls.map((url) =>
    fetch(url).then((response) => response.json())
  );

  try {
    // Wait for the first promise to resolve
    const firstResult = await Promise.race(fetchPromises);

    // Log the value of the first resolved promise
    console.log("First data received:", firstResult);
  } catch (error) {
    // Log any error that occurs
    console.error("Error fetching data:", error);
  }
}
// Call the function to fetch and log the first resolved data
fetchFirstResolved();

// const urls = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/posts/2",
//   "https://jsonplaceholder.typicode.com/invalid-url", // This will fail
// ];

async function fetchMultipleData() {
  const fetchPromises = urls.map((url) =>
    fetch(url)
      .then((response) => response.json())
      .catch((error) => ({ error }))
  );

  const results = await Promise.allSettled(fetchPromises);

  results.forEach((result, index) => {
    // if (result.status === "fulfilled") {
    if (result.status === "fulfilled" && result.value.id) {
      console.log(`Data from URL ${urls[index]}:`, result.value);
    } else {
      console.error(
        `Error fetching data from URL ${urls[index]}:`,
        result.reason
      );
    }
  });
}

fetchMultipleData();
