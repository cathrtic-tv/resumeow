// ------------------------------------------------------------------------------------------
import { posix } from 'path';
import chalk from 'chalk';
import dotenv from 'dotenv';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';


// ------------------------------------------------------------------------------------------
const ARGS = yargs(hideBin(process.argv))
    .usage(`${chalk.yellowBright('npm')} run main ${chalk.gray('--env')} ${chalk.blueBright(`'./path/to/.env'`)}`)

    .boolean('help')
    .describe('help', chalk.yellowBright('Show this help message'))

    .string('env')
    .describe('env', chalk.blueBright('.env filepath to load'))

    .demandOption(['env'])
    .hide('version')
    .parse();


// ------------------------------------------------------------------------------------------
dotenv.config({ path: ARGS.env });

export const OUTPUT_PATH = (process.env.OUTPUT_PATH || posix.resolve('./node_outputs', ARGS.env));
export const PORT = (process.env.PORT || '3000');
