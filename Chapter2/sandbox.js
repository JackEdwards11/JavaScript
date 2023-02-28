const title = 'Best reads of 2020';
const author = 'Mario';
const likes = 30;

let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes!';
console.log(result);

result = `The blog called ${title} by ${author} has ${likes} likes!`;
console.log(result);

let content = 
`
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>${likes}</span>
`;

console.log(content);