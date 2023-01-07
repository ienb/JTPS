import * as React from 'react';
import './index.less';

function work() {
  const editorContentStyle = {
    fontSize: '18px',
    padding: '40px',
  };

  const mdRef = React.useRef(null);

  return (
    <div className="work-editor-container">
      <div className="work-editor">
        <div className="work-editor-toc">
          <div className="work-editor-toc-top"></div>
        </div>
        <div className="work-editor-content">
          <textarea
            ref={mdRef}
            style={editorContentStyle}
            className="work-editor-content-textarea"
          />
        </div>
        <div className="work-editor-right">
          <div className="work-editor-right-top"></div>
        </div>
      </div>
    </div>
  );
}

export default work;
