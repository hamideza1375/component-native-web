import React, { useState } from 'react';
import { Table, Tr, Th, Tb, Thead, Span, Row, RowSpan, Div, Tc } from './components/Html'

function AppTable({ body, header }) {

  //   <Tr>
  //   {body.map((f, i) => (
  //     < >{Object.values(f).map((a) => (
  //       <Tb>{a}</Tb>
  //     ))}</>
  //   ))}
  // </Tr>

  return (
    <Table style={{ height: '50%' }} >

      <Thead ref={() => {
        console.log(Object.keys(body))
      }}
      >
        {header.map((f, i) => (
          <Th key={i}>{f}</Th>
        ))}
      </Thead>

      <Tc>
        {body.map((f, i) => (
          <Tr key={i}>
            {Object.values(f).map((a) => (
              <Tb>{a}</Tb>
            ))}
          </Tr>
        ))}
      </Tc>


    </Table>
  )
}



function App() {
  return (
    <Div style={{ height: '50%' }} >
      <AppTable

        header={['title', 'edit', 'delete']}

        body={
          [{ title: 'title1', edit: 'edit1', delete: 'delete1' },
          { title: 'title2', edit: 'edit2', delete: 'delete2' },
          { title: 'title3', edit: 'edit3', delete: 'delet3e' }]
        } />
    </Div>
  )
}



export default App;






