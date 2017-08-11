import { h } from 'preact'
import Content from 'components/layout/content'
import Person from 'components/exemplo1/person'
import { dispatch } from 'lib/redux'
import { changePerson } from 'store/character'

const clickHandler = (person) => (ev) => dispatch(changePerson({ code: person }))

const Exemplo = ({ person }) => (
    <Content>
        <h3 class="title is-3">Exemplo 1 - Big Bang Theory</h3>
        <p class="button-group">
            <button class="button is-primary" onClick={clickHandler('4536')}>Sheldon</button>
            <button class="button is-primary" onClick={clickHandler('7821')}>Leonard</button>
            <button class="button is-primary" onClick={clickHandler('9036')}>Howard</button>
            <button class="button is-primary" onClick={clickHandler('1430')}>Rajesh</button>    
        </p>
        <p>
            {person.name ? <Person data={person} /> : null}
        </p>
    </Content>
)

export default Exemplo
