interface Buttontype{
    label:string;
    onClick:()=>void
}
function Button({ label, onClick }: Buttontype) {
    return (
        <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            {label}
        </button>
    );
}
export default Button;