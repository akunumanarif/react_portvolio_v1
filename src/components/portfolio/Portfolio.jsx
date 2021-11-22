import { useEffect, useState } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import {featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio} from '../../data'

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const portfolioList = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "branding",
            title: "Branding",
        }
    ]

    useEffect(() => {
        switch(selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "branding":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1 className='portfolioText'>Portfolio</h1>
            <ul>
                 {portfolioList.map((itemList) => 
                  <PortfolioList 
                  key={itemList.id}
                  title={itemList.title} 
                  active={selected === itemList.id} 
                  setSelected={setSelected}
                  id={itemList.id}
                  />
                    )
                    }
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                    <img src={d.img} alt=""/>
                    <h3>{d.title}</h3>
                </div>
                ))}
                
            </div>
            
        </div>
    )
}
