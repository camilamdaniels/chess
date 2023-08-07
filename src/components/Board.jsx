import { useState, useEffect } from 'react'
import './Board.css'

const Board = () => {
    const n = 8;

    const [chessBoard, setChessBoard ] = useState([])

    useEffect(() => {
        const result = []

        for (let i = 0; i < n; i++) {
            const row = Array.from({ length: n })
            result.push(row)
        }

        setChessBoard(result)
    }, [])

    return (
        <div
            style={
                {
                    border: '1px solid #f198b3',
                    padding: '20px'
                }
            }
        >
            {chessBoard.length > 0 && 
                chessBoard.map((row, rowNum) => {
                    return (
                        <div className='row' key={rowNum}>
                            {row.map((_, colNum) => {
                                return (
                                    <div
                                        className={`box ${(rowNum + colNum) % 2 === 0 ? 'dark' : 'light'}`}
                                        key={colNum}
                                    >
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}

        </div>
    )
}

export default Board