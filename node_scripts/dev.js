// ------------------------------------------------------------------------------------------
import { spawn } from 'child_process';
import open from 'open';

import * as args from './_args.js';
import * as strs from './_strs.js';


// ------------------------------------------------------------------------------------------
async function main() {
    const vite = spawn('npx', ['vite', '--port', args.PORT], {
        shell: true,
        stdio: 'inherit'
    });
    open(`http://localhost:${args.PORT}`);
}


// ------------------------------------------------------------------------------------------
strs.log(strs.banner('Running Dev'));
await main();
strs.log(2, { doStream: false });
