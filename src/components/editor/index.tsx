import * as React from 'react';
import { useState, useEffect, useReducer } from 'react';
import { HistoryLinkType, EditorType, PropType } from '@/types/editor.d';
import type { ModeType } from '@/types/editor.d';
import markdown from '@/utils/markdown'
import './index.less'

let historyTimer: any = null; // 历史记录定时器
let mkRenderTimer: any = null; // markdown渲染定时器
let historyLink: HistoryLinkType = {
  value: '',
  pre: null,
  next: null,
  selectionStart: 0,
  selectionEnd: 0,
};

type RenderType = (
  state: EditorType,
  { type, payload }: { type: string; payload?: any }
) => EditorType;

const render: RenderType = (state, { type, payload }) => {
  switch(type) {
    case 'toggleMode':
      return { ...state, mode: payload };
    case 'toggleLoading':
      return { ...state, loading: payload };
    case 'changeHtmlString':
      return { ...state, htmlString: payload };
    case 'toggleTOC':
      return {
        toc: {
          ...state,
          show: typeof payload === 'undefined' ? !state.showTOC : payload
        }
      }
    case 'changeTOC':
      return { ...state, toc: payload }
  }
  return state
}

const MarkdownEditor: React.FC<PropType> = (props) => {
  const {
    value,
    mode = 'normal',
    showTOC = true
  } = props

  const [text, setText] = useState(value)

  const editorRef = React.useRef(null);
  const htmlRef = React.useRef(null);

  const [state, dispatch] = useReducer<RenderType, EditorType>(
    render,
    {
      htmlString: '',
      mode,
      showTOC: false,
      toc: ''
    },
    (initState: EditorType) => initState
  )

  useEffect(() => {
    typeof value === 'string' ? historyLink.value = value : ''

    setText(value)
  }, [])

  useEffect(() => {
    if(mkRenderTimer) clearTimeout(mkRenderTimer);
    mkRenderTimer = setTimeout(() => {
      let htmlString = markdown.render(`${text || ''}`)
      let rst = new RegExp(/^<p>.*<\/p>/).exec(htmlString)
      let toc = rst ? rst[0] : ''
      dispatch({ type: 'changeHtmlString', payload: htmlString })
      // dispatch({ type: 'changeTOC', payload: toc ? toc : '<p><h3>目录</h3></p>' })
      clearTimeout(mkRenderTimer)
    }, 200)
  }, [text])

  const editorContentStyle = {
    fontSize: '18px',
    padding: '40px',
  };

  const handleKeyDown = (e: any) => {
    let { keyCode, metaKey, ctrlKey, altKey, shiftKey } = e

    if (metaKey || ctrlKey) {
      if (altKey) {

      } else { // ctrl 快捷键
        switch (keyCode) {
          case 191: // ctrl + / 开启预览
            console.log('ctrl + / 开启预览');
            mode === 'normal' ?
              dispatch({ type: 'toggleMode', payload: 'preview' }) :
              dispatch({ type: 'toggleMode', payload: 'normal' })
            e.preventDefault()
            break
        }
      }
    }
  }


  return (
    <div className="work-editor">
      <div className="work-editor-toc">
        <div className="work-editor-toc-top"></div>
      </div>
      <div className="work-editor-content">
        {state.mode === 'normal' ? (
          <textarea
            ref={editorRef}
            style={editorContentStyle}
            value={value}
            onKeyDownCapture={handleKeyDown}
            onChange={(e) => { setText(e.target.value) }}
            className="work-editor-content-textarea"
          />
        ) : (
          <div
            ref={htmlRef}
            id="write"
            onKeyDown={handleKeyDown}
            dangerouslySetInnerHTML={{ __html: state.htmlString }}
          ></div>
        )}
      </div>
      <div className="work-editor-right">
        <div className="work-editor-right-top"></div>
      </div>
    </div>
  )
}

export default MarkdownEditor;
