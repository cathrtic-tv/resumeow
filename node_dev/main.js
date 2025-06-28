// ------------------------------------------------------------------------------------------
import chalk from 'chalk';
import { execSync } from 'child_process';

import * as strings from '../node_scripts/_strings.js';
import * as args from './_args.js';


// ------------------------------------------------------------------------------------------
async function main() {
    console.log(strings.banner('RUNNING DEV MODE...'));
    console.log('Executing...');

    const color = '#576157';
    const titlePrefix = `${strings.NAME} (${args.PORT}) | `;
    const commands = [
        {
            title: `Vite`,
            command: `npx vite --port ${args.PORT}`
        },
        {
            title: `Open`,
            command: `start http://localhost:${args.PORT}`
        }
    ];

    for (const { title, command } of commands) {
        console.log(strings.padL(`- ${title} ${chalk.green(command)}`));

        let terminalCommand = '';
        if (process.platform == 'win32') {
            terminalCommand = `wt --window ${args.PORT} new-tab --startingDirectory . --tabColor ${color} --title "${titlePrefix}${title}" --suppressApplicationTitle cmd /k "${command}"`;
        } else {
            terminalCommand = command;
        }

        execSync(terminalCommand);
    }

    console.log();
}

await main();
