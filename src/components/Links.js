

function Links(props) {
    console.log(props)
    return (
    <div>
        <h3>Links</h3>
        <a href={props.github}>Github</a>
        <a href={props.linkedin}>LinkedIn</a>
    </div>
    )

}

export default Links