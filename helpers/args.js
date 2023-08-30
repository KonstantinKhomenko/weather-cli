const getArgs = (args) => {
    const [executer, file, ...rest] = args

    return rest.reduce((acc, value, index, array) => {
        if (value.charAt(0) === '-') {
            acc[value.substring(1)] = index === array.length - 1 || array[index + 1].charAt(0) === '-' ? true : array[index + 1]
        }

        return acc
    }, {})
 }

export {getArgs}