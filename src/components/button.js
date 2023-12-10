import PropTypes from 'prop-types'

function button({ color, text, onClick }) {
    // const onClick = (e) => {
    //     console.log(e);
    // }

    return (
        <button
            style={{ backgroundColor: color }}
            className='btn'
            onClick={onClick}
        >
            {text}
        </button>
    )
}

button.defaultProps = {
    color: 'steelblue',
    text: 'Add'
}

button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default button