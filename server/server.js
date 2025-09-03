import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("server/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default server;

if (!process.env.VERCEL) {
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`JSON Server is running on http://localhost:${port}`);
  });
}
