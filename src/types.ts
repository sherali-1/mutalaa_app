export interface IVerb{
    root: string
    meaning: string
    form: Array<string>
    small_sarf?: Array<string>
    past: Array<string[]>
    passive_past?: Array<string[]>
    present: Array<string[]>
    passive_present?: Array<string[]>
}

export interface IVerbProps{
    item: IVerb
    index?: number
}