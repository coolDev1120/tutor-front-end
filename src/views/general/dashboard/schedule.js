import React from "react"
import ScheduleSelector from 'react-schedule-selector'

const Shcedule = () => {
    return (
        <div>
            <ScheduleSelector
                startDate={new Date()}
                // selection={schedule}
                numDays={5}
                minTime={0}
                maxTime={24}
                hourlyChunks={1}
            />
        </div>
    )
}

export default Shcedule