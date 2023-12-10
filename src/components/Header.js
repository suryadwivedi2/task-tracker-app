import PropTypes from 'prop-types'
import Button from './button'

function Header({ title, onAdd, showAdd }) {
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'green'} onClick={onAdd}></Button>
        </header>
    )
}


Header.defaultProps = {
    title: 'task tracker app'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

//css in jsx
// const Stylesheet={
//     color:'red',
//     backgroundColor:'yellow'

// }


export default Header