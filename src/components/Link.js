import useNavigation from '../hooks/use-navigation'
import classNames from 'classnames';

function Link({ to, children, className, activeClassName }) {
    // to: path we navigate to
    // children: some text we show inside of anchor element
    const { navigate, currentPath } = useNavigation();

    const classes = classNames(
        'text-blue-500', 
        className,
        currentPath === to && activeClassName // only adding if currentPath is equal to to
    );

    const handleClick = (event) => { // receive event object
        // if user holds down meta or ctrl key
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        // stop from doing traditional browser behavior
        event.preventDefault(); 
        
        navigate(to);
    };

    return (
        <a className={classes} href={to} onClick = {handleClick}>
            {children}
        </a>
    )

};

export default Link;