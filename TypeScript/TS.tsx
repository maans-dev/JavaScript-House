// interface MessageProps {
// 	text: string;
// 	important: boolean;
//	children: JSX.Element | JSX.Element[];
//   }
   
//   function Message({ text, important, children }: MessageProps) {
// 	return (
// 	  <div>
// 		{important ? 'Important message: ' : 'Regular message: '}
// 		{children}
//		{text}
// 	  </div>
// 	);
//   }

//rendering the component with sup props <Message text="Form has been submitted" important={false} /> <span> Message me </span>

// type appProps {
// 	message: string;
// }

// function App ({message}: App) => <div>{message} </div>

// 
// type AppProps = {
// 	message: string;
// 	count: number;
// 	disabled: boolean;
// 	/** array of a type! */
// 	names: string[];
// 	/** string literals to specify exact string values, with a union type to join them together */
// 	status: "waiting" | "success";
// 	/** any object as long as you dont use its properties (NOT COMMON but useful as placeholder) */
// 	obj: object;
// 	obj2: {}; // almost the same as `object`, exactly the same as `Object`
// 	/** an object with any number of properties (PREFERRED) */
// 	obj3: {
// 	  id: string;
// 	  title: string;
// 	};
// 	/** array of objects! (common) */
// 	objArr: {
// 	  id: string;
// 	  title: string;
// 	}[];
// 	/** a dict object with any number of properties of the same type */
// 	dict1: {
// 	  [key: string]: MyTypeHere;
// 	};
// 	dict2: Record<string, MyTypeHere>; // equivalent to dict1
// 	/** any function as long as you don't invoke it (not recommended) */
// 	onSomething: Function;
// 	/** function that doesn't take or return anything (VERY COMMON) */
// 	onClick: () => void;
// 	/** function with named prop (VERY COMMON) */
// 	onChange: (id: number) => void;
// 	/** function type syntax that takes an event (VERY COMMON) */
// 	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// 	/** alternative function type syntax that takes an event (VERY COMMON) */
// 	onClick(event: React.MouseEvent<HTMLButtonElement>): void;
// 	/** an optional prop (VERY COMMON!) */
// 	optional?: OptionalType;
//   };
