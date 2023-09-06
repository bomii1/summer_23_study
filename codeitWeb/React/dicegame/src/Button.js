import './Button.css';

function Button({ className='', color='blue', children, onClick }) {
    //console.log(className);
    const classNames = `Button ${color} ${className}`;
    return <button className={classNames} onClick={onClick}>{children}</button>;
}

export default Button;