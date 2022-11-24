const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
          </main>
      </Def>
    )
  }
  
  function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className="col-sm-6">
          <h2>
            <a href={`/places/${place.id} ` } >
              {place.name}
            </a>
          </h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name} />
          <p className="text-center">
            Located in {place.city}, {place.state}
          </p>
        </div>
        
      )
    })
    
    
    
    return (
      <Def>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              {placesFormatted}
          </main>
      </Def>
  )
  }
  
  <div className="form-group">
  <label for="founded">Founded Year</label>
  <input className="form-control" id="founded" name="founded" />
</div>

  
  
  
  

module.exports = home
