const React = require('react')

function Def (html) {
    return (
        <html>
            <head>...</head>
            <body>
            <nav>
  <ul><nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/places">Places</a>
    </li>
    <li>
      <a href="/places/new">Add Place</a>
    </li>
  </ul>
</nav>
</ul>
</nav>

                {html.children}
            </body>
        </html>
    )
}

module.exports = Def





