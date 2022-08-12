import React from "react";
import Modal from "react-modal";
import './styles.css';

export default function ModalUsers(props) {

    const customStyles = {
        content: {
            top: '50%',
            bottom: 'auto',
            left: '50%',
            right: 'auto',
            padding: '30px',
            backgroundColor: '#fff',
            transform: 'translate(-50%, -50%)',
            borderRadius: '5px',
            boxShadow: '0 2px 23px 0 rgba(0, 0, 0, 0.1), 0 2px 49px 0 rgba(0, 0, 0, 0.06)'
        }
    }

    return (

        <Modal
            isOpen={props.isOpen}
            onRequestClose={() => props.onRequestClose()}
            style={customStyles}
        >
            <h1 className="text-center">Deseja realmente excluir esse registro?</h1>
            <div className="button">
                <button
                    type="button"
                    className="react-modal-close btn btn-success"
                    onClick={() => props.handleRemoveUser()}
                >
                    Confirme
                </button>
                <button
                    type="button"
                    className="react-modal-close btn btn-danger"
                    onClick={() => props.onRequestClose()}
                >
                    Cancelar
                </button>
            </div>
        </Modal>

    );

}