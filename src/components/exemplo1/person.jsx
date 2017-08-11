import { h } from 'preact'

const Person = ({ data }) => (
    <article class="media">
        <figure class="media-left">
            <img src={data.picture} class="image is-128x128" />
        </figure>
        <div class="media-content">
            <p class="title is-4">{data.name}</p>
        </div>
    </article>
)

export default Person
