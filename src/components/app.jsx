import { h } from 'preact'
import Router from 'preact-router'
import TopNav from 'components/topnav'
import Splash from 'components/splash'
import Exemplo1 from 'components/exemplo1'
import Exemplo2 from 'components/exemplo2'
import Exemplo3 from 'components/exemplo3'

const App = ({ character, user, billing }) => (
    <main>
        <TopNav />
        <div class="hero">
            <Router>
                <Splash path="/" />
                <Exemplo1 path="/exemplo1" person={character.selected} />
                <Exemplo2 path="/exemplo2" billing={billing} />
                <Exemplo3 path="/exemplo3" user={user} />
            </Router>
        </div>
    </main>
)

export default App
