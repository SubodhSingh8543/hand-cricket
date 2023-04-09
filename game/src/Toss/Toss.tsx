import React, { useState, useContext, ReactNode } from 'react';
import { ImageContext } from '../context/imageContext';
// import 'components/Toss/Toss.css';
// import coin from 'assets/coin.png';
// interface TossProps {
//   children?: ReactNode;
// }
// { children }: TossProps
export const Toss = () => {
    const [toss, setToss] = useState<string>('');
    const [spinner, startSpin] = useState<boolean>(false);
    const outcomes = ['Heads', 'Tails'];
    const choice = ["Bat", 'Bowl'];
    const [result, setResult] = useState<string>('');
    const bat = useContext(ImageContext);
    const screen = useContext(ImageContext);
    const batting = bat?.batting[0];
    let setBatFirst = bat?.batting[1];
    console.log(bat?.batting[1]);
    let setScreen = screen?.screen[1];
    console.log(setScreen);
    const spinCoin = (e: string) => {
        startSpin(true);
        setTimeout(() => {
            const outcome = Math.floor(Math.random() * 2);
            setToss(outcomes[outcome]);
            if (outcomes[outcome] === e) {
                setResult('WON');
            } else {
                setResult('LOST');
                const inning = Math.floor(Math.random() * 2);
                setInnings(choice[inning]);
            }
        }, 5000);
    }
    const setInnings = (i: string) => {
        if (i === 'Bat') {
            setBatFirst?.('USER');
            console.log(batting, "<======batting")
        } else {
            console.log(batting, "<======batting")
            setBatFirst?.('COMPUTER');
        }
    }
    const play = () => {
        setScreen?.('GAME');
    }
    return (
        <div style={{ backgroundImage: `${result === "WON" ? `url('https://media4.giphy.com/media/26BRABnerqonwLHMc/200w.webp?cid=ecf05e47pychi2lxj02ufzmextf3xmx78i3fsc8f88fc0p1f&rid=200w.webp&ct=s')` : `url('')`}`, backgroundSize: "fit" }} className={`border-0 w-3/4 p-3 rounded-lg mx-auto backdrop-grayscale-0 bg-white/70`} >
            <div>
                <img className='mx-auto' width={'18%'} src="https://media1.giphy.com/media/NP4BXt8helymHlSfMo/100.webp?cid=ecf05e47ra7ebkkr5k0wooa788440ted165wmcfmffvwwwcj&rid=100.webp&ct=ts" alt="toss" />
                <img className='mx-auto' src="https://media4.giphy.com/media/i4c2al1NWjjqFkY5YN/100.webp?cid=ecf05e47py2c0rbyw3kqgukq3gmyogmoss63xoklib52djph&rid=100.webp&ct=s" alt="" width={'18%'} />
            </div>
            {
                !spinner && (
                    <div className='mx-auto mt-6 w3/4'>
                        <p className='motion-safe:animate-bounce font-bold text-center text-transparent bg-clip-text bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 tracking-tight text-4xl dark:text-white'>
                            Select Heads or Tails
                        </p>
                        <div className="mx-auto my-4 grid grid-cols-2 p-3 border-2 justify-center w-1/4">
                            {
                                outcomes.map(e => (
                                    <button
                                        key={e}
                                        className='place-content-center mx-8 w-32 tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 text-white bg-blue-500 hover:border-2 border-blue-500 hover:text-blue-500 hover:bg-white shadow-md px-10 py-5 inline-flex mx-auto items-center hover:animate-bounce w-6 h-6'
                                        onClick={() => spinCoin(e)}
                                    >
                                        {e}
                                    </button>
                                ))
                            }
                        </div>
                        <img className='mx-auto' src="https://media4.giphy.com/media/BLMD7WgJETvcYeNIUj/200w.webp?cid=ecf05e477z6i25pmr0vwtgs0nmoi347u5buq8z9euv3p21es&rid=200w.webp&ct=s" alt="toss2" width={'20%'} />
                    </div>
                )
            }
            {
                spinner && !toss && (
                    <div className=" m-0">
                        <img className='mx-auto my-0' width={'30%'} src={"https://media4.giphy.com/media/MOsuJf3qp3b1fQx2Iv/200w.webp?cid=ecf05e475mb00ucml73l3u4dyh7ohaxndnpc6ovd7k36st0g&rid=200w.webp&ct=s"} alt="toss coin" />
                        <div className='mx-auto my-0 grid grid-cols-2 justify-center w-2/4'>
                            <img className='mx-auto my-0 p-0' src="https://media1.giphy.com/media/okG3xgDwDSuz30K3vu/200w.webp?cid=ecf05e47hggmwhelsyaxes0nyttgp0tgznl47twijbf3jbhi&rid=200w.webp&ct=s" alt="waiting" width={'67%'} />
                            <img className='mx-auto my-0 p-0' src="https://media1.giphy.com/media/SybmUUQEVno6vhJ2po/200w.webp?cid=ecf05e47f4ot1yp9ae2aithxjrpxmr69h6tgybuiawf0ypnr&rid=200w.webp&ct=s" alt="" width={'67%'} />
                        </div>
                    </div>
                )
            }
            {
                toss && result && (
                    <div className='m-0'>
                        <p className='text-center antialiased font-extrabold text-black tracking-tight text-4xl dark:text-white p-6'>
                            YOU CHOOSE : {toss}</p>
                        <p className='text-center m-0 p-0 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-80%'>
                            YOU {result} THE TOSS!
                            {result === "LOST" && (
                                <div>
                                    <p>You will {batting === "USER" ? "Bat" : "Bowl"} First</p>
                                    <img className='mx-auto p-2'
                                        src={
                                            batting === "USER" ? "https://media1.giphy.com/media/jcCMzZosqdy1q2rgTf/200w.webp?cid=ecf05e470m239rpnhzy5407q5dr65i6ipj4zoj3met2tyorf&rid=200w.webp&ct=s" : "https://media4.giphy.com/media/dupMOL8nNK1ghDT6qQ/200w.webp?cid=ecf05e47a4w6rgh2qdenjv9drwa2hgkrq2m27q859yeytzk9&rid=200w.webp&ct=s"
                                        }
                                        width={'18%'}
                                        alt="ball" />
                                </div>
                            )}
                        </p>
                        {
                            result === "WON" && (
                                <div className='flex-auto flex-col mx-auto'>
                                    {/* <p className='text-3xl'>Choose to : </p> */}
                                    <img className='mx-auto' src="https://media0.giphy.com/media/1CXaIjAvTV0CKMuKlK/200w.webp?cid=ecf05e4767gfksyql1xq4olkacv9i0u5n4ji5jnqambgqj3q&rid=200w.webp&ct=ts" alt="" width={'20%'} />
                                    <div className='mx-auto my-auto grid grid-cols-3 justify-center w-3/4'>
                                        <button
                                            className='place-content-center m-8 w-32 tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 text-white bg-blue-500 hover:border-2 border-blue-500 hover:text-blue-500 hover:bg-white shadow-md px-16 py-7 inline-flex mx-auto items-center hover:animate-bounce w-6 h-6 '
                                            onClick={() => setInnings("Bat")}
                                        > Bat
                                        </button>
                                        <img className='mx-auto my-auto' src="https://media3.giphy.com/media/ReshxYOiieoGkDj1qJ/giphy.webp?cid=ecf05e470yu1mb9m2mireasc6gdyz831ta3im4fjikhzyxti&rid=giphy.webp&ct=s" alt="this that" width={'40%'} />
                                        <button
                                            className='place-content-center m-8 w-32 tracking-wide text-gray-800 font-bold rounded mx-auto border-b-2 border-blue-500 text-white bg-blue-500 hover:border-2 border-blue-500 hover:text-blue-500 hover:bg-white shadow-md px-16 py-7 inline-flex items-center hover:animate-bounce w-6 h-6 '
                                            onClick={() => setInnings("Bowl")}
                                        > Bowl
                                        </button>
                                    </div>
                                    {
                            batting === 'USER'? (
                                <p className='text-center text-2xl'>You will Bat first </p>
                            ) : (
                                <p className='text-center text-2xl'>You will Bowl first </p>
                            )
                        }
                                </div>
                            )
                        }
                    </div>
                )}
            {
                batting && (
                    <div>
                        <img className='mx-auto my-0'
                            src="https://media1.giphy.com/media/V9NjM11gy4AyEQxtqp/200w.webp?cid=ecf05e471g8kzl6fbe4kch3tyrt2ghnsusrcvkpiyns3hag2&rid=200w.webp&ct=s"
                            alt="play"
                            width={'15%'}
                            onClick={() => play()}
                        />
                    </div>
                )
            }
        </div>
    )
}
// (149 kB)
// https://media4.giphy.com/media/26BRABnerqonwLHMc/200w.webp?cid=ecf05e47pychi2lxj02ufzmextf3xmx78i3fsc8f88fc0p1f&rid=200w.webp&ct=s

// (124 kB)
// https://media1.giphy.com/media/NP4BXt8helymHlSfMo/100.webp?cid=ecf05e47ra7ebkkr5k0wooa788440ted165wmcfmffvwwwcj&rid=100.webp&ct=ts

// (10 kB)
// https://media4.giphy.com/media/i4c2al1NWjjqFkY5YN/100.webp?cid=ecf05e47py2c0rbyw3kqgukq3gmyogmoss63xoklib52djph&rid=100.webp&ct=s

// (35 kB)
// https://media4.giphy.com/media/BLMD7WgJETvcYeNIUj/200w.webp?cid=ecf05e477z6i25pmr0vwtgs0nmoi347u5buq8z9euv3p21es&rid=200w.webp&ct=s

// (42 kB)
// https://media4.giphy.com/media/MOsuJf3qp3b1fQx2Iv/200w.webp?cid=ecf05e475mb00ucml73l3u4dyh7ohaxndnpc6ovd7k36st0g&rid=200w.webp&ct=s