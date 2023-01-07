import React, { useState } from 'react';
import './index.less';
import GitPic from '@/assets/svg/git.svg';
import ExportPic from '@/assets/svg/export.svg';
import IpfsPic from '@/assets/svg/ipfs.svg';
import IttsPic from '@/assets/svg/itts.svg';
import Logo from '@/assets/svg/logo.svg';
import Vector from '@/assets/svg/vector.svg';
import ButtonHover from '@/assets/svg/button-hover.svg';

interface Props {
  title: string;
}

function header(props: Props) {
  const [isHover, setIsHover] = useState(false);
  const hoverStyle = {
    backgroundImage: `url(${ButtonHover})`,
    backgroundRepeat: 'no-repeat',
    padding: '0 5px',
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="header">
      <div className="top">
        <div className="title">{props.title}</div>
        <div className="tools">
          <div className="git button">
            <img src={GitPic} alt="" />
          </div>
          <div className="itts button">
            <img src={IttsPic} alt="" />
          </div>
          <div className="ipfs button">
            <img src={IpfsPic} alt="" />
          </div>
          <div className="export button">
            <img src={ExportPic} alt="" />
          </div>
        </div>
      </div>
      <div
        className="bottom"
        style={{
          // background: `url(${Vector}) no-repeat`,
          // backgroundSize: '100% 100%',
        }}
      >
        <div className="first row">
          <div className="col">文件</div>
          <div className="col">编辑</div>
          <div className="col">查看</div>
          <div className="col">视图</div>
          <div className="col">格式</div>
          <div className="col">工具</div>
          <div className="col">系统</div>
          <div className="col">社区</div>
        </div>
        <div className="second row">
          <div
            className="col"
            style={hoverStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            开始
          </div>
          <div className="col">插入</div>
          <div className="col">绘图</div>
          <div className="col">模板</div>
          <div className="col">页面</div>
          <div className="col">引用</div>
          <div className="col">审阅</div>
          <div className="col">网络</div>
          <div className="col">翻译</div>
          <div className="col">助手</div>
        </div>
      </div>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
}

export default header;
