import React from 'react'
import faqs from './../data/faqs.json';


export const FAQPage = () => {
	return (
		<ul className="faqs">
			{faqs.map( (item, index) => (
				<li key={index}>
					<p className="question">{item.q}</p>
					<p className="answer">{item.a}</p>
				</li>
			))}
		</ul>
	)
}
