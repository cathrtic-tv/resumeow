// ------------------------------------------------------------------------------------------
import path from 'path';
import chalk from 'chalk';
import dotenv from 'dotenv';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

import * as strings from '../node_scripts/_strings.js';


// ------------------------------------------------------------------------------------------
const ARGS = yargs(hideBin(process.argv))
    .usage(
        strings.banner('DEV MODE HELP')
        + '\n' + 'Usage:'
        + '\n' + strings.padL(`${chalk.yellowBright('npm')} run dev ${chalk.gray('--env')} ${chalk.blueBright(`"./path/to/.env"`)}`)
    )

    .hide('version')

    .boolean('help')
    .describe('help', chalk.yellowBright('Show this help message'))

    .string('env')
    .alias('env', 'e')
    .describe('env', chalk.blueBright('.env filepath to load'))

    .demandOption(['env'])
    .parse();


// ------------------------------------------------------------------------------------------
dotenv.config({ path: ARGS.env });

export const PORT = (process.env.PORT || '3000');
