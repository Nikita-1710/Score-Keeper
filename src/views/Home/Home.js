import ScoreCard from '../../components/ScoreCard';
import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Home() {
    const [scoreA, setScoreA] = useState(0);

    const [scoreB, setScoreB] = useState(0);

    const [winner, setWinner] = useState(null)

    const MAX_SCORE = 5;

    useEffect(() => {
        if (scoreA < MAX_SCORE && scoreB < MAX_SCORE) {
            return;
        }

        if (scoreA === MAX_SCORE) {
            setWinner("Team A")
            toast.success("Team A Wins🏆")
        }

        if (scoreB === MAX_SCORE) {
            setWinner("Team B")
            toast.success("Team B Wins🏆")
        }
    }, [scoreA, scoreB]);

    return (
        <div className='bg-blue-100 min-h-screen p-10'>
            <h1 className='text-center text-3xl md:text-5xl py-4 md:py-10 border-2 border-blue-500 border-dashed rounded-md text-blue-500 bg-white'>
                Score Keeper
            </h1>

            <div className='flex flex-col md:flex-row justify-center md:justify-around mt- md:mt-10'>
                <ScoreCard
                    score={scoreA}
                    teamName="Team A"
                    increaseScore={() => {
                        setScoreA(scoreA + 1);
                    }}
                    decreaseScore={() => {
                        setScoreA(scoreA - 1);
                    }}
                    winner={winner}
                />

                <ScoreCard
                    score={scoreB}
                    teamName="Team B"
                    increaseScore={() => {
                        setScoreB(scoreB + 1);
                    }}
                    decreaseScore={() => {
                        setScoreB(scoreB - 1);
                    }}
                    winner={winner}
                />
            </div>

            {winner ? (<p className='text-center text-2xl'>Winner team is <b className='underline decoration-double text-red-600'>{winner}🏆.</b> Click reset to start again.</p>) : null}


            <div className='flex justify-center mt-4 md:mt-10'>
                <button className='bg-blue-500 px-6 md:px-10 py-3 text-2xl md:text-4xl text-white rounded-lg shadow-lg' onClick={() => {
                    setScoreA(0);
                    setScoreB(0);
                    setWinner(null);
                }}>
                    Reset
                </button>
            </div>
            <Toaster />
        </div>
    )
}

export default Home