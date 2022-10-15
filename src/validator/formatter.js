let  stringTrim = function(){
    const str = "  This is Atul Thakur     "
   return str.trim() 
} 

 let stringUpper =  function() {
    const at ="This is Atul Thakur"
     return at.toUpperCase() }


  let stringLower =  function() {
        const ul = "This is Atul Thakur"
      return  ul.toLowerCase()
    }

  module.exports.string = stringTrim
  module.exports.upper = stringUpper
  module.exports.lower = stringLower
