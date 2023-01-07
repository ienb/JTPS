export enum ModeType {
  NORMAL = 'normal', // 正常模式
  PREVIEW = 'preview', // 预览模式
}

export interface PropType {
  text?: string; // 文本内容
  // setValue: Function,
  mode?: ModeType; // 编辑器模式
}

export interface EditorType {
  mode: ModeType; // 编辑器模式
  htmlString: string; // 展示的 html
}

// 操作历史记录
export interface HistoryLinkType {
  value: string;
  pre: HistoryLinkType | null;
  next: HistoryLinkType | null;
  selectionStart: number;
  selectionEnd: number;
}
