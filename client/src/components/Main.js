import { useState, useEffect } from 'react'
import Prism from "prismjs";
import "../../node_modules/prismjs/themes/prism-tomorrow.css";
import CodeSection from './CodeSection';

function Main() {

    const url = 'https://f4rukyldrm-request-header-parser.onrender.com';
    const code = `fetch('${url}/api/whoami')
    .then(response => response.json())
    .then(json => console.log(json));`;
    const output = `{
    "ipaddress":"159.20.14.100",
    "language":"en-US,en;q=0.5",
    "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
}`;
    const [outputVisible, setOutputVisible] = useState(false);
    const [outputMsg, setOutputMsg] = useState("");

    useEffect(() => {
        Prism.highlightAll();
    }, [outputVisible]);

    const handleClick = () => {
        setOutputVisible(true);
        setOutputMsg("Congrats you've made your first call to my Timestamp Microservice! 😃 🎉");
    }


    return (
        <main className="mx-auto w-4/5 h-full mt-[100px] mb-[50px]">
            <section className='mb-[150px] scroll-mt-[100px]' id='demo'>
                <h2 className='text-4xl mb-7'>Try it</h2>
                <p className='mb-5'>Run this code here, in a console or from any site:</p>
                <pre className='rounded-lg'>
                    <code className='language-javascript block p-2'>{code}</code>
                </pre>
                <button className='bg-green-500 hover:bg-green-700 font-bold px-4 py-1.5 my-5 rounded text-white' onClick={handleClick}>Run script</button>
                <pre className='rounded-lg'>
                    <code className='language-javascript block p-2'>{outputVisible ? output : '{}'}</code>
                </pre>
                <p className='mt-6'>{outputMsg}</p>
            </section>
            <section id='guide' className='scroll-mt-[150px]'>
                <h2 className='text-4xl mb-7'>Guide</h2>
                <p className='mb-16'>Below you'll find examples using Fetch API.</p>

                <CodeSection
                    title={'Getting the request header'}
                    code={code}
                    output={output}
                />
            </section>
        </main>)
}

export default Main