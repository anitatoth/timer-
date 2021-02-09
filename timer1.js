let input = process.argv.slice(2);
//sort the array
input.sort();



// if input is not a number, no number given or negative number skip beep



for (const num of input) {
  
  if (num === '' || num < 0 || isNaN(num)) {
    break;
  }
  
  setTimeout(() => {
    process.stdout.write('\x07');
   
  }, num * 1000);
  
}


