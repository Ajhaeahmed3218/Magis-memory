import "./SingleCard.css"

export default function SingleCard({ card, handleChoice, flipped }) {

  const handleClick = () => {
    handleChoice(card)

  }


  return (
    <div className="card" >
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt='card fronst' />
        <img
          className="back"
          src='/img/cover.png'
          alt='acrd back'
          onClick={handleClick}
        />

      </div>

    </div>
  )
}
