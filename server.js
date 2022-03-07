const net = require('net');

const server = net.createServer(socket => {
    socket.on('data',data=>{
        console.log(data.toString());
        socket.write('HTTP/1.1 69 Api thamai hondatama kale\r\n');
        socket.end((err)=>{console.log(err)});
    });
});

server.listen(process.env.PORT || 3000);
