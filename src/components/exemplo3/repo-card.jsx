import { h } from 'preact'

const RepoTableHeader = (props) => (
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Language</th>
            <th>Stars</th>
        </tr>
    </thead>
)

const RepoTableRow = ({ data }) => (
    <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.language}</td>
        <td>{data.stars}</td>
    </tr>
)

const RepoCard = ({ repos }) => {
    if (repos && repos.length < 1) return null
    return (
    <div class="card">
        <div class="card-content is-paddingless">
            <div class="content">
                <table class="table">
                    <RepoTableHeader />
                    <tbody>
                        {repos.map(item => <RepoTableRow key={item.id} data={item} /> )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default RepoCard
