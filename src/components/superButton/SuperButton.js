import "./superButton.scss";

function SuperButton (
    {
        className, btn,
        color,
        onClick, classBtn,
        ...restProps
    }
) {

    const onClickCallback = (e) => {
        onClick && onClick(e)
    }

    let btnClassName

    if (classBtn === 'deleteBtn') {
        btnClassName = `btn deleteBtn`
    }
    if (classBtn === 'updateBtn') {
        btnClassName = `btn updateBtn`
    }
    if (classBtn === 'confirmBtn') {
        btnClassName = `btn confirmBtn`
    }
    if (classBtn === 'cancelBtn') {
        btnClassName = `btn cancelBtn`
    }
    if (classBtn === 'deleteBtn') {
        btnClassName = `btn deleteBtn`
    }
    if (classBtn === 'bigDeleteBtn') {
        btnClassName = `btn bigDeleteBtn`
    }
    if (classBtn === 'filterBtn') {
        btnClassName = `btn filterBtn`
    }
    if (classBtn === 'filterBtnActive') {
        btnClassName = `btn filterBtnActive`
    }

    return (
        <button
            className={btnClassName}
            onClick={onClickCallback}
            {...restProps}
        />
    )
}

export default SuperButton;