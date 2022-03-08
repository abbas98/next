import Modal from '../modal/Modal'

export default function Post({ item, showHandler, show }) {


    return (
        <>
            {
                <Modal showHandler={showHandler} show={show}>
                    <div className="bg-white w-2/3 rounded-2xl flex flex-row" onClick={e => e.stopPropagation()}>
                    <img className="rounded-l-2xl w-1/2 " src={item.imagePath} alt={item.name} />
                        <div className="p-4 flex flex-col gap-2">
                            <h1 className="text-2xl text-gray-600 font-[700]">{item.name}</h1>
                            
                            <p>{item.desc}</p>
                        </div>

                    </div>
                </Modal>
            }
        </>
    )
}