export const Greeting = (props) => {
    //console.log(props)
    const {language, progress, cb_func} = props
    cb_func()
    return (
        <h3>Hey everyone, we are learning <code>{language}</code>, and my progress is {progress}</h3>
    )
}
