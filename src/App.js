import {Dropdown} from 'primereact/dropdown';
import {useState, useRef, useEffect} from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

export default function App() {

    const [selectedCountry,
        setSelectedCountry] = useState(null);

    const countries = [
        {
            name: 'Australia',
            code: 'AU'
        }, {
            name: 'Brazil',
            code: 'BR'
        }, {
            name: 'China',
            code: 'CN'
        }, {
            name: 'Egypt',
            code: 'EG'
        }, {
            name: 'France',
            code: 'FR'
        }, {
            name: 'Germany',
            code: 'DE'
        }, {
            name: 'India',
            code: 'IN'
        }, {
            name: 'Japan',
            code: 'JP'
        }, {
            name: 'Spain',
            code: 'ES'
        }, {
            name: 'United States',
            code: 'US'
        }
    ];


    const onCountryChange = (e) => {
        setSelectedCountry(e.value);
    }
 
    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <div>{option.name}</div>
                </div>
            );
        }
        return (
            <span>
                {props.placeholder}
            </span>
        );
    }

    return (
        <div className="dropdown-demo">
                <h5>Advanced with Templating, Filtering and Clear Icon</h5>
                <Dropdown
                    value={selectedCountry}
                    options={countries}
                    onChange={onCountryChange}
                    optionLabel="name"
                    filter
                    showClear
                    filterBy="name"
                    placeholder="Select a Country"
                    valueTemplate={selectedCountryTemplate}
                    />
        </div>
    );
}