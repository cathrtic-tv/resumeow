// ------------------------------------------------------------------------------------------
import chalk from 'chalk';
import stripAnsi from 'strip-ansi';


// ------------------------------------------------------------------------------------------
export const NAME = 'Résuméow';
export const AUTHOR = `CathRTic[${chalk.green('T.V')}]_`;
export const VERSION = process.env.npm_package_version;


// ------------------------------------------------------------------------------------------
function length(str) {
    return stripAnsi(str).length;
}

function padding(indent = 1) {
    return chalk.hidden('.'.repeat(2 * indent));
}

export function rule() {
    return chalk.white('='.repeat(80));
}

export function padL(str, indent = 1) {
    return `${padding(indent)}${str}`;
}

export function padR(str, indent = 1) {
    return `${str}${padding(indent)}`;
}

export function banner(str) {
    let message = chalk.gray(str);
    let version = chalk.gray(`v${VERSION}`);
    let spacing = chalk.hidden('.'.repeat(length(rule()) - length(message) - length(version) - length(padding(2))));

    return (
        rule()
        + '\n'
        + '\n' + padL(`${NAME} - ${AUTHOR}`)
        + '\n' + padL(`${message}${spacing}${version}`)
        + '\n'
        + '\n' + rule()
        + '\n'
        + '\n'
    );
}
