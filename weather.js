#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";

const initCLI = () => {
    const args = getArgs(process.argv)
    
    console.log('process.argv', process.argv);

    console.log('args', args);
}

initCLI()