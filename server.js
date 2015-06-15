var keyboard = require('msi-keyboard');

keyboard.color('left', {color: 'red', intensity: 'high'});
keyboard.color('middle', {color: 'purple', intensity: 'high'});
keyboard.color('right', {color: 'blue', intensity: 'high'});


var colors = [
"off",
"red",
"orange",
"yellow",
"green",
"sky",
"blue",
"purple",
"white"
];

var i=0;

function loop(){
keyboard.color('left',{color:colors[i],intensity:'high'});
 if(i<colors.length){
i++;
setTimeout(loop,1000);
}
}
//loop();
