function Link(params ) {
    const {href, text}  = params;

    return <a className="navbar-item" href={href}>{text}</a>
}

export default Link;