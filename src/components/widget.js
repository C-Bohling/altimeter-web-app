import styles from './widget.module.css';

const Widget = ({ loading, title, children, hasRefreshButton = false, refreshHandler, hasError = false, errorMsg }) => {
    const classList = loading
        ? `${styles.widget} ${styles.loading}`
        : styles.widget;
    
    const actionList = []
    if (hasRefreshButton) actionList.push(<img src='./img/refresh.png' onClick={refreshHandler}/>);
    
    return (
        <div className={classList}>
            <h2>{title}</h2>
            <div className={styles['centered-container']}>
                {hasError ? (
                    // <p className={styles['loading-text']}>Loading...</p>
                    <p className={styles['error-message']}>{errorMsg}</p>
                ) : (
                    loading ? (
                        <p className={styles['loading-text']}>Loading...</p>
                    ) : (
                        <div>{children}</div>
                    )
                )}
            </div>
            <div className={styles['actions']}>
                {actionList}
            </div>
        </div>
    );
};

export default Widget;
