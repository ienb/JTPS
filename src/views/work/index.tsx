import * as React from 'react';
import './index.less';
import Editor from '@/components/editor';

function work() {
  const mdRef = React.useRef(null);

  return (
    <div className="work-editor-container">
      <Editor />
    </div>
  );
}

export default work;
