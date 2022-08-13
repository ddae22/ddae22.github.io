const quotes = [
    {
        quote: "평범함은 갈망의 대상이아니라, 회피의 대상이다.",
        author: "조디포스터",
    },
    {
        quote: "인생의 목적은 다수의 편에 서는 것이 아니라 정신 나간 사람들 사이에서 벗어나는 것이다.",
        author: "마르쿠스 아우렐리우스(Marcus Aurelius)",
    },
    {
        quote: "어디로 가야 할지 모르면, 어떤 길로 가든 상관없다.",
        author: "루이스 캐롤(Lewis Carroll) "
    }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;