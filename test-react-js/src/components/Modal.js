function Modal(props) {
  return (
    <div className="modal">
      <p>{props.text}</p>
      <button className="btn btn--alt" onClick={props.onClose}>
        戻る
      </button>
      <button className="btn" onClick={props.onClose}>
        確認
      </button>
    </div>
  );
}

export default Modal;