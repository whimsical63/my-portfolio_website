import {navLinks} from "../constants/index.js";

const Button = ({name, isBeam = false, containerClass}) => {
    return (
        <a href={navLinks[3].href}>
            <button className={`btn ${containerClass}`}>
                {isBeam && (
                    <span className="relative flex h-3 w-3">
                    <span className="btn-ping"/>
                    <span className="btn-ping_dot"/>
                </span>
                )}
                {name}
            </button>
        </a>
    )
}
export default Button
