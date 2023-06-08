const { getQuestion, getAnswers, getQuestions, getAnswer, getQuestionAnswer } = require("./p4-module");

// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax
fastify.get("/cit/question", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(
        {
            "error": "",
            "statusCode": 200,
            "questions": getQuestions()
        }

    );
   
});

fastify.get("/cit/answer", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(
        {
            "error": "",
            "statusCode": 200,
            "answers": getAnswers()
        }
  
    );
     
});

fastify.get("/cit/questionanswer", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(
        {
            "error": "",
            "statusCode": 200,
            "questions_answers":getQuestionsAnswers()
            
            
        }
  
    );
     
});

fastify.get("/cit/question/:number", (request, reply) => {
    let num = request.params.number
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(
        {
            "statusCode": 200,
            "":getQuestion(num)
            
        }
  
      );
     
});

fastify.get("/cit/answer/:number", (request, reply) => {
    let num = request.params.number
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(
        {
            "statusCode": 200,
            "": getAnswer(num)
        }
  
    );
     
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
    let num = request.params.number
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(
        {
            "statusCode": 200,
            "": getQuestionAnswer(num)
        }
  
    );
     
});

fastify.get("*", (request, reply) => {
    reply
      .code(401)
      .header("Content-Type", "text/html; charset=utf-8")
      .send(
        {
            "error": "Route not found",
            "statusCode": 404
        }
      );
  });



// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});