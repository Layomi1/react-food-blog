import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("server/db.json"); // adjust path if needed
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// ⚡ Local vs Vercel handling
if (process.env.VERCEL) {
  // Vercel needs an export (no .listen)
  export default server;
} else {
  // Local dev: run on port
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`JSON Server is running on http://localhost:${port}`);
  });
}
