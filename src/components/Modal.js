import React, { Component, createRef } from 'react';

export default class Modal extends Component {
  modalRef = createRef();
 // conponentDidMount() {}; прописать
 // componentWillUnmount() {}; прописать

  render() {
    const { onClose } = this.props;
    return (
      <div className="Backdrop">
        <div className="ModalWindow">
          <p>
            Duis enim voluptate nisi sint minim incididunt nisi. Consectetur
            cupidatat nostrud officia irure pariatur reprehenderit et do.
            Eiusmod exercitation sint sit Lorem magna occaecat minim qui fugiat
            adipisicing nisi occaecat velit occaecat. Commodo officia amet in ut
            aute ipsum in dolore aliqua ad Lorem consectetur. Lorem cupidatat
            deserunt nostrud labore anim ex Lorem deserunt incididunt esse
            proident nisi consectetur. Consequat tempor consequat velit fugiat
            proident voluptate duis quis aliquip cillum do id eu commodo.
            <button type="button" onClick={onClose}>
              Close
            </button>
          </p>
        </div>
      </div>
    );
  }
}
