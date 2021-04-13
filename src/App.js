import './styles.css';
import { Component } from 'react';
import getFetch from './components/services/service-api';
import Container from './components/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import Picture from './components/Picture';

class App extends Component {
  state = {
    gallery: [],
    currentPage: 1,
    searchQuery: '',
    loading: false,
    error: null,
    showModal: false,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchGallery();
    }
  }

  handleSearch = search => {
    if (search) {
      this.setState({ searchQuery: search, currentPage: 1, gallery: [] });
    }
  };

  fetchGallery = () => {
    const { currentPage, searchQuery } = this.state;

    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ loading: true });

    getFetch(options)
      .then(({ hits }) => {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
        this.scroll();
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleClick = url => {
    this.toggleModal();
    this.setState({
      largeImage: url,
    });
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const {
      gallery,
      searchQuery,
      loading,
      error,
      showModal,
      largeImage,
    } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        <Container>
          {error ? (
            <h2>Oops! It looks like an error has occurred: {error}</h2>
          ) : (
            <ImageGallery gallery={gallery} onToggleModal={this.handleClick} />
          )}
          {searchQuery && (
            <Button onClick={this.fetchGallery} loading={loading} />
          )}
          {showModal && (
            <Modal onToggleModal={this.toggleModal}>
              <Picture largeImage={largeImage} />
            </Modal>
          )}
        </Container>
      </>
    );
  }
}

export default App;
