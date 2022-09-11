import React from 'react';
import { I18nManager } from 'react-native';
import ToastProvider, { Toast } from './states/toast'

I18nManager.forceRTL(true)
I18nManager.allowRTL(false)
I18nManager.isRTL = true

function App() {
  let toast = new Toast()
  return (
    <div>
      <button onClick={() => { toast.show('عنوان', 'توضیحات') }}>show</button>
      <br/>
      <button onClick={() => { toast.success('عنوان', 'توضیحات') }}>toast</button>
      <br/>
      <button onClick={() => { toast.error('عنوان', 'توضیحات') }}>error</button>
      <br/>
      <button onClick={() => { toast.info('عنوان', 'توضیحات') }}>info</button>
      <br/>
      <button onClick={() => { toast.warning('عنوان', 'توضیحات') }}>warning</button>
      <br/>
      <ToastProvider />
    </div>
  );
}

export default App;

