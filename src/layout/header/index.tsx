import React, {
  useState,
} from "react";
import './index.less'
import GitPic from '@/assets/svg/git.svg'
import ExportPic from '@/assets/svg/export.svg'
import IpfsPic from '@/assets/svg/ipfs.svg'
import IttsPic from '@/assets/svg/itts.svg'
import Logo from '@/assets/svg/logo.svg'

interface Props {
  title: string;
}

function header(props: Props) {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className='title'>{ props.title }</div>
      <div className='tools'>
        <div className='git button'>
          <img src={GitPic} alt='' />
        </div>
        <div className='itts button'>
          <img src={IttsPic} alt='' />
        </div>
        <div className='ipfs button'>
          <img src={IpfsPic} alt='' />
        </div>
        <div className='export button'>
          <img src={ExportPic} alt='' />
        </div>
      </div>
    </div>
  )
}

export default header
