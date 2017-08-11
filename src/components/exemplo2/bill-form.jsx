import { h, Component } from 'preact'
import { genId } from 'lib/util'
import Formx from 'lib/formx'
import Field from 'components/exemplo2/form-field'

class BillForm extends Component {

    constructor(props) {
        super(props)
        this.form = new Formx({ id:'', name:'', value: 0, dueDate: '', paid: false })
    }

    onCancel(ev) {
        this.props.doCancel(ev)
        this.form.reset()
    }

    onSave(ev) {
        ev.preventDefault()
        let bill = this.form.value()
        bill.id = genId()
        bill.value = parseFloat(bill.value)
        this.props.doSave(bill)
        this.form.reset()
        this.props.doCancel(ev)
    }

    render({ opened, doSave, doCancel }, state) {
        let modalClass = (opened ? "modal is-active" : "modal")
        return (
            <div class={modalClass}>
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Conta</p>
                        <button class="delete" onClick={this.onCancel.bind(this)}></button>
                    </header>
                    <section class="modal-card-body">
                        <form>
                            <Field label="Conta">
                                <input type="text" class="input" 
                                    onInput={this.form.update('name')} 
                                    value={this.form.field('name')} />
                            </Field>
                            <Field label="Vencimento">
                                <input type="text" class="input" 
                                    onInput={this.form.update('dueDate')} 
                                    value={this.form.field('dueDate')} />
                            </Field>
                            <Field label="Valor R$">
                                <input type="text" class="input" 
                                    onInput={this.form.update('value')} 
                                    value={this.form.field('value')} />
                            </Field>
                        </form>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-info" type="button" onClick={this.onSave.bind(this)}>Salvar</button>
                        <a class="button" onClick={this.onCancel.bind(this)}>Cancelar</a>
                    </footer>
                </div>
            </div>
        )
    }
}

export default BillForm
