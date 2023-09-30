import ofacOnuInterpol from "./documents/OfacOnuInterpolTranslations"
import mallaSocietaria from "./documents/MallaSocietariaTranslations"
import _default from "./documents/DefaultTranslations"
const translations = {
    ...ofacOnuInterpol,
    ...mallaSocietaria
}

function getStaticDataByLanguage( lang, documentName ){
    console.log("translates/getDataByLanguage", { ...lang, ...documentName })
    return translations[documentName[lang]] ?? console.warn("ERROR: translates/getDataByLanguage",{ ...lang, ...documentName})  
}

export {
    getStaticDataByLanguage
}
