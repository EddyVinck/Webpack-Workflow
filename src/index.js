import _ from 'lodash';

function component () {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}
let fn = () => {
  const list = ['banana', 'apple', 'orange'];
  let ul = document.getElementById("myList");
  let li = document.createElement("li");  
  li.appendChild(document.createTextNode("Test"));

  ul.appendChild(li);
};
fn();
let fn2 = () => {
  const list = ['banana', 'apple', 'orange'];
  let ul = document.getElementById("myList");
  let li = document.createElement("li");  
  li.appendChild(document.createTextNode("Test"));

  ul.appendChild(li);
};
fn2();

document.body.appendChild(component());