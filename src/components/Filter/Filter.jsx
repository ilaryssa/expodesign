import { useState, useEffect } from "react";
import "./Filter.css";

// const filters = {
//     Ano: ["2025", "2024", "2023", "2022"],
//     Disciplina: ["Tipografia", "IHC", "Multimídia"],
//     Categoria: ["Branding", "Identidade Visual", "Protótipo"],
//     Autor: ["Ana", "Guto", "Carlos"]
// };

export default function Filter({projects, setFilter}) {
    const [filters, setFilters] = useState({});
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedValue, setSelctedValue] = useState(null);

    useEffect(() => {
        const newFilters = {
            Ano:[...new Set(projects.map((p) => p.ano))],
            Disciplina:[...new Set(projects.map((p) => p.disciplina))],
            Categoria:[...new Set(projects.flatMap((p) => p.tags))],
            Autor:[...new Set(projects.map((p) => p.autor))].sort(),
        };
        setFilters(newFilters);
    }, [projects]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const clearFilter = () => {
        setFilter(null);
        setSelctedValue(null);
        setSelectedCategory(null);
    };

    return (
        <div className="filter-container">
            <h3>Filtrar por:</h3>
            <div className="filter-wrapper">
                <div className="dropdown">
                    <button className="select-button" onClick={() => {
                        setOpenMenu(!openMenu);
                        setSelectedCategory(null);
                    }}>
                        {selectedValue || "Selecionar"}
                    </button>
                    {openMenu && (
                        <div className="dropdown-menu">
                            <div className="left-column">
                                {Object.keys(filters).map((category) => (<div key={category} onClick={() => handleCategoryClick(category)} className={`filter-item ${selectedCategory === category ? "ativo" : ""}`}
                                > 
                                    {category}
                                </div>
                            ))}
                            </div>

                            {selectedCategory && (
                                <div className="right-column">
                                    {filters[selectedCategory].map((value) => (
                                        <div key={value} onClick={() => {
                                            setFilter({tipo: selectedCategory, value});
                                            setSelctedValue(value);
                                            setOpenMenu(false);
                                            setSelectedCategory(null);
                                        }}
                                        className="value-item"
                                        >
                                            {value}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <button className="clear-button" onClick={clearFilter}> Limpar </button>
            </div>
        </div>
    );
}