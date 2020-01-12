/* Translate border-left-width to borderLeftWidth
importance: 5 */

function camelize(str){
 return str.split('-').map((word,index)=> (index==0)? word : word[0].toUpperCase()+ word.slice(1)).join("");
}
console.log(camelize("-webkit-install")); // WebkitInstall
console.log(camelize("background-color")); //  'backgroundColor'