import { h } from 'preact'

const BillHeader = ({ balance, doNew }) => (
    <div class="columns">
        <div class="column">
            <button class="button is-primary" onClick={(ev) => doNew(ev)}>Nova Conta</button>
        </div>
        <div class="column has-text-right">
            <span class="title is-4">Saldo R$ {balance}</span>
        </div>
    </div>
)

export default BillHeader
