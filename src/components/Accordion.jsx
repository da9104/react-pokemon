import { useState } from "react"
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'

export default function Accordion({ items }) {
    const [expandedIdx, setExpandedIdx] = useState(0) // -1
    
    const handleClick = (nextIndex) => {
        setExpandedIdx((currentIdx)=> {
            if (currentIdx === nextIndex) {
                return -1
            } else {
                nextIndex
            }
        })
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIdx

        const icon = <span> { isExpanded ? <GoChevronDown/> : <GoChevronLeft/> } </span>

        return (
            <div key={item.id}>
                <div className="flex justify-between items-center gap-2" onClick={() => handleClick(index)} >
                 {item.label}   
                 {icon}  
                </div>   
               
                <div>
                {isExpanded && <div>  {item.content}  </div>}
                </div>    
            </div>
        )
    })
    
    return (
        <div>
            {renderedItems}
        </div>
    )
}