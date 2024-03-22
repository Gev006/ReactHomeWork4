import { createPortal } from "react-dom"
import styles from "./modal.module.css"
import { useClickOutside } from "./useOutSideHook"
import { useEffect } from "react"

function ModalComponent({ header, children, footer, handleCloseModal, isOpen }) {

    const [ref] = useClickOutside(handleCloseModal)

    useEffect(() => {
        const handleCloseWithEsc = (e) => {
            if (e.key === "Escape") {
                handleCloseModal()
            }
        }
        document.addEventListener('keydown', handleCloseWithEsc)
        return () => document.removeEventListener("keydown", handleCloseWithEsc)
    }, [isOpen])

    return createPortal(<div className={styles.container}>

        <div ref={ref} className={styles.modal}>
            <button onClick={handleCloseModal} className={styles.closeBtn}>X</button>
            <header> {header || "Header"} </header>
            <section> {children || "Children"} </section>
            <footer> {footer || "Footer"} </footer>
        </div>

    </div>, document.body)
}

export default ModalComponent