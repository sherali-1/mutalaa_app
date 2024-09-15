import clsx from "clsx";

interface ISmallSarfTable {
    items?: Array<Array<string>>
}

export default function SmallSarfTable({items}: ISmallSarfTable) {
    return items?.length && (<div className="relative drop-shadow-md border border-gray-300">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    O'tgan zamon fe'l
                </th>
                <th scope="col" className="px-6 py-3">
                    Hozirgi zamon fe'l
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Masdar
                </th>
                <th scope="col" className="px-6 py-3">
                    Ismi Foil
                </th>
            </tr>
            </thead>
            <tbody>
            {items.map((sarf, ind0) => (<tr key={ind0} className="border-b border-gray-200 dark:border-gray-700">
                {sarf.map((verb, ind) => (
                    <td className={clsx("arabic-text px-5 py-3 font-medium", {
                        "bg-gray-50 dark:bg-gray-800": ind % 2 === 0,
                        "text-gray-900": ind % 2 === 1
                    })}>
                        {verb}
                    </td>
                ))}
            </tr>))}
            </tbody>
        </table>
    </div>) || null
}