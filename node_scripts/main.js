// ------------------------------------------------------------------------------------------
import { posix } from 'path';
import { globSync } from 'glob';
import fs from 'fs-extra';
import chalk from 'chalk';
import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import { createServer } from 'vite';

import * as args from './args.js';
import * as strs from '../node_utils/strs.js';


// ------------------------------------------------------------------------------------------
const wipeBlacklist = [
    'console.ansi',
    'console.log',
];

let server;
let browser;
let shuttingDown = false;


// ------------------------------------------------------------------------------------------
async function main() {
    fs.ensureDirSync(args.OUTPUT_PATH);

    // -- Wipe deploy path
    strs.log();
    strs.log(strs.bullet(`Cleaning up: ${chalk.yellowBright(`'${args.OUTPUT_PATH}'`)}`));

    const toWipeLogMax = 10;
    const toWipeList = globSync('**/*', { cwd: args.OUTPUT_PATH, dot: true, ignore: wipeBlacklist });
    for (const [index, toWipeItem] of toWipeList.entries()) {
        fs.removeSync(posix.join(args.OUTPUT_PATH, toWipeItem));
        strs.log(strs.bullet(`${chalk.red(`'${toWipeItem}'`)}`, { level: 1, style: '-X' }), { doConsole: ((index < toWipeLogMax)) });
    }
    if (toWipeLogMax < toWipeList.length) {
        strs.log(strs.bullet(`...and ${toWipeList.length - toWipeLogMax} more file(s)`, { level: 1, style: '-X' }), { doStream: false });
    }
    strs.log(`Total removed: ${toWipeList.length}`);


    // -- Start Vite and Puppeteer
    strs.log();
    strs.log(strs.bullet(`Starting Vite`));

    const port = (parseInt(args.PORT) + 1).toString();
    const baseUrl = `http://localhost:${port}`;
    server = await createServer({
        server: {
            port: port,
            open: false
        }
    });
    await server.listen();
    strs.log(strs.bullet(`Running at: ${chalk.cyanBright(`'${baseUrl}'`)}`));

    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(baseUrl, { waitUntil: 'networkidle0' });


    // -- Loop resumes
    strs.log();
    strs.log(strs.bullet(`Saving resumes:`));

    const pageHomeHtml = await page.content();
    const $pageHomeHtml = cheerio.load(pageHomeHtml);
    for (const element of $pageHomeHtml('#resume-list .resume-list__item').toArray()) {
        const name = $pageHomeHtml(element).find('.resume-list__item-name').html().replace('&nbsp;&nbsp;', ' ');
        const buttons = $pageHomeHtml(element).find('.resume-list__item-buttons');

        // For each style button
        for (const anchor of buttons.find('a').toArray()) {
            const href = $pageHomeHtml(anchor).attr('href');
            const resumePath = posix.join(...href.split('/').slice(0, 3));
            const outputPath = posix.join(args.OUTPUT_PATH, resumePath);
            fs.ensureDirSync(outputPath);

            await page.goto(new URL(href, baseUrl).href, { waitUntil: 'networkidle0' });
            await page.pdf({
                path: posix.join(outputPath, `${name}.pdf`),
                format: 'A4',
                printBackground: true
            });
            strs.log(strs.bullet(chalk.blueBright(`'${posix.join(resumePath, `${name}.pdf`)}'`), { level: 1, style: '->' }));
        }
    }
}

async function shutdown() {
    if (shuttingDown) { return; }
    shuttingDown = true;
    
    strs.log();
    strs.log(strs.bullet(`Shutting down...`));
    if (browser) { await browser.close(); }
    if (server) { await server.close(); }
    
    strs.log(2, { doStream: false });
    process.exit(0);
}


// ------------------------------------------------------------------------------------------
args.initialize();
strs.initialize(args.OUTPUT_PATH, args.DO_LOG);

strs.log(strs.banner('Running Main'));
await main();
await shutdown();
