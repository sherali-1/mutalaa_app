import { useMemo } from "react";
import SmallSarf from "../components/SmallSarf.tsx";
import VerbTitle from "../components/VerbTitle.tsx";
import {  SMALL_SARF_V_FORMS, SMALL_SARF_VI_FORMS } from "../constants.ts";
import { IVerb } from "../types.ts";
import { isArabicDiacriticMark } from "../commonUtils.ts";

const PAST_CONJUGATION = [
    ['تَفَعَّلَ', 'تَفَعَّلَا', 'تَفَعَّلُوا', 'تَفَعَّلَتْ', 'تَفَعَّلَتَا', 'تَفَعَّلْنَ', 'تَفَعَّلْتَ', 'تَفَعَّلْتُمَا', 'تَفَعَّلْتُمْ', 'تَفَعَّلْتِ', 'تَفَعَّلْتُمَا', 'تَفَعَّلْتُنَّ', 'تَفَعَّلْتُ', 'تَفَعَّلْنَا'],
    ['qildi', 'qildi', 'qildilar', 'qildi (ayol)', 'qildingiz (2 ayol)', 'qildilar(ayollar)', 'qilding', 'qildingiz', 'qildingizlar', 'qilding (ayol)', 'qildingiz (2 ayol)', 'qildingizlar (ayollar)', 'qildim', 'qildik']
]
const PRESENT_CONJUGATION = [
    ['يَتَفَعَّلُ', 'يَتَفَعَّلَانِ', 'يَتَفَعَّلُونَ', 'تَتَفَعَّلُ', 'تَتَفَعَّلَانِ', 'يَتَفَعَّلْنَ', 'تَتَفَعَّلُ', 'تَتَفَعَّلَانِ', 'تَتَفَعَّلُونَ', 'تَتَفَعَّلِينَ', 'تَتَفَعَّلَانِ', 'تَتَفَعَّلْنَ', 'أَتَفَعَّلُ', 'نَتَفَعَّلُ'],
    ['qilyapti / qiladi', 'ikkisi qilyapti / qiladi', 'qilyaptilar / qiladilar', 'qilyapti / qiladi (ayol)', 'ikkisi qilyapti / qiladi (2 ayol)', 'qilyaptilar / qiladilar (ayollar)', 'qilyapsiz / qilasiz', 'ikkingiz qilyapsiz / qilasiz', 'qilyapsizlar / qilasizlar', 'qilyapsiz / qilasiz (ayol)', 'ikkingiz qilyapsiz / qilasiz (2 ayol)', 'qilyapsizlar / qilasizlar (ayollar)', 'qilyapman / qilaman', 'qilyapmiz / qilamiz'],
]
export default function Sarf9Table() {
    const conjugation: IVerb[] = ([
        {
            root: 'تَعَلَّمَ',
            meaning: 'o\'rgan, ta\'lim ol',
            form: ['يَتَفَعَّلُ', 'تَفَعَّلَ'],
            small_sarf_objects: SMALL_SARF_V_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'تَكَلَّمَ',
            meaning: 'tushir',
            form: ['يَتَفَعَّلُ', 'تَفَعَّلَ'],
            small_sarf_objects: SMALL_SARF_V_FORMS,
            past: [],
            present: [],
            },
            {
                root: 'تَوَضَّأَ',
                meaning: 'tahorat ol',
                form: ['يَتَفَعَّلُ', 'تَفَعَّلَ'],
                small_sarf_objects: SMALL_SARF_V_FORMS,
                past: [],
                present: [],
            },
        {
            root: 'تَفَكَّرَ',
            meaning: 'ikrom qil',
            form: ['يَتَفَعَّلُ', 'تَفَعَّلَ'],
            small_sarf_objects: SMALL_SARF_V_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'تَفَرَّقَ',
            meaning: 'ikrom qil',
            form: ['يَتَفَعَّلُ', 'تَفَعَّلَ'],
            small_sarf_objects: SMALL_SARF_V_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'تَذَكَّرَ',
            meaning: 'ikrom qil',
            form: ['يَتَفَعَّلُ', 'تَفَعَّلَ'],
            small_sarf_objects: SMALL_SARF_V_FORMS,
            past: [],
            present: [],
        },



        {
            root: 'تَحَادَثَ',
            meaning: 'sherik qil',
            form: [SMALL_SARF_VI_FORMS[1].word, SMALL_SARF_VI_FORMS[0].word],
            small_sarf_objects: SMALL_SARF_VI_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'تَنَاقَشَ',
            meaning: 'sherik qil',
            form: [SMALL_SARF_VI_FORMS[1].word, SMALL_SARF_VI_FORMS[0].word],
            small_sarf_objects: SMALL_SARF_VI_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'تَشَابَهَ',
            meaning: 'sherik qil',
            form: [SMALL_SARF_VI_FORMS[1].word, SMALL_SARF_VI_FORMS[0].word],
            small_sarf_objects: SMALL_SARF_VI_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'تَعَارَفَ',
            meaning: 'sherik qil',
            form: [SMALL_SARF_VI_FORMS[1].word, SMALL_SARF_VI_FORMS[0].word],
            small_sarf_objects: SMALL_SARF_VI_FORMS,
            past: [],
            present: [],
        },
        {
            root: 'تَقَابَلَ',
            meaning: 'sherik qil',
            form: [SMALL_SARF_VI_FORMS[1].word, SMALL_SARF_VI_FORMS[0].word],
            small_sarf_objects: SMALL_SARF_VI_FORMS,
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
    const rootArr = rootVerb.root.split('').filter(w=>!isArabicDiacriticMark(w))
    const active_sarf = rootVerb.small_sarf_objects?.map((obj) => {
        let ind = 0
        const _result = obj.word.split('').map((w, perInd)=>{
            let startIndex = 0
            
            if(obj.title.includes('foil') ||obj.title.includes('maf\'ul') 
                ||obj.title.includes('zorf') || obj.title.includes('ozirgi')){
                startIndex = 1
            }else if (obj.title.includes('nahyu')){
                startIndex = 5
            }

            if(!isArabicDiacriticMark(w) && perInd >= startIndex ){
                return rootArr[ind++] || w
            }
            return w;
        })
        // console.log('make Small sarf --- ', result, rootArr, result.map(ch=>ch.charCodeAt(0)))
        // if(obj.word === 'إِفْعَالاً'){
        //     result[2] = rootArr[2]
        //     result[4] = rootArr[4]
        //     result[7] = rootArr[6]
        // }else if(obj.word === 'لا تَتَفَعَّلْ'){
        //     result[5] = rootArr[2]
        //     result[7] = rootArr[4]
        //     result[9] = rootArr[6]
        // }else{     
        //     result[2] = rootArr[2]
        //     result[4] = rootArr[4]   
        //     result[6] = rootArr[6]
        //     result[7] = rootArr[7]
        // }
        return _result.join('')
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