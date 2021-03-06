import { Container } from "./style";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
export function Summary() {

    return (
        <Container>
            <div>
                <header>
               <p>Entradas</p>
               <img src={incomeImg} alt="Entradas"/>

                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
               <p>Saidas</p>
               <img src={outcomeImg} alt="Saidas"/>

                </header>
                <strong> -R$350,00</strong>
            </div>
            <div className="backgound-highlight">
                <header>
               <p>Total</p>
               <img src={totalImg} alt="Total"/>

                </header>
                <strong>R$650,00</strong>
            </div>
        </Container>

    );
}