import server from "./server";

// **** Start server **** //

const PORT = 5000;

const msg = `Express server started on port: ${PORT}`;
server.listen(PORT, () => console.log(msg));
