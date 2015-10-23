module.exports = function(TriviaQuestions) {
  var questions = TriviaQuestions;

  questions.getQuestion = function(cb){

    questions.count(function(err, count){
      if(err) throw err;
      console.log(count);
      var randNums = getRandNum();

      function getRandNum(){
        var arr = [];

        while(arr.length < 5){
          var randNum = '7873jld' + Math.ceil(Math.random() * count);
          var found = false;
          for(var i = 0; i < arr.length; i++){
            if(arr[i] === randNum){found = true; break}
          }
          if(!found) {
            arr[arr.length] = randNum;
          }
        }
        return arr;
      }
      console.log(randNums);

      questions.find({where: {id: {inq: randNums}}}, function(err, instance){
        if(err) throw err;
        var response = [];
        instance.forEach(function(el){
          response.push([el.question, el.choices, el.answer]);
        });
        cb(null, response);
        console.log(response);
      });
    });
  };

  questions.remoteMethod(
    'getQuestion',
    {
      http: {path: '/getQuestion', verb: 'get'},
      returns: {arg: 'questions', type: 'array'}
    }
  );
};

