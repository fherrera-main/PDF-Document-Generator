<template>
  <h1>Generar Documento</h1>
</template>

<script>
import { generateDynamicTable, generateDynamicCard } from '../utils/HTMLComponentsGenerator'
import { getStaticDataByLanguage } from "../translate/index.js"
import { documentEnum } from "../enums"

export default {
  mixins: [],
  name: 'IndexPage',
  mounted(){
    this.generateOfacOnuInterpolPDF("123456789", "es")
  },
  methods: {
    async generateOfacOnuInterpolPDF( idFicha, lang ){
    //TO DO: Obtener data para rellenar el documento.

    const staticDataTranslated = getStaticDataByLanguage( documentEnum.OFAC_ONU_INTERPOL, lang )
    const documentData = await this.$store.dispatch('ofacOnuInterpol/fetchDocumentData', idFicha);
    console.log("DOCUMENT DATA: ", documentData)
    //TO DO: Con la data recibida implementar metodos exportados según necesidad.

    //TO DO: Crear el HTML del body del documento.


    //TO DO: Crea petición a files-api/html-pdf para obtener base64 
    //       con template de header y footer.


    //TO DO: Retonar base64 de documento completado.

    
}
  }
}
</script>
