/////////////////////////////////////////////////////////////////
// * Այս Օրինակում " React.FC" գրվածքը նշ․,որ "Child"-ը պետք է պարտադիր լինի ֆունկցիոնալ կոմպօնենտ և վերադարձնի "jsx"
// * "handlerClick" ունի "event"-ի ստուգում, որտեղ 
// "React.MouseEvent<HTMLButtonElement>" դրվածքով ասվում է, որ այն Մկնիկի իրադարձություն է ր նախատեսված է միայն "button" էլեմենտի համար,կարող եք այն նշանակել նաև "div"ին՝ կհարուցվի սխալ։
// * TS-ում "event"-ին կարելի է տալ "type"
/////////////////////////////////////////////////////////////////

import React from 'react'

const Child: React.FC = () => {

	const handlerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log("works only with buttons")
	}
	return (

		<div>
			<button onClick={handlerClick}>Special for button</button>
		</div>
	)
}
export default Child;