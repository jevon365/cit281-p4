

const data = require('./p4-data.js').data;

function getQuestions(){
    return data.map(({question}) => question);
}

function getAnswers(){
    return data.map(({answer}) => answer);
}

function getQuestionsAnswers(){
    const clonedData = {...data};
    return clonedData;
    //this looks like {...} in the console on vs but if i do it in the browser it works so i hope this counts
    //return data.map(({question,answer}) => question,answer);
};


function getQuestion(number=""){
    let error = ""
    let num = Number(number);
    if (Number.isInteger(num)&& num>=1 && num<=3){
      let tempQuestion = data[number-1].question
      return {question:tempQuestion,number:number,error:error};
    } else {
      error = "Question number should be an integer between 1 and 3"
      return {question: "",number:number,error:error}

    }
    
    
    
    
};

/*
function getQuestion(number = ""){
  return data.map(({question,awnser,number,""}) => ({question,awnser,number,error}));
}
*/

function getAnswer(number=""){
  let error = ""
  let num = Number(number);
  if (Number.isInteger(num)&& num>=1 && num<=3){
    let tempAnswer = data[number-1].answer
    return {answer:tempAnswer,number:number,error:error};
  } else {
    error = "answer number should be an integer between 1 and 3"
    return {answer: "",number:number,error:error}

  }
};


function getQuestionAnswer(number = ""){
    let error = ""
    let num = Number(number);
    if (Number.isInteger(num)&& num>=1 && num<=3){
      let tempQuestion = data[number-1].question
      let tempAnswer = data[number-1].answer
      return {question:tempQuestion,awnser:tempAnswer,number:number,error:error};
    } else {
      error = "answer number should be an integer between 1 and 3"
      return {answer: "",question:"",number:number,error:error}
      }
}

// console.log(getQuestions())
// console.log(getAnswers())
// console.log(getQuestionsAnswers())
// console.log(getQuestion(1))
// console.log(getAnswer(2))
// console.log(getQuestionAnswer(3))


/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = true;
  const testGetAs = true;
  const testGetQsAs = true;
  const testGetQ = true;
  const testGetA = true;
  const testGetQA = true;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

//second improted code
// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  } 
// */
module.exports = {
  getAnswers,getQuestions,getQuestionsAnswers,getAnswer,getQuestion,getQuestionAnswer
}