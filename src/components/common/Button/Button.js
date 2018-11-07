import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

// 전달받은 className, onClick 등의 값들이 rest 안에 들어있음
// JSX 에서 ... 을 사용하면 내부에 있는 값들을 props로 넣어줌
const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({children, to, onClick, disabled, theme = 'default'}) => {
  // to 값이 존재하면 Link를 사용하고 그렇지 않으면 Div 사용
  // 비활성화 되있는 버튼인 경우도 Div 사용
  const Element = (to && !disabled) ? Link : Div;

  // 비활성화되면 onClick은 실행되지 않음
  // disabled 값이 true가 되면 className에 disabled가 추가됨
  return (
    <Element
      to={to}
      className={cx('button', theme, { disabled })}
      onClick={disabled ? () => null : onClick}>
      {children}
    </Element>
  )
}

export default Button;