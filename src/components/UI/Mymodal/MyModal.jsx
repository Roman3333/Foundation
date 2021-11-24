import React from "react";
import "./MyModal.css";

function MyModal({ modal, setModal, children }) {
  let rootClasses = ["myModal"];
  if (modal) {
    rootClasses.push("active");
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setModal(false)}>
      <div className="myModalContent" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default MyModal;
