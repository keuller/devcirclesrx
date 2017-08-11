import { h } from 'preact'

const Content = (props) => (
    <section class="section">
        <div class="container">
            <div class="box">
                <article class="media">
                    <div class="media-content">
                        {props.children}
                    </div>
                </article>
            </div>
        </div>
    </section>
)

export default Content
