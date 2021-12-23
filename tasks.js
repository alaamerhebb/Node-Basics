
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}
helps=['hello','hello with text'];
items=['alaa','merheb','mhmd'];

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
   let t = text.trim(" ");
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.startsWith("hello") ){
    hello(t);
  }
  else if(text.startsWith("list") ){
    list();
  }
  else if(text.startsWith("add") ){
    add(t);
  }
  else if(text === 'help\n'){
    help()
  }
  else{
    unknownCommand(text);
  }

}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/*
 * @returns {void}
 */
function hello(arg){
    console.log(arg+'!');
}
/**
 * Help
 *  @returns {void}
 */
 function help(){
   console.log('the help list is :');
   helps.map(value =>{
    console.log(value)
   })
  
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

function list(){
 items.map(value => {
   console.log((items.indexOf(value)+1)+'-'+value);
 })
}
function add(text){
  let myarray=text.split(' ');
  if(text=='add'){
    console.log('error');
  }
  else{
  items.push(myarray[1]);}
}

// The following line starts the application
startApp("alaa merheb")
