const { data } = require('jquery')
const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          ...
        </Def>
    )
}

module.exports = edit_form


function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
  <div className="form-group">
    <label htmlFor="name">Place Name</label>
    <input 
    className="form-control" 
    id="name" 
    name="name" 
    value={data.place.name}
    required />
  </div>
  <div className="form-group">
    <label htmlFor="pic">Place Picture</label>
    <input className="form-control" id="pic" name="pic" />
  </div>
  <div className="form-group">
    <label htmlFor="city">City</label>
    <input className="form-control" id="city" name="city" />
  </div>
  <div className="form-group">
    <label htmlFor="state">State</label>
    <input className="form-control" id="state" name="state" />
  </div>
  <div className="form-group">
    <label htmlFor="cuisines">Cuisines</label>
    <input className="form-control" id="cuisines" name="cuisines" required />
  </div>
  <input className="btn btn-primary" type="submit" value="Add Place" />
</form>
<div className="form-group col-sm-4">
  <label htmlFor="founded">Founded Year</label>
  <input 
    type="number" 
    className="form-control" 
    id="founded" 
    name="founded" 
    value={new Date().getFullYear()} />
</div>
          </main>
        </Def>
    )
}

let sumRatings = data.place.comments.reduce((tot, c) => {
  return tot + c.stars
}, 0)
let averageRating = Math.round(sumRating / data.place.comments.lenght)
let stars = ''
for (let i=0; i <averageRating; i++) {
  stars += '⭐'
}
rating = (
  <h3>
  {stars} stars
  </h3>
)


module.exports = new_form
