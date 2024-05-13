
let count = 0;
const counterElement = document.getElementById("counter");
const historyElement = document.getElementById("history");

function updateCounter() {
    const evenOddClass = count % 2 === 0 ? "even" : "odd";
    counterElement.textContent = count;
    counterElement.className = evenOddClass;
    updateHistory();
}

function increment() {
    count++;
    updateCounter();
}

function decrement() {
    if (count > 0) {
        count--;
        updateCounter();
    }
}

function reset() {
    count = 0;
    updateCounter();
}

function updateHistory() {
    const li = document.createElement("li");
    li.textContent = count;
    li.className = count % 2 === 0 ? "even" : "odd";
    historyElement.prepend(li);
    // Triggering reflow
    void historyElement.offsetWidth;
    li.style.opacity = "1";
}

updateCounter(); // Initial update