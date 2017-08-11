import { h } from 'preact'
import UserCard from 'components/exemplo3/user-card'
import RepoCard from 'components/exemplo3/repo-card'

const Alert = (props) => {
    if (!props.show) return null
    return (
    <div class="notification is-warning">
        <button class="delete" onClick={(ev) => props.close()}></button>
        <p class="title is-4">Ops! :(</p>
        <p class="has-text-centered subtitle is-5"><br/>Usu&aacute;rio n&atilde;o encontrado!</p>
    </div>
    )
}

const UserExplorer = ({ userInfo, hideNotify }) => (
    <div>
        <div class="columns">
            <div class="column is-12">
                <Alert show={userInfo.error} close={hideNotify} />
            </div>
        </div>
        <div class="columns">
            <div class="column is-half">
                <UserCard user={userInfo.data} />
            </div>
            <div class="column">
                <RepoCard repos={userInfo.repos} />
            </div>
        </div>
    </div>
)

export default UserExplorer
