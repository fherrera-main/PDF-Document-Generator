import data from '../data/OfacOnuInterpolData.json'

export const state = () => ({
    documentData: []
  })

  export const getters = {
    getDataById(state, idFicha) {
      return state.documentData.find( x => x.idFicha === idFicha) ?? "No data"
    }
  }
   export const mutations = {
    SET_DOCUMENT_DATA(state, newValue){
      state.documentData = newValue;
    }
   } 

  export const actions = {
    async fetchDocumentData({ commit }) {
      const mappedData = data.OfacOnuInterpolCoincidences.map( ({name, program, list, activity}, i) => ({name, program, list, activity}) );
      commit("SET_DOCUMENT_DATA", mappedData)
      return mappedData;
    }
  }