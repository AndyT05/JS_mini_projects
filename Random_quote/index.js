const quotes = [
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
      "Don’t let yesterday take up too much of today. – Will Rogers",
      "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
      "If you are working on something exciting, it will keep you motivated. – Steve Jobs",
      "Success is not in what you have, but who you are. – Bo Bennett",
      "Do what you can with all you have, wherever you are. – Theodore Roosevelt",
      "Happiness is not by chance, but by choice. – Jim Rohn",
      "Act as if what you do makes a difference. It does. – William James",
      "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
      "Believe you can and you're halfway there. – Theodore Roosevelt"
    ];
    
    const quoteElement = document.getElementById("quote");
    const button = document.getElementById("button");
    button.addEventListener("click", generateQuote);
    
    const usedIndexes = new Set();
    
    function generateQuote() {
        if(usedIndexes.size >= quotes.length){
            usedIndexes.clear();
        }
    
        while(true){
            const randomIndex = Math.floor(Math.random() * quotes.length);
    
            if (usedIndexes.has(randomIndex)) {
                continue;
            }

            const quote = quotes[randomIndex];
            quoteElement.innerHTML = quote;
            usedIndexes.add(randomIndex);
            break;
        }
    
    }