console.log(document);
console.dir(document);

const test1 = document.querySelector('#list1');
const test2 = document.querySelector('#list2')

test2.children[1].after(test1.children[1]);
test2.children[1].remove();

test2.te