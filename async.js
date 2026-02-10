async function getData() {
    const response = await fetch("https://api.quotable.io/quotes/random");
    const data = await response.json();
    console.log(data);
}

getData();