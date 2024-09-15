import { PRONOUNS } from "../constants"
import { IVerbProps } from "../types"

interface IPastPresentTable extends IVerbProps {
}
export default function PassivePastPresentTable ({item}: IPastPresentTable){
    return (<div className="relative drop-shadow-md border border-gray-300">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Olmosh
                    </th>
                    <th scope="col" className="px-6 py-3">
                    O'tgan zamon (ma'lum)
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        O'tgan zamon (majhul)
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                        Hozirgi zamon (ma'lum)
                    </th>

                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Hozirgi zamon (majhul)
                    </th>
                </tr>
            </thead>
            <tbody>
                {PRONOUNS[0].map((pn, ind)=>(<tr key={pn}    className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-5 py-3 font-normal whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    {pn} - <span className="italic">{PRONOUNS[1][ind]}</span>
                    </th>
                    <td className="arabic-text px-5 py-3 font-medium text-gray-900">
                    {item.past?.[0][ind]}
                    </td>
                    <td className="arabic-text px-5 py-3  bg-gray-50 dark:text-white dark:bg-gray-800">
                        {item.passive_past?.[0][ind]}
                    </td>
                    <td className="arabic-text px-5 py-3   font-medium text-gray-900">
                    {item.present?.[0][ind]}
                    </td>
                    <td className="arabic-text px-5 py-3 bg-gray-50 dark:text-white dark:bg-gray-800">
                    {item.passive_present?.[0][ind]}
                    </td>
                </tr>))}
            </tbody>
        </table>
    </div>)
}