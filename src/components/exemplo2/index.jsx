import { h, Component } from 'preact'
import { dispatch } from 'lib/redux'
import { addBill, payBill, removeBill } from 'store/billing'
import Content from 'components/layout/content'
import BillHeader from 'components/exemplo2/bill-header'
import BillList from 'components/exemplo2/bill-list'
import BillForm from 'components/exemplo2/bill-form'

const save = (data) => dispatch(addBill(data))
const update = (id) => dispatch(payBill(id))
const remove = (id) => dispatch(removeBill(id))

class Exemplo extends Component {

    constructor(props) {
        super(props)
        this.state = { edit: false }
    }

    onNew(ev) {
        ev.preventDefault()
        this.setState({ edit: true })
    }

    onCancel(ev) {
        ev.preventDefault()
        this.setState({ edit: false })
    }

    render({ billing }, state) {
        return (
            <Content>
                <h3 class="title is-3">Exemplo 2 - Minhas Finan&ccedil;as</h3>
                <section class="section is-paddingless">
                    <div class="container is-fluid is-marginless">
                        <BillHeader doNew={this.onNew.bind(this)} balance={billing.total.toFixed(2)} /> 
                        <hr/>
                        <BillList doUpdate={update} doRemove={remove} data={billing.data} />
                    </div> 
                </section>

                <BillForm opened={state.edit} doSave={save} doCancel={this.onCancel.bind(this)} />
            </Content>
        )
    }
}

export default Exemplo
