import chalk from 'chalk'
import dedent from 'dedent-js'

export const printError = (error) => {
    console.log(`${chalk.bgRed(' Error ')} ${error}`);
}

export const printSuccess = (message) => {
    console.log(`${chalk.bgGreen(' Error ')} ${message}`);
}

export const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan.blackBright.bold(' Help ')}
        Без параметров - вывод погоды
        -s [City] для установки города
        -h для вывода помощи
        -t [Api_key] для сохранения токена`)
}
