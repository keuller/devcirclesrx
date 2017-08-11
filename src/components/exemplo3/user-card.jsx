import { h } from 'preact'
import { fmtDate } from 'lib/util'

const subtitle = (user) => {
    let subt = `@${user.login}`
    if (user.company) subt += ` - ${user.company}`
    let user_since = fmtDate(user.created_at)
    subt += ` - ${user_since}`
    return subt
}

const UserCard = ({ user }) => {
    if (user.name === '' || user.name == undefined) return (<div></div>)

    return (
    <div class="card">
        <div class="card-content is-spaceless">
            <div class="media">
                <div class="media-left">
                    <figure className="image is-48x48">
                        <img src={user.avatar_url} alt="" />
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-5">{user.name}</p>
                    <p class="subtitle is-6">{subtitle(user)}</p>
                </div>
            </div>

            <div class="content">
                <p class="">{user.bio}</p>
            </div>
        </div>
        <div class="card-footer">
            <p class="card-footer-item">
                <span>Repos: {user.public_repos}</span>
            </p>
            <p class="card-footer-item">
                <span>Seguidores: {user.followers}</span>
            </p>
            <p class="card-footer-item">
                <span>{user.location}</span>
            </p>
        </div>
    </div>
    )
}

export default UserCard
