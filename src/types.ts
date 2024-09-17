export interface IVerb{
    root: string
    meaning: string
    form: Array<string>
    small_sarf?: Array<string>
    small_sarf_objects?: Array<IWord>
    past: Array<string[]>
    passive_past?: Array<string[]>
    present: Array<string[]>
    passive_present?: Array<string[]>
}
export interface IWord{
    title: string;
    word: string
}

export interface IVerbProps{
    item: IVerb
    index?: number
}