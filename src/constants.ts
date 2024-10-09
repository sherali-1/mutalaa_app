export const PRONOUNS = [
    ['هُوَ', 'هُمَا', 'هُمْ', 'هِيَ', 'هُمَا', 'هُنَّ', 'أَنْتَ', 'أَنْتُمَا', 'أَنْتُمْ', 'أَنْتِ', 'أَنْتُمَا', 'أَنْتُنَّ', 'أَنَا', 'نَحْنُ'],
    ['u', 'u ikkisi', 'ular', 'u (ayol)', 'u ikkisi (ayol)', 'ular (ayollar)', 'siz / sen', 'siz ikkingiz', 'sizlar / senlar', 'siz / sen (ayol)', 'siz ikkingiz (ayol)', 'sizlar / senlar (ayollar)', 'men', 'biz'],
]


export const SARF_MODES: Record<string, string> = {
    expanded: 'Batafsil sarflash',
    collapsed: 'Kichik sarflash',
}

export const SMALL_SARF_I_FORMS = [
    {
        code: 'Fa\'ala', title: 'فَعَلَ',
        forms: [
            [
                {
                    title: 'O\'tgan zamon fe\'l (ma\'lum)',
                    word: 'فَعَلَ'
                },
                {
                    title: 'Hozirgi zamon fe\'l (ma\'lum)',
                    word: 'يَفْعِلُ'
                },
                {
                    title: 'Masdar',
                    word: 'فَعْلًا'
                },
                {
                    title: 'Ismi foil',
                    word: 'فَاعِلٌ'
                },
                {
                    title: 'O\'tgan zamon fe\'l (majhul)',
                    word: 'فُعِلَ'
                },
                {
                    title: 'Hozirgi zamon fe\'l (majhul)',
                    word: 'يُفْعَلُ'
                },
                {
                    title: 'Masdar',
                    word: 'فَعْلًا'
                },
                {
                    title: 'Ismi maf\'ul',
                    word: 'مَفْعُولٌ'
                },
                {
                    title: 'Alamru minhu',
                    word: 'اِفْعِلْ'
                },
                {
                    title: 'Vannahyu \'anhu',
                    word: 'لا تَفْعِلْ'
                },
                {
                    title: 'Va zorfu minhu',
                    word: 'مَفْعَلٌ, مَفْعِلٌ, مَفْعَلَةٌ'
                },
                {
                    title: 'Va alatun minhu',
                    word: 'مِفْعَلٌ, مِفْعَلَةٌ, مِفْعَالٌ'
                }
            ],
            [
                {
                    title: 'O\'tgan zamon fe\'l (ma\'lum)',
                    word: 'فَتَحَ'
                },
                {
                    title: 'Hozirgi zamon fe\'l (ma\'lum)',
                    word: 'يَفْتَحُ'
                },
                {
                    title: 'Masdar',
                    word: 'فَتْحًا'
                },
                {
                    title: 'Ismi foil',
                    word: 'فَاتِحٌ'
                },
                {
                    title: 'O\'tgan zamon fe\'l (majhul)',
                    word: 'فُتِحَ'
                },
                {
                    title: 'Hozirgi zamon fe\'l (majhul)',
                    word: 'يُفْتَحُ'
                },
                {
                    title: 'Masdar',
                    word: 'فَتْحًا'
                },
                {
                    title: 'Ismi maf\'ul',
                    word: 'مَفْتُوحٌ'
                },
                {
                    title: 'Alamru minhu',
                    word: 'اِفْتَحْ'
                },
                {
                    title: 'Vannahyu \'anhu',
                    word: 'لا تَفْتَحْ'
                },
                {
                    title: 'Va zorfu minhu',
                    word: 'مَفْتَحٌ, مَفْتِحٌ, مَفْتَحَةٌ'
                },
                {
                    title: 'Va alatun minhu',
                    word: 'مِفْتَحٌ, مِفْتَحَةٌ, مِفْتَاحٌ'
                }
            ],
            [
                {
                    title: 'O\'tgan zamon fe\'l (ma\'lum)',
                    word: 'نَصَعَ'
                },
                {
                    title: 'Hozirgi zamon fe\'l (ma\'lum)',
                    word: 'يَنْصُعُ'
                },
                {
                    title: 'Masdar',
                    word: 'نَصْعًا'
                },
                {
                    title: 'Ismi foil',
                    word: 'نَاصِعٌ'
                },
                {
                    title: 'O\'tgan zamon fe\'l (majhul)',
                    word: 'نُصِعَ'
                },
                {
                    title: 'Hozirgi zamon fe\'l (majhul)',
                    word: 'يُنْصَعُ'
                },
                {
                    title: 'Masdar',
                    word: 'نَصْعًا'
                },
                {
                    title: 'Ismi maf\'ul',
                    word: 'مَنْصُوعٌ'
                },
                {
                    title: 'Alamru minhu',
                    word: 'اُنْصُعْ'
                },
                {
                    title: 'Vannahyu \'anhu',
                    word: 'لا تَنْصُعْ'
                },
                {
                    title: 'Va zorfu minhu',
                    word: 'مَنْصَعٌ, مَنْصِعٌ, مَنْصَعَةٌ'
                },
                {
                    title: 'Va alatun minhu',
                    word: 'مِنْصَعٌ, مِنْصَعَةٌ, مِنْصَاعٌ'
                }
            ],
        ]
    },
    {
        code: 'Faela', title: 'فَعِلَ',
        forms: [
            [
                {
                    title: 'O\'tgan zamon fe\'l (ma\'lum)',
                    word: 'فَعِلَ'
                },
                {
                    title: 'Hozirgi zamon fe\'l (ma\'lum)',
                    word: 'يَفْعَلُ'
                },
                {
                    title: 'Masdar',
                    word: 'فَعْلًا'
                },
                {
                    title: 'Ismi foil',
                    word: 'فَاعِلٌ'
                },
                {
                    title: 'O\'tgan zamon fe\'l (majhul)',
                    word: 'فُعِلَ'
                },
                {
                    title: 'Hozirgi zamon fe\'l (majhul)',
                    word: 'يُفْعَلُ'
                },
                {
                    title: 'Masdar',
                    word: 'فَعْلًا'
                },
                {
                    title: 'Ismi maf\'ul',
                    word: 'مَفْعُولٌ'
                },
                {
                    title: 'Alamru minhu',
                    word: 'اِفْعَلْ'
                },
                {
                    title: 'Vannahyu \'anhu',
                    word: 'لا تَفْعَلْ'
                },
                {
                    title: 'Va zorfu minhu',
                    word: 'مَفْعَلٌ, مَفْعِلٌ, مَفْعَلَةٌ'
                },
                {
                    title: 'Va alatun minhu',
                    word: 'مِفْعَلٌ, مِفْعَلَةٌ, مِفْعَالٌ'
                }
            ],
            [
                {
                    title: 'O\'tgan zamon fe\'l (ma\'lum)',
                    word: 'فَعِلَ'
                },
                {
                    title: 'Hozirgi zamon fe\'l (ma\'lum)',
                    word: 'يَفْعِلُ'
                },
                {
                    title: 'Masdar',
                    word: 'فَعْلًا'
                },
                {
                    title: 'Ismi foil',
                    word: 'فَاعِلٌ'
                },
                {
                    title: 'O\'tgan zamon fe\'l (majhul)',
                    word: 'فُعِلَ'
                },
                {
                    title: 'Hozirgi zamon fe\'l (majhul)',
                    word: 'يُفْعَلُ'
                },
                {
                    title: 'Masdar',
                    word: 'فَعْلًا'
                },
                {
                    title: 'Ismi maf\'ul',
                    word: 'مَفْعُولٌ'
                },
                {
                    title: 'Alamru minhu',
                    word: 'اِفْعِلْ'
                },
                {
                    title: 'Vannahyu \'anhu',
                    word: 'لا عَفْعِلْ'
                },
                {
                    title: 'Va zorfu minhu',
                    word: 'مَفْعَلٌ, مَفْعِلٌ, مَفْعَلَةٌ'
                },
                {
                    title: 'Va alatun minhu',
                    word: 'مِفْعَلٌ, مِفْعَلَةٌ, مِفْعَالٌ'
                }
            ],
        ]
    },
    {
        code: 'Faula', title: 'فَعُلَ',
        forms: [
            [
                {
                    title: 'O\'tgan zamon fe\'l (ma\'lum)',
                    word: 'فَعُلَ'
                },
                {
                    title: 'Hozirgi zamon fe\'l (ma\'lum)',
                    word: 'يَفْعُلُ'
                },
                {
                    title: 'Masdar',
                    word: 'فَعَلًا'
                },
                {
                    title: 'Ismi foil',
                    word: 'فَعِيلٌ'
                },
                {
                    title: 'Alamru minhu',
                    word: 'اُفْعُلْ'
                },
                {
                    title: 'Vannahyu \'anhu',
                    word: 'لا تَفْعُلْ'
                },
                {
                    title: 'Va zorfu minhu',
                    word: 'مَفْعَلٌ, مَفْعِلٌ, مَفْعَلَةٌ'
                },
                {
                    title: 'Va alatun minhu',
                    word: 'مِفْعَلٌ, مِفْعَلَةٌ, مِفْعَالٌ'
                }
            ],
        ]
    },
]
export const SMALL_SARF_II_FORMS = [
    {
        title: 'O\'tgan zamon fe\'l (ma\'lum)',
        word: 'فَعَّلَ'
    }, {
        title: 'Hozirgi zamon fe\'l (ma\'lum)',
        word: 'يُفَعِّلُ'
    }, {
        title: 'Masdar',
        word: 'تَفْعِيلًا'
    }, {
        title: 'Ismi foil',
        word: 'مُفَعِّلٌ'
    }, {
        title: 'O\'tgan zamon fe\'l (majhul)',
        word: 'فُعِّلَ'
    }, {
        title: 'Hozirgi zamon fe\'l (majhul)',
        word: 'يُفَعَّلُ'
    }, {
        title: 'Masdar',
        word: 'تَفْعِيلًا'
    }, {
        title: 'Ismi maf\'ul',
        word: 'مُفَعَّلٌ'
    }, {
        title: 'Alamru minhu',
        word: 'فَعِّلْ'
    }, {
        title: 'Vannahyu \'anhu',
        word: 'لا تُفَعِّلْ'
    }, {
        title: 'Va zorfu minhu',
        word: 'مُفَعَّلٌ'
    }
]
export const SMALL_SARF_III_FORMS = [
    {
        title: 'O\'tgan zamon fe\'l (ma\'lum)',
        word: 'فَاعَلَ'
    }, {
        title: 'Hozirgi zamon fe\'l (ma\'lum)',
        word: 'يُفَاعِلُ'
    }, {
        title: 'Masdar',
        word: 'فِعَالًا'
    }, {
        title: 'Ismi foil',
        word: 'مُفَاعِلٌ'
    }, {
        title: 'O\'tgan zamon fe\'l (majhul)',
        word: 'فُوعِلَ'
    }, {
        title: 'Hozirgi zamon fe\'l (majhul)',
        word: 'يُفَاعَلُ'
    }, {
        title: 'Masdar',
        word: 'مُفَاعِلٌ'
    }, {
        title: 'Ismi maf\'ul',
        word: 'مُفَاعَلٌ'
    }, {
        title: 'Alamru minhu',
        word: 'فَاعِلْ'
    }, {
        title: 'Vannahyu \'anhu',
        word: 'لا تُفَاعِلْ'
    }, {
        title: 'Va zorfu minhu',
        word: 'مُفَاعَلٌ'
    }
]
export const SMALL_SARF_IV_FORMS = [
    {
        title: 'O\'tgan zamon fe\'l (ma\'lum)',
        word: 'أَفْعَلَ'
    }, {
        title: 'Hozirgi zamon fe\'l (ma\'lum)',
        word: 'يُفْعِلُ'
    }, {
        title: 'Masdar',
        word: 'إِفْعَالاً'
    }, {
        title: 'Ismi foil',
        word: 'مُفْعِلٌ'
    }, {
        title: 'O\'tgan zamon fe\'l (majhul)',
        word: 'أُفْعِلَ'
    }, {
        title: 'Hozirgi zamon fe\'l (majhul)',
        word: 'يُفْعَلُ'
    }, {
        title: 'Masdar',
        word: 'إِفْعَالاً'
    }, {
        title: 'Ismi maf\'ul',
        word: 'مُفْعَلٌ'
    }, {
        title: 'Alamru minhu',
        word: 'أَفْعِلْ'
    }, {
        title: 'Vannahyu \'anhu',
        word: 'لا تُفْعِلْ'
    }, {
        title: 'Va zorfu minhu',
        word: 'مُفْعَلٌ'
    }
]
export const SMALL_SARF_V_FORMS = [
    {
        title: 'O\'tgan zamon fe\'l (ma\'lum)',
        word: 'تَفَعَّلَ'
    }, {
        title: 'Hozirgi zamon fe\'l (ma\'lum)',
        word: 'يَتَفَعَّلُ'
    }, {
        title: 'Masdar',
        word: 'تَفَعُّلًا'
    }, {
        title: 'Ismi foil',
        word: 'مُتَفَعِّلٌ'
    }, {
        title: 'O\'tgan zamon fe\'l (majhul)',
        word: 'تُفُعِّلَ'
    }, {
        title: 'Hozirgi zamon fe\'l (majhul)',
        word: 'يُتَفَعَّلُ'
    }, {
        title: 'Masdar',
        word: 'تَفَعُّلًا'
    }, {
        title: 'Ismi maf\'ul',
        word: 'مُتَفَعَّلٌ'
    }, {
        title: 'Al amru minhu',
        word: 'تَفَعَّلْ'
    }, {
        title: 'Va nahyu \'anhu',
        word: 'لا تَتَفَعَّلْ'
    }, {
        title: 'Va zorfu minhu',
        word: 'مُتَفَعَّلٌ'
    }
]
export const SMALL_SARF_VI_FORMS = [
    {
        title: 'O\'tgan zamon fe\'l (ma\'lum)',
        word: 'تَفَاعَلَ'
    }, {
        title: 'Hozirgi zamon fe\'l (ma\'lum)',
        word: 'يَتَفَاعَلُ'
    }, {
        title: 'Masdar',
        word: 'تَفَاعُلًا'
    }, {
        title: 'Ismi foil',
        word: 'مُتَفَاعِلٌ'
    }, {
        title: 'O\'tgan zamon fe\'l (majhul)',
        word: 'تُفُوعِلَ'
    }, {
        title: 'Hozirgi zamon fe\'l (majhul)',
        word: 'يُتَفَاعَلُ'
    }, {
        title: 'Masdar',
        word: 'تَفَاعُلًا'
    }, {
        title: 'Ismi maf\'ul',
        word: 'مُتَفَاعَلٌ'
    }, {
        title: 'Al amru minhu',
        word: 'تَفَاعَلْ'
    }, {
        title: 'Va nahyu \'anhu',
        word: 'لا تَتَفَاعَلْ'
    }, {
        title: 'Va zorfu minhu',
        word: 'مُتَفَاعَلٌ'
    }
]
export const SMALL_SARF_VII_FORMS = [
    {
        title: 'O\'tgan zamon fe\'l (ma\'lum)',
        word: 'إِنْفَعَلَ'
    },
    {
        title: 'Hozirgi zamon fe\'l (ma\'lum)',
        word: 'يَنْفَعِلُ'
    },
    {
        title: 'Masdar',
        word: 'إِنْفِعَالًا'
    },
    {
        title: 'Ismi foil',
        word: 'مُنْفَعِلٌ'
    },
    {
        title: 'Al amru minhu',
        word: 'إِنْفَعِلْ'
    }, {
        title: 'Va nahyu \'anhu',
        word: 'لا تَنْفَعِلْ'
    },
    {
        title: 'Va zorfu minhu',
        word: 'مُنْفَعَلٌ'
    }
]

export const SMALL_SARF_VIII_FORMS = [
    {
        title: 'O\'tgan zamon fe\'l (ma\'lum)',
        word: 'اِفْتَعَلَ'
    }, {
        title: 'Hozirgi zamon fe\'l (ma\'lum)',
        word: 'يَفْتَعِلُ'
    }, {
        title: 'Masdar',
        word: 'اِفْتِعَالَا'
    }, {
        title: 'Ismi foil',
        word: 'مُفْتَعِلُ'
    }, {
        title: 'O\'tgan zamon fe\'l (majhul)',
        word: 'اُفْتُعِلَ'
    }, {
        title: 'Hozirgi zamon fe\'l (majhul)',
        word: 'يُفْتَعَلُ'
    }, {
        title: 'Masdar',
        word: 'اِفْتِعَالَا'
    }, {
        title: 'Ismi maf\'ul',
        word: 'مُفْتَعَلُ'
    }, {
        title: 'Al amru minhu',
        word: 'اِفْتَعِلْ'
    }, {
        title: 'Va nahyu \'anhu',
        word: 'لا تَفْتَعِلْ'
    }, {
        title: 'Va zorfu minhu',
        word: 'مُفْتَعَلُ'
    }
]
export const SMALL_SARF_X_FORMS = [
    {
        title: 'O\'tgan zamon fe\'l (ma\'lum)',
        word: 'اِسْتَفْعَلَ'
    }, {
        title: 'Hozirgi zamon fe\'l (ma\'lum)',
        word: 'يَسْتَفْعِلُ'
    }, {
        title: 'Masdar',
        word: 'اِسْتِفْعَالًا'
    }, {
        title: 'Ismi foil',
        word: 'مٌسْتَفْعِلٌ'
    }, {
        title: 'O\'tgan zamon fe\'l (majhul)',
        word: 'اُسْتُفْعِلَ'
    }, {
        title: 'Hozirgi zamon fe\'l (majhul)',
        word: 'يُسْتَفْعَلُ'
    }, {
        title: 'Masdar',
        word: 'اِسْتِفْعَالًا'
    }, {
        title: 'Ismi maf\'ul',
        word: 'مٌسْتَفْعَلٌ'
    }, {
        title: 'Al amru minhu',
        word: 'اِسْتَفْعِلْ'
    }, {
        title: 'Va nahyu \'anhu',
        word: 'لا تَسْتَفْعِلْ'
    }, {
        title: 'Va zorfu minhu',
        word: 'مٌسْتَفْعَلٌ'
    }
]