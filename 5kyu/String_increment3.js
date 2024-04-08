
let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)


// take the String, using regular expression to check for SVGAnimatedNumberList, if there is a number add one otherwise just put 1