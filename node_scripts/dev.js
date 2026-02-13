// ------------------------------------------------------------------------------------------
import chalk from 'chalk';
import { createServer } from 'vite';

import * as args from './args.js';
import * as strs from '../node_utils/strs.js';


// ------------------------------------------------------------------------------------------
let server;
let shuttingDown = false;


// ------------------------------------------------------------------------------------------
async function main() {
    strs.log();
    strs.log(strs.bullet(`Starting Vite`));

    const port = args.PORT;
    const baseUrl = `http://localhost:${port}`;
    server = await createServer({
        server: {
            port: port,
            open: true
        }
    });
    await server.listen();
    strs.log(strs.bullet(`Running at: ${chalk.cyanBright(`'${baseUrl}'`)}`));

    strs.log();
    strs.log(strs.bullet(`Press CTRL+C to Close.`));
}

async function shutdown() {
    if (shuttingDown) { return; }
    shuttingDown = true;
    
    strs.log();
    strs.log(strs.bullet(`Shutting down...`));
    if (server) { await server.close(); }

    strs.log(2, { doStream: false });
    process.exit(0);
}


// ------------------------------------------------------------------------------------------
args.initialize();
strs.initialize(args.OUTPUT_PATH, args.DO_LOG);

strs.log(strs.banner('Running Dev'));
await main();
process.on('SIGINT', shutdown);     // Ctrl+C
process.on('SIGTERM', shutdown);    // kill command
