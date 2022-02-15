const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

const typewriter = function(input) {
  setTimeout(() => {
    if (input.length !== 0) {
      process.stdout.write(input[0]);
      typewriter(input.slice(1, input.length));
    } else {
      console.log('');
    }
  } , 200);
}

typewriter(spinner);