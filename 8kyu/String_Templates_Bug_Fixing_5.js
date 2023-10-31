// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

buildString = (...template) => `I like ${template.join(', ')}!`
  

//   This took me a minute, i didnt realize the main problem is they aren't using a $ and are using a #
// the other problem was join didn't have a space after the comma 
// went through it and made it one line