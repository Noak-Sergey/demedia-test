import './inputText.scss'

function InputText(
    {
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName, inputStyle,
        formName,

        ...restProps
    }
)  {
    const onChangeCallback = (e) => {
        onChange
        && onChange(e)
        
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e) => {
        onKeyPress && onKeyPress(e);

        onEnter
        && e.key === 'Enter'
        && onEnter()
    }

    const finalSpanClassName = `error ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `errorInput ${className}`
    const InputStyleClassName = inputStyle ? "inputStyle" : ''

    return (
        <div className = "inputWrapper">
            {error
                ? <label className = {finalSpanClassName} htmlFor = {type}>{error}</label>
                : <label className = "label" htmlFor = {type}>{formName}</label>
            }
            <input
                id = {type}
                type = {type}
                onChange = {onChangeCallback}
                onKeyPress = {onKeyPressCallback}
                className = {`${finalInputClassName} ${InputStyleClassName}`}
                {...restProps}
            />
        </div>
    )
}

export default InputText;