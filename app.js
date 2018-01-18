var http = require('http');
var ecStatic = require('ecStatic');
var server = http.createServer(ecStatic({root: __dirname + '/www'}));
var socket = require('socket.io');
var io=socket(server);
io.sockets.on('connection', function(socket) {
	console.log('Client Connected');

	//var x=function(msg)
	  socket.on('message', function(msg)  {
		  console.log('msg'+ msg);
		  console.log("hey");
   // console.log('Message: ' + msg);
  if(msg=='1'){broadcast("Draw dog");}
  if(msg=='2'){broadcast("Draw cat");}
  if(msg=='3'){broadcast("Draw kite");}
  if(msg=='4'){broadcast("Draw house");}
  if(msg=='5'){broadcast("Draw car");}
   
  });
  
   socket.on('marking', function(mrk)  {
		
    console.log('Mark: ' + mrk);
  if(mrk=='1'){broadcastMark("quit art");}
  if(mrk=='2'){broadcastMark("quit art");}
  if(mrk=='3'){broadcastMark("Train more");}
  if(mrk=='4'){broadcastMark("Train more");}
  if(mrk=='5'){broadcastMark("Train more :)");}
   if(mrk=='6'){broadcastMark("Not Bad");}
  if(mrk=='7'){broadcastMark("Good");}
  if(mrk=='8'){broadcastMark("Very good");}
  if(mrk=='9'){broadcastMark("Excellent");}
  if(mrk=='10'){broadcastMark("Excellent");}
   
  });
  
  

///////////////////////////////////////////////////
  socket.on('mouse',
      function(data) {
        // Data comes in as whatever was sent, including objects
        console.log("Received: 'mouse' " + data.x + " " + data.y);
      
        // Send it to all other clients
        socket.broadcast.emit('mouse', data);
        
        // This is a way to send to everyone including sender
        // io.sockets.emit('message', "this goes to everyone");

      }
    );


///////////////////////////////////////////
})

function broadcast(msg) {
  // socket.clients.forEach(function(client) {
     io.emit('msg',msg);
//  });
 //out.innerHTML +='<p><strong>'+msg.handle+':</strong?'+msg.message+'</p>';
 
}
function broadcastMark(mrk) {
  // socket.clients.forEach(function(client) {
     io.emit('mrk',mrk);
//  });
 //out.innerHTML +='<p><strong>'+msg.handle+':</strong?'+msg.message+'</p>';
 
}
server.listen(3000);
console.log('Server Running at http://127.0.0.1:3000  CNTL-C to quit');