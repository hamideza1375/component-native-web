import React from 'react';
import { Table, Div } from './components/Html'



function App() {
  return (
    <Div style={{ height: '50%' }} >
      <Table 
       color={['#555','#656565','white']}
        header={['title', 'edit', 'delete','for']}
        body={
          [ 
            ['title1', 'edit1','delete1','for1' ],
            ['title2', 'edit2','delete2','for2' ],
            ['title3', 'edit3','delete3','for3' ],
        ]
        } />
    </Div>
  )
}



export default App;






