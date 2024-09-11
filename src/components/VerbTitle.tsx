import { IVerbProps } from "../types";

export default function VerbTitle({item, index}:IVerbProps ){
    return (<h3 className="my-1 text-green-600 arabic-text flex flex-col">
        <span className="align-middle"> 
        <span className="px-3 ml-2 rounded-full bg-green-600 text-white text-sm">{index}</span>
        {item.root} - {item.meaning}moq  </span>
        <small className="text-3xl text-blue-600">({item.form.join(' - ')})</small>
        </h3>)
}