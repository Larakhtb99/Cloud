/**
 * Mandatory Hello World function.
 * @returns A string which contains "Hello world!"
 */
export const helloWorld = (): string => {
  return 'Hello world!';
};
import { result } from "./systeminformation";
const http = require('http');
const requestListener = function (req, res) {
  res.writeHead(200,{'content-type':'application/json'});
  res.write('{"key":"value"}');
  res.end();
}
const server = http.createServer(requestListener);
server.listen(8081);