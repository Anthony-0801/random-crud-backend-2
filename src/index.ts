import "module-alias/register";
import { createServer } from "./server";
import config from "./config";

const server = createServer();

server.listen(3000, () => {
  console.log(`Server is running on ${config.port}`);
});
