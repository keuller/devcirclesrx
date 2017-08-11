import { h } from 'preact'

const label = (paid) => (paid ? 'bill-paid' : '')

const BillItem = ({ code, bill, update, remove }) => (
    <div class="columns is-gapless">
        <div class="column has-text-centered">
            <input type="checkbox" onChange={(ev) => update(code)} />
        </div>
        <div class="column is-2 has-text-centered">
            <span class={label(bill.paid)}>{bill.dueDate}</span>
        </div>
        <div class="column is-6">
            <span class={label(bill.paid)}>{bill.name}</span>
        </div>
        <div class="column is-2 has-text-right">
            <span class={label(bill.paid)}>R$ {bill.value.toFixed(2)}</span>
        </div>
        <div class="column has-text-centered">
            {bill.paid ? <button class="delete" onClick={(ev) => remove(code)}></button> : null}
        </div>
    </div>
)

const BillList = ({ data, doUpdate, doRemove }) => (
    <div class="section is-paddingless">
        <div class="container is-fluid is-marginless">
            {Object.keys(data).map(id => <BillItem key={id} bill={data[id]} code={id} update={doUpdate} remove={doRemove} />)}
        </div>
    </div>
)

export default BillList
