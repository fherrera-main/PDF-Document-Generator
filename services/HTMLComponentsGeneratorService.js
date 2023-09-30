function generateDynamicTable(headersData, bodyData){
    const tableBaseTemplate = `
      <table role="table" aria-busy="false" class="table b-table">
        <thead role="rowgroup">
          <tr role="row">
            {{TABLE_HEADERS_CONTENT}}
          </tr>
        </thead>
        <tbody role="rowgroup">
          {{TABLE_BODY_CONTENT}}
        </tbody>
      </table>`;
    const tableBaseHeader = `
      <th role="columnheader" scope="col" aria-colindex="1">
       <div>{{HEADER_NAME}}</div>
      </th>`;
    const tableBaseRow = `
      <tr role="row" class="regcheq-body-2">
       {{BODY_ROW_COLUMNS}}
      </tr>`;
    const tableBaseCell = `<td aria-colindex="1" role="cell">{{COLUMN_CONTENT}}</td>`

    const generatedHeaders = headersData.map( (headerText) => {
      return tableBaseHeader.replace('{{HEADER_NAME}}', headerText)
    }).join('')
    const generatedRows = bodyData.map((rowData) => {
      const generatedCells = Object.keys(rowData).map( (cellData) => {
        return tableBaseCell.replace('{{COLUMN_CONTENT}}', rowData[cellData] ?? '-')
      }).join('')
      return tableBaseRow.replace('{{BODY_ROW_COLUMNS}}', generatedCells)
    }).join('')
    return tableBaseTemplate
            .replace('{{TABLE_HEADERS_CONTENT}}', generatedHeaders)
            .replace('{{TABLE_BODY_CONTENT}}', generatedRows)
}

function generateDynamicCard( cardData ){
  // ...
}

export {
  generateDynamicTable,
  generateDynamicCard
}