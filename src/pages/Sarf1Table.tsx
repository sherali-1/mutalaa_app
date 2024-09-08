interface IVerb{
    root: string
    meaning: string
    form: Array<string>
    past: Array<string[]>
    present: Array<string[]>

}
const PRONOUNS = [
    ['هُوَ', 'هُمَا', 'هُمْ', 'هِيَ', 'هُمَا', 'هُنَّ', 'أَنْتَ', 'أَنْتُمَا', 'أَنْتُمْ', 'أَنْتِ', 'أَنْتُمَا', 'أَنْتُنَّ', 'أَنَا', 'نَحْنُ'],
    ['u', 'u ikkisi', 'ular', 'u (ayol)', 'u ikkisi (ayol)', 'ular (ayollar)', 'siz / sen', 'siz ikkingiz', 'sizlar / senlar', 'siz / sen (ayol)', 'siz ikkingiz (ayol)', 'sizlar / senlar (ayollar)', 'men', 'biz'], 
]
const PAST_CONJUGATION = [
    ['ضَرَبَ', 'ضَرَبَا','ضَرَبُو','ضَرَبَتْ','ضَرَبَتَا','ضَرَبْنَ','ضَرَبْتَ','ضَرَبْتُمَا','ضَرَبْتُمْ','ضَرَبْتِ','ضَرَبْتُمَا','ضَرَبْتُنَّ','ضَرَبْتُ','ضَرَبْنَا'],
    ['urdi', 'urdi', 'urdilar', 'urdi (ayol)' ,'urdingiz (2 ayol)', 'urdilar(ayollar)', 'urding', 'urdingiz', 'urdingizlar', 'urding (ayol)', 'urdingiz (2 ayol)', 'urdingizlar (ayollar)', 'urdim', 'urdik']
]
const PRESENT_CONJUGATION= [
    ['يَدْرِبُ', 'يَدْرِبَانِ','يَدْرِبُونَ','تَدْرِبُ','تَدْرِبَانِ','يَدْرِبْنَ','تَدْرِبُ','تَدْرِبَانِ','تَدْرِبُونَ','تَدْرِبِينَ','تَدْرِبَانِ','تَدْرِبْنَ','أَدْرِبُ','نَدْرِبُ'],
    ['uryapti / uradi', 'ikkisi uryapti / uradi','uryaptilar / uradilar','uryapti / uradi (ayol)','ikkisi uryapti / uradi (2 ayol)','uryaptilar / uradilar (ayollar)','uryapsiz / urasiz','ikkingiz uryapsiz / urasiz','uryapsizlar / urasizlar','uryapsiz / urasiz (ayol)','ikkingiz uryapsiz / urasiz (2 ayol)','uryapsizlar / urasizlar (ayollar)','uryapman / uraman','uryapmiz / uramiz'],
]
export default function Sarf1Table (){
    // <th>جَمْعٌ</th>
    //         <th>مْفَرٌد</th>
    //         <th>مْفَرٌد</th>
    // const CountableNoun = {
    //     Singular: {
    //         code: 'singular',
    //         title: 'مُفْرَدٌ'
    //     }
    // }
    const conjugation : IVerb[] = [
        {
        root: 'ضَرَبَ',
        meaning: 'ur',
        form: ['فَعَلَ', 'يَفْعَلُ'],
        past: [
            [],
            ['urdi', 'urdi', 'urdilar', 'urdi (ayol)' ,'urdingiz (2 ayol)', 'urdilar(ayollar)', 'urding', 'urdingiz', 'urdingizlar', 'urding (ayol)', 'urdingiz (2 ayol)', 'urdingizlar (ayollar)', 'urdim', 'urdik']
        ],
        present: [
            [],
            ['uryapti / uradi', 'ikkisi uryapti / uradi','uryaptilar / uradilar','uryapti / uradi (ayol)','ikkisi uryapti / uradi (2 ayol)','uryaptilar / uradilar (ayollar)','uryapsiz / urasiz','ikkingiz uryapsiz / urasiz','uryapsizlar / urasizlar','uryapsiz / urasiz (ayol)','ikkingiz uryapsiz / urasiz (2 ayol)','uryapsizlar / urasizlar (ayollar)','uryapman / uraman','uryapmiz / uramiz'],
        ]
    },
        {
        root: 'جَلَسَ',
        meaning: 'o\'tir',
        form: ['فَعَلَ', 'يَفْعَلُ'],
        past: [
            [],
            ['o`tirdi', 'o`tirdi', 'o`tirdilar', 'o`tirdi (ayol)' ,'o`tirdingiz (2 ayol)', 'o`tirdilar(ayollar)', 'o`tirding', 'o`tirdingiz', 'o`tirdingizlar', 'o`tirding (ayol)', 'o`tirdingiz (2 ayol)', 'o`tirdingizlar (ayollar)', 'o`tirdim', 'o`tirdik']
        ],
        present: [
           [],
            ['o`tiryapti / o`tiradi', 'ikkisi o`tiryapti / o`tiradi','o`tiryaptilar / o`tiradilar','o`tiryapti / o`tiradi (ayol)','ikkisi o`tiryapti / o`tiradi (2 ayol)','o`tiryaptilar / o`tiradilar (ayollar)','o`tiryapsiz / o`tirasiz','ikkingiz o`tiryapsiz / o`tirasiz','o`tiryapsizlar / o`tirasizlar','o`tiryapsiz / o`tirasiz (ayol)','ikkingiz o`tiryapsiz / o`tirasiz (2 ayol)','o`tiryapsizlar / o`tirasizlar (ayollar)','o`tiryapman / o`tiraman','o`tiryapmiz / o`tiramiz'],
        ]
    },
].map(verb=>{
    verb.past[0] = makePastConjugation(verb.root)
    verb.present[0] = makePresentConjugation(verb.root)

    return verb;
})
    return (
        <>
        
        <div>
            {conjugation.map((item, index)=>(<VerbItemTable item={item} index={index+1}/>))}
            {conjugation.map((item, index)=>(<VerbItem item={item} index={index+1}/>))}
        </div>
        </>
    )
}

function VerbItemTable({item, index}: {item: IVerb, index: number}){
    return (<div className="flex flex-col gap-3 mb-4 text-sm shadow-md ">
       <h3 className="my-1 text-green-600 arabic-text flex flex-col">
            <span className="align-middle"> 
            <span className="px-3 ml-2 rounded-full bg-green-600 text-white text-sm">{index}</span>
            {item.root} - {item.meaning}  </span>
            <small className="text-3xl text-blue-600">({item.form.join(' - ')})</small>
            </h3>

            <div className="relative overflow-x-auto sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Olmosh
                </th>
                <th scope="col" className="px-6 py-3">
                O'tgan zamon fe'l
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Ma'nosi
                </th>
                <th scope="col" className="px-6 py-3">
                Hozirgi zamon fe'l
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Ma'nosi
                </th>
            </tr>
        </thead>
        <tbody>
            {PRONOUNS[0].map((pn, ind)=>(<tr key={pn}    className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                {pn} - <span className="italic">{PRONOUNS[1][ind]}</span>
                </th>
                <td className="arabic-text px-6 py-4 font-medium text-gray-900">
                {item.past[0][ind]}
                </td>
                <td className="px-6 py-4 italic bg-gray-50 dark:bg-gray-800">
                {item.past[1][ind]}
                </td>
                <td className="arabic-text px-6 py-4 font-medium text-gray-900">
                {item.present[0][ind]}
                </td>
                <td className="px-6 py-4 italic bg-gray-50 dark:bg-gray-800">
                {item.present[1][ind]}
                </td>
            </tr>))}
        </tbody>
    </table>
</div>
    </div>)
}
function VerbItem({item, index}: {item: IVerb, index: number}){
    return (<div className="">
        <h3 className="my-1 text-green-600 arabic-text flex flex-col">
            <span className="align-middle"> 
            <span className="px-3 ml-2 rounded-full bg-green-600 text-white text-sm">{index}</span>
            {item.root} - {item.meaning}  </span>
            <small className="text-3xl text-blue-600">({item.form.join(' - ')})</small>
            </h3>
        <div className="flex flex-col gap-10">
            <VerbTypes verbs={item.past}/>
            <VerbTypes verbs={item.present} />
        </div>
        
    </div>)
}
function VerbTypes ({verbs} : {verbs: Array<string[]>}){
    return ( <p className="my-1 flex flex-wrap gap-5">
        {verbs[0].map((verb, ind)=>(<span className="flex flex-col items-center">
        <span className="font-bold arabic-text">{verb}</span>
        <span className="font-normal italic text-lg">{verbs[1][ind]}</span>
    
    </span>))}
    </p>)
}


function makePastConjugation(rootVerb: string){
    const rootArr = rootVerb.split('')
   return  PAST_CONJUGATION[0].map(v=>{
        const result = v.split('')
        result[0] = rootArr[0]
        result[2] = rootArr[2]
        result[4] = rootArr[4]
        return result.join('')
    })
}
function makePresentConjugation(rootVerb: string){
    const rootArr = rootVerb.split('')
   return  PRESENT_CONJUGATION[0].map(v=>{
        const result = v.split('')
        result[2] = rootArr[0]
        result[4] = rootArr[2]
        result[6] = rootArr[4]
        return result.join('')
    })
}