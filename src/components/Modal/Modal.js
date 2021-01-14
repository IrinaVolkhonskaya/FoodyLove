import React, { Component, createRef } from 'react';
import s from './Modal.module.css';

export default class Modal extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
    window.addEventListener('keydown', this.handleWindowKeyDown);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   const { isModalOpen } = this.props;
  //   return nextProps.isModalOpen !== isModalOpen;
  // }
  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
    window.removeEventListener('keydown', this.handleWindowKeyDown);
  }

  handleWindowKeyDown = e => {
    const { onClose } = this.props;
    if (e.keyCode === 27) {
      onClose();
    }
  };

  handleWindowClick = e => {
    console.log(`this.backdropRef.current: `, this.backdropRef.current);
    console.log(`e.target`, e.target);

    const { onClose } = this.props;
    if (this.backdropRef.current === e.target) {
      onClose();
    }
  };

  render() {
    const { onClose, children } = this.props;

    return (
      <div className={s.backdrop} ref={this.backdropRef}>
        <div className={s.modalWindow}>
          <p>
            Duis enim voluptate nisi sint minim incididunt nisi. Consectetur
            cupidatat nostrud officia irure pariatur reprehenderit et do.
            Eiusmod exercitation sint sit Lorem magna occaecat minim qui fugiat
            adipisicing nisi occaecat velit occaecat. Commodo officia amet in ut
            aute ipsum in dolore aliqua ad Lorem consectetur.
          </p>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
        {children}
      </div>
    );
  }
}
