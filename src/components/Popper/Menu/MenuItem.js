import Button from '~/components/Button';

import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon}>
            <div className={cx('title')}>{data.title}</div>
            {data.toggle}
        </Button>
    );
}

export default MenuItem;
