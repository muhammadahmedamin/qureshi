var a = prompt("Enter your Name")
var a = prompt("Enter your last Name")
var a = prompt("Enter your Roll Number")
var questions = [
  {
      question: "Html stands for _________________",
      option: ["hyper markup", "JS", "hyper text markup language", "cascading style sheet"],
      correctAns: "hyper text markup language"
  },
  {
      question: "JS stands for _________________",
      option: ["java script", "hyper text markup language", "css", "html"],
      correctAns: "java script"
  },
  {
      question: "CSS stands for _________________",
      option: ["cascading style sheet", "hyper text markup language", "Java Script", "html"],
      correctAns: "cascading style sheet"
  },

  {
      question: "RAM stands for _________________",
      option: ["random access memoery", "hyper text markup language", "html", "CPU"],
      correctAns: "random access memoery"
  },
  {
      question: "ROM stands for _________________",
      option: ["read only memory", "hyper text markup language", "html", "ALU"],
      correctAns: "read only memory"
  },
  {
      question: "DOM stands for _________________",
      option: ["Div of main", "Document object model", "Disk operating module", "Distributed order management"],
      correctAns: "Document object model"
  },
  {
      question: "Javascript is a _________________",
      option: ["Scripting language", "markup language", "programming langusage", "interpreted language"],
      correctAns: "Scripting language"
  },
  {
      question: "what is a purpose of using java script _________________",
      option: ["creating web pages", "Structure of web pages", "style the web page", "data analysis"],
      correctAns: "creating web pages"
  },
  {
      question: "ALU stands for _________________",
      option: ["Air local Unit", "Assets Local Unit", "Arithmetic Logic Unit", "Arithmetic Land Unit"],
      correctAns: "Arithmetic Logic Unit"
  },
  {
      question: "CPU stands for _________________",
      option: ["Center Programe Unit", "Central Processing Unit", "Control Protocol Unit", "Central Part Unit"],
      correctAns: "Central Processing Unit"
  }

]

var currentQueNo = document.getElementById("currentQueNo");
var totalQues = document.getElementById("totalQues");
var dispQuestion = document.getElementById("dispQuestion");
var answerParent = document.getElementById("answerParent");
var indexVal = 0;
var marks = 0;

function renderQue(){
  var obj = questions[indexVal];
  dispQuestion.innerHTML = obj.question;
  totalQues.innerHTML = questions.length;
  currentQueNo.innerHTML = indexVal + 1;
  answerParent.innerHTML = ""

  for(var i = 0; i < obj.option.length; i++){
      answerParent.innerHTML += `<div class = "col-md-6">
      <div class = "py-2">
      <button onclick = "chkAns ('${obj.correctAns}' , '${obj.option[i]}' )" class="btn btn-primary fs-5 w-100">${obj.option[i]}</button>
      </div>
      </div>`;

  }
}

function nextQue(){
  indexVal++;
  renderQue();
}
function chkAns(a,b){
  if(a == b){
      marks = marks + 1;
  }
  console.log(marks);
  nextQue();
}
renderQue();