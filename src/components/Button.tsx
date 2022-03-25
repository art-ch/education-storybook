import PropTypes from 'prop-types';

interface ButtonProps {
  label: string;
  color: string;
  size?: string;
  backgroundColor: string;
  handleClick?: () => void;
}

function Button({
  label,
  color = 'white',
  backgroundColor = 'seagreen',
  size = 'md',
  handleClick
}: ButtonProps) {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.5;
  const style = {
    color,
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: 'none'
  };
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  handleClick: PropTypes.func
};

export default Button;
