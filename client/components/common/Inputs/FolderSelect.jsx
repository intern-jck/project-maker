// export default function Select({ className, inputName, value, options, changeHandler }: Props) {
//   return (
//     <div className={className}>
//       <label htmlFor={inputName}>{inputName ? inputName.toUpperCase() : ''}</label>
//       <select name={inputName} onChange={changeHandler} value={value}>
//         <option key={0} value="">
//           {inputName}
//         </option>
//         {options.map((option, i) => (
//           <option key={i + 1} value={option._id}>
//             {option.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }
