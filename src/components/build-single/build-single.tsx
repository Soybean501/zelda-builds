import classNames from 'classnames';
import styles from './build-single.module.scss';

export interface BuildSingleProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const BuildSingle = ({ className }: BuildSingleProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.buildSingle}>
            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" />
            <a href="/" className={styles.singleLink}>Build Name</a>
        </div>
    </div>;
};
