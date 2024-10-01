

export function isArabicDiacriticMark(char: string){
    let diacriticalMarks = /[\u064B-\u0652]/g;
    return diacriticalMarks.test(char)
}