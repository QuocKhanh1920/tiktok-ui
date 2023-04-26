import Button from '~/components/Button';

import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        darkMode: data.darkMode,
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            <div className={cx('title')}>{data.title}</div>
            {data.toggle}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
