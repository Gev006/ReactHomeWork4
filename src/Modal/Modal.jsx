import { useState } from "react"
import styles from "./modal.module.css"
import ModalComponent from "./modalComponent/modal"

function Modal() {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenModal = () => setIsOpen(true)
    const handleCloseModal = () => setIsOpen(false)

    return (<div className={styles.app}>
        {!isOpen && <button className={styles.openBtn} onClick={handleOpenModal}>Open Modal</button>}
        {isOpen && <ModalComponent isOpen={isOpen} handleCloseModal={handleCloseModal}/>}
    </div>)
}

export default Modal