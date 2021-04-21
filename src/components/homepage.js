import React, {useEffect} from "react";

const Homepage = () => {
    useEffect(() => {
        const fetchData = async () => {
            let servMessage = await fetch('http://localhost:8080/');
            const message = await servMessage.json();
            console.log(message.data);
        }
        fetchData();
    }, []);

    return <div id='homepage'>
<h1>it's a homepage</h1>
    </div>
}

export default Homepage;