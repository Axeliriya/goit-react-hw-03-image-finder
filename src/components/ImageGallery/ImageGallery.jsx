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

export default ImageGallery;
