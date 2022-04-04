// @packages
import PropTypes from 'prop-types';

// @own
import './styles.scss';

const Card = ({ image, title, description }) => {
  return (
    <div className='card'>
      <img alt='QR code' className='card__image' src={image} />
      <div className='card__info-container'>
        <div className='card__title'>{title}</div>
        <div className='card__description'>{description}</div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  description: 'Card Description',
  title: 'Card Title',
};

Card.propTypes = {
  description: PropTypes.string,
  image: PropTypes.node,
  title: PropTypes.string,
};

export default Card;
