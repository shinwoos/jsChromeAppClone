const quotes = [
  {
    quote: "진짜는 진짜를 알아본다.",
    author: "shins",
  },
  {
    quote: "세상에 공짜는 없다.",
    author: "mom",
  },
  {
    quote: "간절하면 하게 된다.",
    author: "jeus",
  },
  {
    quote: "기가 드릴 브레이크.",
    author: "simon",
  },
  {
    quote: "시시해서 죽고 싶어졌다.",
    author: "rin",
  },
  {
    quote: "오이시쿠나레 모에모에 큥.",
    author: "danaka san",
  },
  {
    quote: "대머리는 죄가 아니다.",
    author: "yoon",
  },
  {
    quote: "테미야 물지마!",
    author: "soo",
  },
  {
    quote: "콩.",
    author: "aki",
  },
  {
    quote: "또가스 넌 내꺼야!",
    author: "ji woo",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
