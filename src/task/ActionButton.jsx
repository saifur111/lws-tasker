export default function ActionButton({ bgColor, name, onActionClick }){
    return (
        <button onClick={onActionClick} className={ `rounded-md ${bgColor} px-3.5 py-2.5 text-sm font-semibold`}>{name}</button>
    );
}