import { h } from 'preact'
import { dispatch } from 'lib/redux'
import Content from 'components/layout/content'
import UserSearch from 'components/exemplo3/user-search'
import UserExplorer from 'components/exemplo3/user-explorer'
import { getUserInfo, fetchUser, cleanError } from 'store/users'

const search = (username) => (username && username != '' ? dispatch(getUserInfo(fetchUser(username))) : null)
const clean = () => dispatch(cleanError())

const Exemplo = ({ user }) => (
    <Content>
        <h3 class="title is-3">Exemplo 3 - Github Search</h3>
        <section class="section is-paddingless">
            <div class="container is-fluid is-marginless">
                <UserSearch doSearch={search} />
                <UserExplorer userInfo={user} hideNotify={clean} />
            </div> 
        </section>
    </Content>
)

export default Exemplo
