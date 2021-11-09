/////////////////////////////////////////////////////////////////
// * Այս Օրինակում ստեղծված է "myPropsRule" անունով ինտերֆեյս "props"-ը կառավարելու համար
// * եթե նշված 2 արգումենտները չփոխանցվեն կհարոուցվի սխալ
/////////////////////////////////////////////////////////////////
import s from "./Title.module.css"
interface myPropsRule {
	title:string,
	lesson:number
}
const Title = (props: myPropsRule) =>  {
	return (
		<div>
			<h1 className={s.title}>{props.title}<span>{props.lesson}</span></h1>
		</div>
	)
}
export default Title;