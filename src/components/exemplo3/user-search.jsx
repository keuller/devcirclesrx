import { h } from 'preact'

let userInput = ''  // KIDS PLEASE, DON'T DO THIS AT HOME

const UserSearch = ({ doSearch }) => (
    <div class="columns is-gapless">
        <div class="column">
            <label>Usu&aacute;rio:</label>
        </div>
        <div class="column is-11">
            <div class="field has-addons">
                <div class="control is-expanded">
                    <input type="text" class="input" 
                        onKeyPress={(ev) => (ev.keyCode == 13 ? doSearch(userInput.value) : null)}
                        ref={input => userInput = input} placeholder="username" />
                </div>
                <div class="control">
                    <a class="button is-info" onClick={(ev) => doSearch(userInput.value)} >Pesquisar</a>
                </div>
            </div>
        </div>
    </div>
)

export default UserSearch
