import * as React from 'react';
import { useState, useEffect, useReducer } from 'react';
import { HistoryLinkType, EditorType, PropType, ModeType } from '@/types/editor';

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
    mode = ModeType.NORMAL,
    setValue,
    showTOC = true
  } = props

  const editorRef = React.useRef(null);

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

  return (
    <textarea
      ref={editorRef}
      style={props.style}
      className="work-editor-content-textarea"
    />
  )
}
