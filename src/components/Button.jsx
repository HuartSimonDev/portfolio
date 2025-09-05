export default function Button({ children }) {
    return (
        <button className="font-normal text-xl font-mono text-gray-950 dark:hover:text-stone-50 dark:text-amber-50 bg-stone-200 dark:bg-stone-700 dark:hover:bg-stone-600 hover:bg-stone-300 px-3 py-2 rounded-lg cursor-pointer">
            {children}
        </button>
    );
}
