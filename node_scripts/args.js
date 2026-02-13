// ------------------------------------------------------------------------------------------
import { posix } from 'path';
import fs from 'fs-extra';
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

    .hide('version')
    .parse();

export let DO_LOG;
export let OUTPUT_PATH;

export let PORT;


// ------------------------------------------------------------------------------------------
export function initialize() {
    let name = '.env.indev';    
    if (ARGS.env) {
        if (fs.existsSync(ARGS.env)) {
            dotenv.config({ path: ARGS.env });
            name = ARGS.env;
        } else {
            throw new Error('The given --env does NOT exist.');
        }
    }
    
    DO_LOG = validate(process.env.DO_LOG, true);
    OUTPUT_PATH = validate(process.env.OUTPUT_PATH, posix.resolve('./node_outputs', name));

    PORT = validate(process.env.PORT, '3000');
}


// ------------------------------------------------------------------------------------------
function validate(value, value_default) {
    if ((value === undefined) || (value === '')) {
        return value_default;
    }

    switch (typeof(value_default)) {
        case 'boolean':
            return (value.toLowerCase() === 'true');
        case 'number':
            return Number(value);
        case 'object':
            return JSON.parse(value);
    }
    return value;
}
