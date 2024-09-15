import { IVerbProps } from "../types";

export default function VerbTitle({item, index}:IVerbProps ){
    return (<h3 className="my-1 text-green-600 arabic-text flex flex-row gap-4">
        <span className="align-middle"> 
        <span className="px-3 ml-2 rounded-full bg-green-600 text-white text-sm">{index}</span>
        <span className="font-bold arabic-text">{item.root}</span> - {item.meaning.split(',')?.map(m=>m + 'moq')?.join(', ')}  </span>
        <small className="text-lg text-blue-600">({item.form.join(' - ')})</small>
        </h3>)
}
export function VerbTitle2({item, index}:IVerbProps ){
    return (<h3 className="my-1 text-green-600  arabic-text inline-flex flex-row gap-4">
        <span className="align-middle"> 
        <span className="px-3 ml-2 rounded-full bg-green-600 text-white text-sm">{index}</span>
        <span className="font-bold arabic-text">{item.root}</span> - <span className="text-gray-600">{item.meaning.split(',')?.map(m=>m + 'moq')?.join(', ')}</span>  </span>
        </h3>)
}