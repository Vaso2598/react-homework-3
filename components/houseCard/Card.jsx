import React from 'react'
import Image from 'next/image'

const Card = ({record}) => {
    console.log(record)
    let rating = (
        (record.review_scores_accuracy +
        record.review_scores_cleanliness +
        record.review_scores_checkin +
        record.review_scores_communication +
        record.review_scores_location +
        record.review_scores_value) / 6)
  return (
    <div className="w-64 h-96">
        {record.xl_picture_url ?
        <Image src={record?.xl_picture_url}
        /* ??? */
        width={300}
        height={200}
        /* ??? */
        style={{objectFit:"cover"}}
        className="w-96 h-64 rounded-xl"
        />
        :
        <Image src="/placeholderImg/cat_in_currents.png"
        /* ??? */
        width={300}
        height={200}
        /* ??? */
        style={{objectFit:"cover"}}
        className="w-96 h-64 rounded-xl"
        />
        }
        <div className="flex justify-between">
            <p className="font-medium">{record.smart_location}</p>
            <p>★{rating.toString().slice(0, 4)}</p>
        </div>
        <p><b>${record.price}</b> night</p>
    </div>
  )
}

export default Card