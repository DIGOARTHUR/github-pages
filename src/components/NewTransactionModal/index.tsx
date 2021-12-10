import Modal from "react-modal";
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container,TransactionTypeContainer } from "./style";

interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: newTransactionModalProps) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button type="button"
                onClick={onRequestClose}
                className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder="Título"
                />

                <input
                    type="number"
                    placeholder="Preço"
                />

                <TransactionTypeContainer>
                <button
                >
                    <img src="incomeImg" alt="" />
                </button>
                </TransactionTypeContainer>


                <input

                    placeholder="Categoria"
                />

                <button type="submit"> Cadastrar</button>
            </Container>


        </Modal>
    )
}