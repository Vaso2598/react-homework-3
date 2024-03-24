import React from 'react'
import Image from 'next/image'
import getRating from '@/lib/rating'

const Card = ({record}) => {
    // console.log(record)
  return (    
    <div className="w-64 h-96">
        {record.xl_picture_url ?
        <Image src={record?.xl_picture_url}
        width={150}
        height={150}
        style={{objectFit:"cover"}}
        alt={record.smart_location}
        className="w-96 h-64 rounded-xl"
        />
        :
        <Image src="/placeholderImg/cat_in_currents.png"
        width={150}
        height={150}
        style={{objectFit:"cover"}}
        alt={record.smart_location}
        className="w-96 h-64 rounded-xl"
        />
        }
        <div className="flex justify-between">
            <p className="font-medium">{record.smart_location}</p>
            <p>★{getRating(record).toString().slice(0, 4)}</p>
        </div>
        <p><b>${record.price}</b> night</p>
    </div>
  )
}

export default Card