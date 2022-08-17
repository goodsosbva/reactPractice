import PropTypes from 'prop-types';

const MyComponent = (props) => {
    const { name, children, favoriteNumber } = props;
    return <div>
        hi my name is {name}!<br />
        children 값은 {children} 임.
        내가 제일 좋아하는 숫자는 {favoriteNumber} 임
    </div>
}

MyComponent.defaultProps = {
    name: 'khs'
}

MyComponent.prototype = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;