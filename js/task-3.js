function getElementWidth (content, padding, border){ 
 const elementContent = Number.parseFloat(content);
 const elementPadding = Number.parseFloat(padding);
 const elementBorder = Number.parseFloat(border);

 const N = elementContent + 2*elementPadding + 2*elementBorder;

 return N;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
