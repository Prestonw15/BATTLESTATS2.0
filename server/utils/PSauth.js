import psn-api from "psn-api";
import { exchangeCodeForAccessToken} from "psn-api";
import { exchangeNpssoForCode } from "psn-api";


const accessCode = await exchangeNpssoForCode("<nMpOd5CZDMhV16Kjk2LRktPJMyUSPJzzNkXLqUEZgFgKojt4hVM0G6lrgnZpLbm4>");
console.log(accessCode);

const authorization = await exchangeCodeForAccessToken(accessCode);


