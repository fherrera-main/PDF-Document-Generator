import { mallaSocietaria } from "./documents/MallaSocietariaTranslations.js"
import { ofacOnuInterpol } from "./documents/OfacOnuInterpolTranslations.js"

const translations = {
    ofacOnuInterpol,
    mallaSocietaria
}

export function getStaticDataByLanguage( documentName, lang ){
    console.log("translates/getDataByLanguage", { lang, documentName })
    console.log("returned value: ", translations[documentName])
    return translations[documentName][lang] ?? console.warn("ERROR: translates/getDataByLanguage",{ lang, documentName})  
} 