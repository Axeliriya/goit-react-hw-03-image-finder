import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ gallery, onToggleModal }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onToggleModal={onToggleModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;
