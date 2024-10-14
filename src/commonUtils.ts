

export function isArabicDiacriticMark(char: string){
    let diacriticalMarks = /[\u064B-\u0652\u0627]/g;
    return diacriticalMarks.test(char)
}