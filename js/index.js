const printAdvice = async () => {
  const advice = fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      return data.slip.advice;
    });

  const adviceId = fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      return data.slip.id;
    });
  const a = await advice;
  const b = await adviceId;

  const adviceLength = a.length;
  if (adviceLength > 90) {
    document.getElementById("main-box").style.height = "25rem";
  } else if (adviceLength > 100) {
    document.getElementById("main-box").style.height = "27rem";
  } else {
    document.getElementById("main-box").style.height = "20.75rem";
  }
  document.getElementById("adId").innerHTML = b;
  document.getElementById("nA").innerHTML = a;
};

printAdvice();
const newAdvBtn = document.querySelector("button");
newAdvBtn.addEventListener("click", () => printAdvice());
