import Item from './Item'

export default function Items({ itemsList }) {

    return (
        <>
            <div className="sm:w-5/6 flex flex-col md:grid md:grid-cols-3 gap-6 p-8">
                {itemsList.map((i, index) => (<div key={index}><Item item={i} /></div>))}
            </div>
        </>

    )
}