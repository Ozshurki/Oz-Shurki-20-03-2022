export const padNumber = (iconNumber: string | undefined): string => {

    const stringNum = iconNumber + '';
    const strLen = stringNum.length;

    if (strLen === 1)
        return '0' + stringNum;
    else
        return stringNum;

};