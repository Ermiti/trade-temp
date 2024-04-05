import './LSdiv.css'

export function LSdiv({ text, logo, className }) {
    return (
        <div className={className}>
            <img src={logo} alt='logo'></img>
            <h5>{text}</h5>
        </div>
    )
}