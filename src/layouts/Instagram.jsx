import React from 'react'

const Instagram = () => {
  return (
    <section className='instagram'>
      <h4>From Instagram</h4>
      <div className="cards">
        {images.map((img, i) => (
          <div key={i} className="card">
            <img src={img} alt="model" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Instagram

const images = [
  "https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/65693293_1730965923868802_1231090634055239303_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=E9-HmBCYgpsAX_6V7WK&_nc_oc=AQnLDA3mk_IZ5bn5lAt5XoY0P54gQ-OVSF10eZq4evvaMFvUhMqxmJj4nQjUDxq5uWI&_nc_ht=scontent-ort2-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-u5LQ-I22O4Vc1_NKqRCofKxka3gq5oDiyjBku8BJ_Qg&oe=6236A65F",
  "https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/65392538_143613306743912_6799761555156667069_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=Rj4mOTEX9nkAX-3ruqm&_nc_ht=scontent-ort2-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_UifLv0rFaDjU7j-uknzqlUWk-dP9uppH_udIOS7-Lxg&oe=6236CEC1",
  "https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/62655446_2035934770048735_7647652709216993469_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=qigBWrgILJYAX8QBqPu&_nc_ht=scontent-ort2-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8yhoKxH2R_njczrk27-xlAve0j7lxRTKHs-aJlC4u4MQ&oe=623611C8",
  "https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/64537482_494825814591348_8902741353003042326_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=_kpf33FMUNAAX-1726j&_nc_ht=scontent-ort2-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_BTg81FLq1iW-SVJpUyt6C-QNr_Zn9ye5COEfM0C5IEg&oe=6236B8B4"
]