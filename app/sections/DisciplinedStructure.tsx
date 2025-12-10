import React from 'react'
import Badge from '../components/Badge'

const DisciplinedStructure = () => {
    return (
        <>
            <div className="bg-gray900 py-42">
                <div className="container">
                    <div className="space-y-8">
                        <div>
                            <Badge label="Disciplined Structure" variant='darkgreen' />
                        </div>
                        <div>
                            <h2 className="text-white max-xs:tracking-[-1px] max-xs:text-3xl text-5xl xxl:text-56 font-semibold tracking-[-1.68px] xxl:leading-16">
                                <span className="text-gray500">Strategies are only activated when all five steps align —</span> this creates structure and ensures decisions remain transparent and stable.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisciplinedStructure
