import { h } from 'preact'
import { Link } from 'preact-router/match'

const TopNav = (props) => (
    <nav class="navbar">
        <div class="navbar-brand topnav-left">
            <Link href="/" class="navbar-item">
                <span class="icon"><i class="fa fa-home"></i></span> 
                <span>Developer Circles</span>
            </Link>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <Link href="/exemplo1" class="navbar-item">Exemplo1</Link>
                <Link href="/exemplo2" class="navbar-item">Exemplo2</Link>
                <Link href="/exemplo3" class="navbar-item">Exemplo3</Link>
            </div>
            <div class="navbar-end">
                <span class="navbar-item">
                    Reactive Interfaces &nbsp;
                    <img src="https://cloud.githubusercontent.com/assets/762949/18562188/905876f6-7b37-11e6-8677-f9dd091490f6.gif" width="24" height="24" />
                </span>
            </div>
        </div>
    </nav>
)

export default TopNav
