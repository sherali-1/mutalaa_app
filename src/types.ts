export interface IVerb{
    root: string
    meaning: string
    form: Array<string>
    small_sarf?: Array<string>
    past: Array<string[]>
    present: Array<string[]>
}

export interface IVerbProps{
    item: IVerb
    index?: number
}