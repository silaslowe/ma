import PageHeader from '../ui-components/page-header/page-header';
import InfoDisplay from '../ui-components/diplay/info-display';
import Button from '../ui-components/button/button';


const dummyData = [
    {
        title: "Income",
        value: 403412,
        monitary: true
    },
    {
        title: "Expenses",
        value: 206412,
        monitary: true
    },
    {
        title: "Gigs Played",
        value: 23,
        monitary: false
    },
    {
        title: "Musicians Hired",
        value: 7,
        monitary: false
    }
]

const alertLog = () => {
    console.log("Alert")
}

const primaryLog = () => {
    fetch('https://localhost:7085/expenses', {
        mode: 'cors', 
        credentials: 'same-origin', 
        referrerPolicy: 'same-origin', 
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
const Home = () => {
    return (
        <div>
            <PageHeader/>
            <h1>This is the Home Page</h1>
            <div>
                {dummyData.map(data => <InfoDisplay key={data.title} data={data}/>)}
            </div>

            <Button style='alert' text={'Alert'} onClick={alertLog}/>
            <Button style='primary' text={'Primary'} onClick={primaryLog}/>
        </div>
    )
}

export default Home