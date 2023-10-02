import classNames from 'classnames';
import styles from './header.module.scss';
import { Button } from '../button/button';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Header = ({ className }: HeaderProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.header}>
            <img src="/src/assets/Ultrahand_Icon.png" alt="" />
            <nav className={styles.nav}><a href="/home">Home</a> | <a href="/projects">All Builds</a> | <a href="/about">About</a> | <a href="/contact">Contact Us</a></nav>
            <div className={styles.btngrp}>
                <Button />
                <Button />
            </div>
        </div>
    </div>;
};
