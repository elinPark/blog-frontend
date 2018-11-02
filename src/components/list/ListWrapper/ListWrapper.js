// 페이지 내부의 컴포넌트들을 감싸줌
import React from 'react';
import styles from './ListWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ListWrapper = ({children}) => (
  <div className={cx('list-wrapper')}>
    {children}
  </div>
)

export default ListWrapper;