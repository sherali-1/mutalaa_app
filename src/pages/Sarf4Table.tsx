import { useMemo, useState } from "react";
import SmallSarf from "../components/SmallSarf.tsx";
import VerbTitle from "../components/VerbTitle.tsx";
import { SMALL_SARF_FORMS } from "../constants.ts";
import { IVerb } from "../types.ts";

const PAST_CONJUGATION = [
    ['أَفْعَلَ', 'أَفْعَلَا', 'أَفْعَلُوا', 'أَفْعَلَتْ', 'أَفْعَلَتَا', 'أَفْعَلْنَ', 'أَفْعَلْتَ', 'أَفْعَلْتُمَا', 'أَفْعَلْتُمْ', 'أَفْعَلْتِ', 'أَفْعَلْتُمَا', 'أَفْعَلْتُنَّ', 'أَفْعَلْتُ', 'أَفْعَلْنَا'],
    ['qildi', 'qildi', 'qildilar', 'qildi (ayol)', 'qildingiz (2 ayol)', 'qildilar(ayollar)', 'qilding', 'qildingiz', 'qildingizlar', 'qilding (ayol)', 'qildingiz (2 ayol)', 'qildingizlar (ayollar)', 'qildim', 'qildik']
]
const PRESENT_CONJUGATION = [
    ['يُفْعِلُ', 'يُفْعِلَانِ', 'يُفْعِلُونَ', 'تُفْعِلُ', 'تُفْعِلَانِ', 'يُفْعِلْنَ', 'تُفْعِلُ', 'تُفْعِلَانِ', 'تُفْعِلُونَ', 'تُفْعِلِينَ', 'تُفْعِلَانِ', 'تُفْعِلْنَ', 'أُفْعِلُ', 'نُفْعِلُ'],
    ['qilyapti / qiladi', 'ikkisi qilyapti / qiladi', 'qilyaptilar / qiladilar', 'qilyapti / qiladi (ayol)', 'ikkisi qilyapti / qiladi (2 ayol)', 'qilyaptilar / qiladilar (ayollar)', 'qilyapsiz / qilasiz', 'ikkingiz qilyapsiz / qilasiz', 'qilyapsizlar / qilasizlar', 'qilyapsiz / qilasiz (ayol)', 'ikkingiz qilyapsiz / qilasiz (2 ayol)', 'qilyapsizlar / qilasizlar (ayollar)', 'qilyapman / qilaman', 'qilyapmiz / qilamiz'],
]
export default function Sarf4Table() {
    const [mode, setMode] = useState('expanded')
    const conjugation: IVerb[] = ([
        {
            root: 'أَخْرَجَ',
            meaning: 'chiqar',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects: SMALL_SARF_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'أَنْزَلَ',
            meaning: 'tushir',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'أَغْلَقَ',
            meaning: 'yopmoq',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'أَكْرَمَ',
            meaning: 'ikrom qil',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'أَشْرَكَ',
            meaning: 'sherik qil',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'أَبْدَلَ',
            meaning: 'o\'zgartir',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'أَتْبَعَ',
            meaning: 'ketidan yubor',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        },

        {
            root: 'أَكْمَلَ',
            meaning: 'to\'ldir, tugat, mukammal qil',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'أَبْصَرَ',
            meaning: 'ko\'r, tushun',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'أَجْلَسَ',
            meaning: 'ek, o\'stir, (ko\'chat) o\'tkaz',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'أَخْضَرَ',
            meaning: 'olib kel, yashil bo\'l',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'أَعْرَضَ',
            meaning: 'yuz o\'gir, chetlash, teskari o\'giril',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'أَحَدَثَ',
            meaning: 'ishlab chiqar, yarat, ixtiro qil',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'أَحْرَقَ',
            meaning: 'kuydir',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'أَفْهَمَ',
            meaning: 'tushuntir, ma\'lum qil',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'أَخْبَرَ',
            meaning: 'xabar ber',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'أَسْمَعَ',
            meaning: 'eshittir, gapir, so\'zla, xabar ber',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'أَفْلَحَ',
            meaning: 'muvaffaqiyatga erish, muvaffaqiyat qozon, maqsadga yet, rohatlan',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'أَدْرَكَ',
            meaning: 'yetib bor, yetib kel, muvaffaq bo\'l',
            form: ['يُفْعِلُ', 'أَفْعَلَ'],
            small_sarf_objects:SMALL_SARF_FORMS,
            past: [],
            present: [],
        }
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
    
    return (
        <div>
            {conjugation.map((item, index) => (
            <VerbItemTable item={item} index={index + 1}/>
            ))}
        </div>
    )
}

function VerbItemTable({item, index}: { item: IVerb, index: number }) {
    const small_sarf_objects = useMemo(() => makeSmallSarf(item), [item]);
    return (<div className="flex flex-col gap-3 mb-4 text-sm ">
        <VerbTitle item={item} index={index}/>
        {small_sarf_objects?.length ? <SmallSarf
            items={[small_sarf_objects.slice(0,4), small_sarf_objects.slice(4,8), small_sarf_objects.slice(8, 12)]}
        />: null}

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
    const active_sarf = rootVerb.small_sarf_objects?.map((obj) => {
        const result = obj.word.split('')

        if(obj.word === 'إِفْعَالاً'){
            result[2] = rootArr[2]
        result[4] = rootArr[4]
            result[7] = rootArr[6]
        }else if(obj.word === 'لا تُفْعِلْ'){
            result[5] = rootArr[2]
            result[7] = rootArr[4]
            result[9] = rootArr[6]
        }else{     
            result[2] = rootArr[2]
        result[4] = rootArr[4]   
            result[4] = rootArr[4]
            result[6] = rootArr[6]
        }
        return result.join('')
    })
    return active_sarf
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