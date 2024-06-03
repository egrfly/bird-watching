import { useState, useEffect } from "react"
import { getSightingsData } from "../api/eBirdClient"
import Button from "../components/Button"
import SightingData from "../models/SightingData"
import "./Sightings.scss"

const Sighting = (sightingData: SightingData) => {
  return (
    <div className="Sighting">
      <h2>{sightingData.comName}</h2>
      <h3>
        {sightingData.subnational2Name}, {sightingData.subnational1Name}
      </h3>
      <p>
        Spotted by <strong>{sightingData.userDisplayName}</strong> on{" "}
        <strong>{sightingData.obsDt.substring(0, 10)}</strong> at <strong>{sightingData.obsDt.substring(11)}</strong>
      </p>
    </div>
  )
}

const Sightings = () => {
  const [sightingsData, setSightingsData] = useState<SightingData[]>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  const loadSightingsData = () => {
    setSightingsData(undefined)
    setLoading(true)
    setError(false)
    getSightingsData()
      .then((data) => setSightingsData(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    loadSightingsData()
  }, [])

  return (
    <div className="Sightings">
      <h1>Sightings</h1>
      <p>These are some recent notable sightings in the UK.</p>
      {sightingsData && (
        <div className="container">
          {sightingsData.map((sighting) => (
            <Sighting {...sighting} />
          ))}
        </div>
      )}
      {loading && <p className="text-loading">Loading sightings...</p>}
      {error && (
        <>
          <p className="text-error">Unable to load sightings at this time.</p>
          <Button onClick={loadSightingsData}>Try again</Button>
        </>
      )}
    </div>
  )
}

export default Sightings
