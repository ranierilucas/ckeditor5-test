import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import parse from 'html-react-parser';

function App() {
  const [text, setText] = useState('')
  return (
    <div className="App">
      <div className="editor">
        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData()
            setText(data)
          }}
        />
      </div>
      <div id="conteudo">
        <h2>Conteúdo</h2>
        <p>{parse(text)}</p>
      </div>
    </div>
  );
}

export default App;
