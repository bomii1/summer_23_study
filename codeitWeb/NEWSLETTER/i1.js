fetch('https://www.error.www')// rejected
    .then((response) => response.text()) // rejected 결과(실패정보): fetch failed
    .then((result) => { console.log(result); }) // rejected 결과(실패정보): fetch failed
    .catch((error) => { console.log('Hello'); throw new Error('test'); }) // fullfilled 결과: undefind
    .then((result) => { console.log(result); })
    .then(undefined, (error) => { })
    .catch((error) => { console.log('JS'); })
    .then((result) => { console.log(result); })
    .finally(() => { console.log('final'); });