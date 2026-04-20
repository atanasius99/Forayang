const envelope = document.getElementById("envelope");
const main = document.getElementById("main");
const bgm = document.getElementById("bgm");

const startBtn = document.getElementById("startBtn");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const answers = document.querySelectorAll(".ans");
const feedback = document.getElementById("feedback");
const message = document.getElementById("message");
const gallery = document.getElementById("gallery");

let current = 0;

/* OPEN */
envelope.onclick = () => {
  envelope.classList.add("open");

  bgm.volume = 0;
  bgm.play();

  let fade = setInterval(()=>{
    if(bgm.volume < 0.4){
        bgm.volume += 0.02;
     }
    },200);

  setTimeout(()=>{
    envelope.style.display="none";
    main.classList.remove("hidden");
  },1000);
};

/* QUIZ */
const questions = [
  {
    q: "Do you love Fandi?",
    correct: "Yes",
    wrong: "You can't say no to this 😌"
  },
  {
    q: "Does Fandi make your day better, even if sometimes he annoys you and makes you cry?",
    correct: "Yes",
    wrong: "Hmm… be honest 😏"
  },
  {
    q: "Will you stay with Fandi forever?",
    correct: "Yes",
    wrong: "Think again carefully 🙂"
  }
];

startBtn.onclick = () => {
  startBtn.style.display="none";
  quiz.classList.remove("hidden");
  loadQuestion();
};

function loadQuestion(){
  feedback.innerHTML="";
  question.innerHTML=questions[current].q;
}

answers.forEach(btn=>{
  btn.onclick=()=>{
    if(btn.innerHTML===questions[current].correct){
      current++;
      if(current<questions.length){
        loadQuestion();
      } else {
        quiz.classList.add("hidden");
        showMessage();
      }
    } else {
      feedback.innerHTML=questions[current].wrong;
    }
  }
});

let text = `Happy 25th Birthday, sayangg 🤍

You’re not just getting older,
you’re becoming more incredible in your own way.

I know I’m not perfect,
and sometimes I can be annoying.
If I’ve ever hurt you, I’m truly sorry.

But through everything,
please remember this,
I care about you more than words can say ❤️

Thank you for staying,
for your patience,
and for being you.

I pray you’re always given health,
happiness, and ease in every step.
May everything you’re working for
find its way to you.

And when life gets hard,
I hope you stay strong
and never feel alone…

because I will always be right by your side.
i love you mi amor🤍

\n\nWith love,\nFandi`;

let i = 0;

function showMessage(){
  message.classList.remove("hidden");

  function typing(){
    if(i<text.length){
      message.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing,30);
    } else {
      setTimeout(()=>{
        gallery.classList.add("show");
      },600);
    }
  }

  typing();
}

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<60;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2,
    d:Math.random()*1
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="white";

  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();

    p.y += p.d;
    if(p.y > canvas.height){
      p.y = 0;
      p.x = Math.random()*canvas.width;
    }
  });

  requestAnimationFrame(draw);
}
draw();
