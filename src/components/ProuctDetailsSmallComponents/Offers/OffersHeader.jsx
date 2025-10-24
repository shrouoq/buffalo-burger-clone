
export default function OffersHeader({chooices,itemChoosed,setContent}) {
    const handelChoices = (option) => {
        setContent(option)
    }

  return (
    <>
      {
          chooices.map(chooice => <button className="text-Whitee font-semibold text-lg p-3 rounded-sm bg-orangee uppercase" onClick={() => handelChoices(chooice)}>{chooice}</button>)
        }

        {
          itemChoosed[0].drink && <button className="text-Whitee font-semibold text-lg p-3 rounded-sm bg-orangee uppercase" onClick={() => handelChoices('drink')}>drink</button>
        }

        {
          itemChoosed[0].exstra && <button className="text-Whitee font-semibold text-lg p-3 rounded-sm bg-orangee" onClick={() => handelChoices('exstra')}>EXTRA ITEMS</button>
        }
    </>
  )
}
