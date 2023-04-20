import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';

import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faCircleXmark,
    faSpinner,
    faPlus,
    faEllipsisVertical,
    faGlobe,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faToggleOff,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';

import AccountItem from '~/components/AccountItem';

import Button from '~/components/Button';

import Menu from '~/components/Popper/Menu';

import Image from '~/components/Image';

import { faUser } from '@fortawesome/free-regular-svg-icons';

import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },

                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        toggle: <FontAwesomeIcon icon={faToggleOff} />,
        title: 'Dark mode',
        darkMode: true,
    },
];

const currentUser = true;

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/@user',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Logout',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000);
    }, []);

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>

                <div className={cx('search-box')}>
                    <HeadlessTippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input placeholder="Search" />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                            <button className={cx('search-btn')}>
                                <SearchIcon />
                            </button>
                        </div>
                    </HeadlessTippy>
                </div>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button text className={cx('upload')}>
                                <UploadIcon className={cx('upload-icon')} />
                                <p>Upload</p>
                            </Button>
                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cx('action-btn', 'message-icon')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/to-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1682046000&x-signature=Y37yvwPHclHecWU1bQJcDiGOlcM%3D"
                                alt="user avatar"
                                fallback="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon className={cx('menu-dropdown')} icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
