import { useState } from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface Headerprops{
    onOpenNewTransactionModal: () => void;
}
export function Header({onOpenNewTransactionModal}: Headerprops) {

    
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="" />
                <button onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>


    )
}