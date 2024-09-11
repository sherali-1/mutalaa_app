import PastPresentTable from "../components/PastPresentTable"
import VerbTitle from "../components/VerbTitle"
import {IVerb} from "../types"
import SmallSarfTable from "../components/SmallSarfTable.tsx";
import {useMemo} from "react";

const PAST_CONJUGATION = [
    ['أَفْعَلَ', 'أَفْعَلَا', 'أَفْعَلُوا', 'أَفْعَلَتْ', 'أَفْعَلَتَا', 'أَفْعَلْنَ', 'أَفْعَلْتَ', 'أَفْعَلْتُمَا', 'أَفْعَلْتُمْ', 'أَفْعَلْتِ', 'أَفْعَلْتُمَا', 'أَفْعَلْتُنَّ', 'أَفْعَلْتُ', 'أَفْعَلْنَا'],
    ['qildi', 'qildi', 'qildilar', 'qildi (ayol)', 'qildingiz (2 ayol)', 'qildilar(ayollar)', 'qilding', 'qildingiz', 'qildingizlar', 'qilding (ayol)', 'qildingiz (2 ayol)', 'qildingizlar (ayollar)', 'qildim', 'qildik']
]
const PRESENT_CONJUGATION = [
    ['يُفْعِلُ', 'يُفْعِلَانِ', 'يُفْعِلُونَ', 'تُفْعِلُ', 'تُفْعِلَانِ', 'يُفْعِلْنَ', 'تُفْعِلُ', 'تُفْعِلَانِ', 'تُفْعِلُونَ', 'تُفْعِلِينَ', 'تُفْعِلَانِ', 'تُفْعِلْنَ', 'أُفْعِلُ', 'نُفْعِلُ'],
    ['qilyapti / qiladi', 'ikkisi qilyapti / qiladi', 'qilyaptilar / qiladilar', 'qilyapti / qiladi (ayol)', 'ikkisi qilyapti / qiladi (2 ayol)', 'qilyaptilar / qiladilar (ayollar)', 'qilyapsiz / qilasiz', 'ikkingiz qilyapsiz / qilasiz', 'qilyapsizlar / qilasizlar', 'qilyapsiz / qilasiz (ayol)', 'ikkingiz qilyapsiz / qilasiz (2 ayol)', 'qilyapsizlar / qilasizlar (ayollar)', 'qilyapman / qilaman', 'qilyapmiz / qilamiz'],
]
export default function Sarf2Table() {
    // <th>جَمْعٌ</th>
    //         <th>مْفَرٌد</th>
    //         <th>مْفَرٌد</th>
    // const CountableNoun = {
    //     Singular: {
    //         code: 'singular',
    //         title: 'مُفْرَدٌ'
    //     }
    // }
    const conjugation: IVerb[] = ([
        {
            root: 'أَبْلَغَ',
            meaning: 'yetkaz',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَخْرَجَ',
            meaning: 'chiqar',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَبْعَدَ',
            meaning: 'uzoqlashtir',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَتْبَعَ',
            meaning: 'ketidan yubor',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَبْدَلَ',
            meaning: 'o\'zgartir',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَجْلَسَ',
            meaning: 'ek',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَحَدَثَ',
            meaning: 'yarat',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَحْرَقَ',
            meaning: 'kuydir',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَحْضَرَ',
            meaning: 'tayyorla',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَدْرَكَ',
            meaning: 'yetib bor',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        }
    ] as Array<IVerb>).map(verb => {
        verb.past.push(makePastConjugation(verb.root))
        verb.past.push(makePastConjugationMeaning(verb.meaning))
        verb.present.push(makePresentConjugation(verb.root))
        verb.present.push(makePresentConjugationMeaning(verb.meaning))

        return verb;
    })
    return (
        <>

            <div>
                {conjugation.map((item, index) => (<VerbItemTable item={item} index={index + 1}/>))}
                {/* {conjugation.map((item, index)=>(<VerbItem item={item} index={index+1}/>))} */}
            </div>
        </>
    )
}

function VerbItemTable({item, index}: { item: IVerb, index: number }) {
    const small_sarf = useMemo(() => ([
        makeSmallSarf(item) || []
    ]), [item]);
    return (<div className="flex flex-col gap-3 mb-4 text-sm ">
        <VerbTitle item={item} index={index}/>
        <SmallSarfTable
            items={small_sarf}
        />

        <PastPresentTable item={item}/>
    </div>)
}

// function VerbItem({item, index}: {item: IVerb, index: number}){
//     return (<div className="">
//         <h3 className="my-1 text-green-600 arabic-text flex flex-col">
//             <span className="align-middle"> 
//             <span className="px-3 ml-2 rounded-full bg-green-600 text-white text-sm">{index}</span>
//             {item.root} - {item.meaning}  </span>
//             <small className="text-3xl text-blue-600">({item.form.join(' - ')})</small>
//             </h3>
//         <div className="flex flex-col gap-10">
//             <VerbTypes verbs={item.past}/>
//             <VerbTypes verbs={item.present} />
//         </div>

//     </div>)
// }
// function VerbTypes ({verbs} : {verbs: Array<string[]>}){
//     return ( <p className="my-1 flex flex-wrap gap-5">
//         {verbs[0].map((verb, ind)=>(<span className="flex flex-col items-center">
//         <span className="font-bold arabic-text">{verb}</span>
//         <span className="font-normal italic text-lg">{verbs[1][ind]}</span>

//     </span>))}
//     </p>)
// }


function makeSmallSarf(rootVerb: IVerb) {
    const rootArr = rootVerb.root.split('')
    return rootVerb.small_sarf?.map((v, ind) => {
        const result = v.split('')

        if (ind % 2 === 0) result[0] = rootArr[0]
        result[2] = rootArr[2]
        result[4] = rootArr[4]
        result[6] = rootArr[6]
        return result.join('')
    })
}

function makePastConjugation(rootVerb: string) {
    const rootArr = rootVerb.split('')
    return PAST_CONJUGATION[0].map(v => {
        const result = v.split('')
        result[0] = rootArr[0]
        result[2] = rootArr[2]
        result[4] = rootArr[4]
        result[6] = rootArr[6]
        return result.join('')
    })
}

function makePastConjugationMeaning(meaning: string) {
    return PAST_CONJUGATION[1].map(v => {
        const result = v.replace(/ur|qil/g, meaning)
        return result
    })
}

function makePresentConjugationMeaning(meaning: string) {
    return PRESENT_CONJUGATION[1].map(v => {
        const result = v.replace(/ur|qil/g, meaning)
        return result
    })
}

function makePresentConjugation(rootVerb: string) {
    const rootArr = rootVerb.split('')
    return PRESENT_CONJUGATION[0].map(v => {
        const result = v.split('')
        result[2] = rootArr[2]
        result[4] = rootArr[4]
        result[6] = rootArr[6]
        return result.join('')
    })
}