const ImageGalleryItem = ({ image, onToggleModal }) => {
  const { webformatURL, tags, largeImageURL } = image;
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => onToggleModal(largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
