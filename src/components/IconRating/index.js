import React, { useState, useEffect } from 'react'

function Icon({ toggled, toggledClassName, untoggledClassName, onMouseEnter, onClickRating }) {
  const iStyle = {
    cursor : 'pointer'
  };
  const className = toggled ? toggledClassName : untoggledClassName;

  return (
    <span className="icon is-large">
      <i className={className} onMouseMove={onMouseEnter} style={iStyle} onClick={onClickRating}/>
    </span>
  )
}

export default function IconRating({ ratingMax, className, viewOnly, halfClassName, toggledClassName, untoggledClassName, initialRating, onChange }) {
  const [max] = useState(ratingMax || 5)
  const [hovering, setHovering] = useState(false)
  const [currentRating, setCurrentRating] = useState(initialRating || 0)
  const [currentRating_hover, setCurrentRating_hover] = useState(0)
  const [renderRatings, setRenderRatings] = useState([])

  function mouseLeave() {
    setHovering(false)
  }

  useEffect(() => {
    function onMouseEnter(mouseRating, e) {
      let rating = mouseRating

      if((e.nativeEvent.layerX) < (e.target.offsetLeft + (e.target.offsetWidth / 2))){
        rating -= .5;
      }

      setCurrentRating_hover(rating)
      setHovering(true)
    }

    function onClickRating(e) {
      setCurrentRating(currentRating_hover)

      if(onChange){
        onChange(currentRating_hover)
      }
    }

    let ratings = []
    let toggled = false, rating, hCN,
        noop = () => {},
        mouseEnter = viewOnly ? noop : onMouseEnter,
        clickRating = viewOnly ? noop : onClickRating

    for (let i = 1; i <= max; ++i) {
      rating = hovering ? currentRating_hover : currentRating
      toggled = i <= Math.round(rating) ? true : false
      hCN = null

      if(halfClassName &&
         Math.round(rating) === i &&
         Math.floor(rating) !== rating){
          hCN = halfClassName;
      }

      ratings.push(
        <Icon key={`${i}-rating-icon`} toggledClassName={hCN || toggledClassName} untoggledClassName={untoggledClassName} onMouseEnter={mouseEnter.bind(this,i)} onClickRating={clickRating.bind(this,i)} toggled={toggled} />
      )

      setRenderRatings(ratings)
    }
  }, [hovering, currentRating, currentRating_hover, halfClassName, max, onChange, toggledClassName, untoggledClassName, viewOnly])

  return(
    <div className={className} onMouseLeave={mouseLeave}>
      {renderRatings}
    </div>
  )
}
