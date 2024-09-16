import VerbTitle, { VerbTitle2 } from "../components/VerbTitle.tsx"
import {IVerb} from "../types.ts"
import SmallSarfTable from "../components/SmallSarfTable.tsx";
import {useMemo, useState} from "react";
import PassivePastPresentTable from "../components/PassivePastPresentTable.tsx";
import {SARF_MODES} from "../constants.ts";

const PAST_CONJUGATION = [
    ['أَفْعَلَ', 'أَفْعَلَا', 'أَفْعَلُوا', 'أَفْعَلَتْ', 'أَفْعَلَتَا', 'أَفْعَلْنَ', 'أَفْعَلْتَ', 'أَفْعَلْتُمَا', 'أَفْعَلْتُمْ', 'أَفْعَلْتِ', 'أَفْعَلْتُمَا', 'أَفْعَلْتُنَّ', 'أَفْعَلْتُ', 'أَفْعَلْنَا'],
    ['qildi', 'qildi', 'qildilar', 'qildi (ayol)', 'qildingiz (2 ayol)', 'qildilar(ayollar)', 'qilding', 'qildingiz', 'qildingizlar', 'qilding (ayol)', 'qildingiz (2 ayol)', 'qildingizlar (ayollar)', 'qildim', 'qildik']
]
const PRESENT_CONJUGATION = [
    ['يُفْعِلُ', 'يُفْعِلَانِ', 'يُفْعِلُونَ', 'تُفْعِلُ', 'تُفْعِلَانِ', 'يُفْعِلْنَ', 'تُفْعِلُ', 'تُفْعِلَانِ', 'تُفْعِلُونَ', 'تُفْعِلِينَ', 'تُفْعِلَانِ', 'تُفْعِلْنَ', 'أُفْعِلُ', 'نُفْعِلُ'],
    ['qilyapti / qiladi', 'ikkisi qilyapti / qiladi', 'qilyaptilar / qiladilar', 'qilyapti / qiladi (ayol)', 'ikkisi qilyapti / qiladi (2 ayol)', 'qilyaptilar / qiladilar (ayollar)', 'qilyapsiz / qilasiz', 'ikkingiz qilyapsiz / qilasiz', 'qilyapsizlar / qilasizlar', 'qilyapsiz / qilasiz (ayol)', 'ikkingiz qilyapsiz / qilasiz (2 ayol)', 'qilyapsizlar / qilasizlar (ayollar)', 'qilyapman / qilaman', 'qilyapmiz / qilamiz'],
]
export default function Dictionary() {
    const [mode, setMode] = useState('collapsed')
    const conjugation: IVerb[] = ([
        {
            root: 'أَبْلَغَ',
            meaning: 'yetkaz',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَخْرَجَ',
            meaning: 'chiqar',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَبْعَدَ',
            meaning: 'uzoqlashtir',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَتْبَعَ',
            meaning: 'ketidan yubor',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَبْدَلَ',
            meaning: 'o\'zgartir',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَجْلَسَ',
            meaning: 'ek',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَحَدَثَ',
            meaning: 'yarat',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَحْرَقَ',
            meaning: 'kuydir',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَحْضَرَ',
            meaning: 'tayyorla',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَدْرَكَ',
            meaning: 'yetib bor',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَخْبَرَ',
            meaning: 'xabar ber',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَنْزَلَ',
            meaning: 'tushir',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَشْرَكَ',
            meaning: 'sherik qil',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَغْلَقَ',
            meaning: 'yopmoq',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَسْمَعَ',
            meaning: 'yop',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَشْرَفَ',
            meaning: 'yaqin bo\'l',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَعْلَنَ',
            meaning: 'e\'lon qil',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَفْهَمَ',
            meaning: 'tushuntir',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَدْخَلَ',
            meaning: 'kirit',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَكْرَمَ',
            meaning: 'ikrom qil',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَفْلَحَ',
            meaning: 'muvaffaqiyat qozon',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },


        {
            root: 'أَخْبَرَ',
            meaning: 'xabar ber',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَنْزَلَ',
            meaning: 'tushir',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَفْسَدَ',
            meaning: 'buz',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَفْلَحَ',
            meaning: 'muvaffaqiyat qozon',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَسْبَغَ',
            meaning: 'tortiq qil, ber',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَلْعَنَ',
            meaning: 'la`lantla',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَغْرَقَ',
            meaning: 'cho`ktir, botir',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },

        {
            root: 'أَنْكَرَ',
            meaning: 'inkor qil, rad qil, ton',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَنْبأَ',
            meaning: 'bashorat qil',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَعْلَنَ',
            meaning: 'e\'lon qil',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَنْبَتَ',
            meaning: 'o\'stir, (urug\'ni) undir',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَنْفَقَ',
            meaning: 'xarajat qil, sarfla, sovur',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَعْرَضَ',
            meaning: 'yuz o\'gir, chetlash, teskari o\'giril',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَنْدَرَ',
            meaning: 'noyob bo`l',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَدْبَرَ',
            meaning: 'orqa o\'gir, o\'zini orqaga tort',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَقْبَلَ',
            meaning: 'olg\'a qadam bos, yaqinlash',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَعْلَمَ',
            meaning: 'xabardor qil, bildir',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَرْصَدَ',
            meaning: '(pul) ajrat, mablag\' tayinlamoq',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَجْدَلَ',
            meaning: 'bahslash',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
        {
            root: 'أَحْزَنَ',
            meaning: 'xafa qil, mahzun qil',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالاً', 'مُفْعِلٌ'],
            past: [],
            present: [],
        },
    ] as Array<IVerb>).map(verb => {
        verb.past.push(makePastConjugation(verb.root))
        verb.past.push(makePastConjugationMeaning(verb.meaning))
        verb.present.push(makePresentConjugation(verb.root))
        verb.present.push(makePresentConjugationMeaning(verb.meaning))
        if (!verb.passive_past) {
            verb.passive_past = []
        }
        verb.passive_past.push(makePassivePastConjugation(verb.root))
        if (!verb.passive_present) {
            verb.passive_present = []
        }
        verb.passive_present?.push(makePassivePresentConjugation(verb.root))

        return verb;
    })

    const handleModeChange = () => {
        setMode(prev => {
            return prev === 'collapsed' ? 'expanded' : 'collapsed'
        })
    }
    // @ts-ignore
    return (
        <div>
            <header className="flex flex-row justify-between">
            <div className="relative hidden md:block mb-3">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
    </div>
    {/* <button className="border border-gray-300 px-2 py-1 rounded-md text-lg" onClick={handleModeChange}>
                {SARF_MODES[mode === 'collapsed' ? 'expanded' : 'collapsed']}
            </button> */}
        </header>
            <div className="flex flex-wrap justify-evenly gap-6 ">
            {mode === 'collapsed' ?
                conjugation.map((item, index) => (
                    <CollapsedVerbItemTable item={item} index={index + 1}/>)) :
                conjugation.map((item, index) =>
                    (<VerbItem item={item} index={index + 1}/>))
            }
            </div>
        </div>
    )
}

function VerbItem({item, index}: { item: IVerb, index: number }) {
    return (<div className="flex flex-wrap gap-3 mb-4 text-sm ">
        <VerbTitle2 item={item} index={index}/>
    </div>)
}

function CollapsedVerbItemTable({item, index}: { item: IVerb, index: number }) {
    return (<div className="flex flex-wrap  gap-3 mb-4 text-sm ">
        <VerbTitle2 item={item} index={index}/>
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
    const result: Array<Array<string>> = []
    const active_sarf = rootVerb.small_sarf?.map((v, ind) => {
        const result = v.split('')

        if (ind % 2 === 0) result[0] = rootArr[0]
        result[2] = rootArr[2]
        result[4] = rootArr[4]
        result[6] = rootArr[6]
        return result.join('')
    })
    if (active_sarf?.length) {
        result.push(active_sarf)
    }

    const passive_sarf = active_sarf?.map((v, ind) => {
        const result = v.split('')
        if (ind === 0) {
            result[1] = 'ُ'
            result[5] = 'ِ'
        } else if (ind === 1) {
            result[5] = 'َ'
        } else if (ind === 3) {
            result[5] = 'َ'
        }
        return result.join('')
    })
    if (passive_sarf?.length) {
        result.push(passive_sarf)
    }
    return result
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

function makePassivePastConjugation(rootVerb: string) {
    const rootArr = rootVerb.split('')
    return PAST_CONJUGATION[0].map(v => {
        const result = v.split('')
        result[0] = rootArr[0]
        result[1] = 'ُ'
        result[2] = rootArr[2]
        result[4] = rootArr[4]
        result[5] = 'ِ'
        result[6] = rootArr[6]
        return result.join('')
    })
}

function makePastConjugationMeaning(meaning: string) {
    return PAST_CONJUGATION[1].map(v => {
        const verbs = meaning.replace(/,\s/, ',').split(',')
        const result = verbs.reduce((str, m) => {
            if (str) {
                str += ', '
            }
            str += v.replace(/ur|qil/g, m)
            return str
        }, '')
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

function makePresentConjugationMeaning(meaning: string) {
    return PRESENT_CONJUGATION[1].map(v => {
        const verbs = meaning.replace(/,\s/, '').split(',')
        const result = verbs.reduce((str, m) => {
            if (str) {
                str += ', '
            }
            str += v.replace(/ur|qil/g, m)
            return str
        }, '')
        return result
    })
}

function makePassivePresentConjugation(rootVerb: string) {
    const rootArr = rootVerb.split('')
    return PRESENT_CONJUGATION[0].map(v => {
        const result = v.split('')
        result[2] = rootArr[2]
        result[4] = rootArr[4]
        result[5] = 'َ'
        result[6] = rootArr[6]
        return result.join('')
    })
}