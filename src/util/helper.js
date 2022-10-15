const date =  new Date()

const checkDate = function(){
 return date.getDate();
}

const checkMonth = function(){
  return date.getMonth()+1; 
}

const checkBatch = function(){
  return " Batch lithium , W3D3,the topic for today is Nodejs module system " ;
   
  }
 
module.exports.date = checkDate
module.exports.month =checkMonth
module.exports.batch =checkBatch