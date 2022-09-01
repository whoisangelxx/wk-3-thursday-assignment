async function fetchEntries() {
const a = await fetch('https://api.publicapis.org/entries');

const data = await a.json();
console.log(data);
}

fetchEntries(); 
