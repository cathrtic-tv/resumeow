// ------------------------------------------------------------------------------------------
import { posix } from 'path';
import { globSync } from 'glob';
import { spawn } from 'child_process';
import kill from 'tree-kill';
import fs from 'fs-extra';
import url from 'url';
import chalk from 'chalk';
import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

import * as args from './_args.js';
import * as strs from './_strs.js';


// ------------------------------------------------------------------------------------------
async function main() {
    fs.ensureDirSync(args.OUTPUT_PATH);

    // -- Wipe deploy path
    strs.log();
    strs.log(strs.bullet(`Cleaning up: ${chalk.yellowBright(`'${args.OUTPUT_PATH}'`)}`));

    const toWipeLogMax = 10;
    const toWipeBlacklist = ['console.ansi', 'console.log',];
    const toWipeList = globSync('**/*', { cwd: args.OUTPUT_PATH, dot: true, ignore: toWipeBlacklist });
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
    const port = (parseInt(args.PORT) + 1).toString();
    const vite = spawn('npx', ['vite', '--port', port], {
        shell: true,
        stdio: 'inherit'
    });

    const baseUrl = `http://localhost:${port}`;
    const browser = await puppeteer.launch();
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

            await page.goto(url.resolve(baseUrl, href), { waitUntil: 'networkidle0' });
            await page.pdf({
                path: posix.join(outputPath, `${name}.pdf`),
                format: 'A4',
                printBackground: true
            });
            strs.log(strs.bullet(chalk.blueBright(`'${posix.join(resumePath, `${name}.pdf`)}'`), { level: 1, style: '->' }));
        }
    }


    // -- Close Vite and Puppeteer
    await browser.close();
    kill(vite.pid, 'SIGTERM');
}


// ------------------------------------------------------------------------------------------
strs.log(strs.banner('Running Main'));
await main();
strs.log(2, { doStream: false });
