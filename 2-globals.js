// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

__dirname = process.cwd();
console.log(__dirname);
console.log('hello world');
// setInterval(()=>{
//     console.log('hello world');
// });