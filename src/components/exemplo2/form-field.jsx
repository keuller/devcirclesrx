import { h } from 'preact'

const FieldForm = (props) => (
    <div class="field">
        <label class="label">{props.label}</label>
        <p class="control">
            {props.children}
        </p>
    </div>
)

export default FieldForm
