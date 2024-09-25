import { createContext, useState, useEffect, useContext } from "react";

const Base_url = `http://localhost:9000`;

const CitiesContext = createContext();

function CitiesProvider({ children }) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

    useEffect(function () {
        async function fetchCities() {
            try {
                setIsLoading(true);
                const res = await fetch(`${Base_url}/cities`);
                const data = await res.json();
                setCities(data);
                // console.log(data);
            } catch {
                alert("There was an error Loding data...");
            } finally {
                setIsLoading(false);
            }
        }
        fetchCities();
    }, []);



async function getCity(id) {
    try {
        setIsLoading(true);
        const res = await fetch(`${Base_url}/cities/${id}`);
        const data = await res.json();
        setCurrentCity(data);
        // console.log(data);
    } catch {
        alert("There was an error Loding data...");
    } finally {
        setIsLoading(false);
    }
}


return (
    <CitiesContext.Provider
        value={{
            cities,
            isLoading,
            currentCity,
            getCity,
        }}
    >
        {children}
    </CitiesContext.Provider>
);

}


function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined)
        throw new Error("citiesContext was use outside the citiesProvider");
    return context;
}

export { CitiesProvider, useCities };
