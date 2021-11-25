// Portal; Bir component'ı parant component'ının dışında render'lamaya denir.
// <Modal>'ın <App>'in içerisnde olduğunu devTools'da görebiliriz.Ama genellikle "modal"lar <body>'nin en sonunda yer alır. "Portal" ile bunu gerçekleştirebiliriz.
// "Portal" "react-dom"un bir parçasıdır.
import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ children, handleClose }) {
  // "createPortal()"ın ilk parametresi "parent component'ının dışında yer almasını istediğimiz içerik"tir, ikinci parametre ise "nerede yer almasını istediğimiz"dir.
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={handleClose}>close</button>
      </div>
    </div>,
    document.body
  );
}

// "modal"a devTools'da baktığımızda (parent component'ının dışına) body'nin sonuna eklendiğini görürüz. (NOT parent component'ından gelen css özelliklerini kaybeder)
