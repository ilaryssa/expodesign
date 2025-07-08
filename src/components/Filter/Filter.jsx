import {useState, useRef, useEffect} from 'react';
import "./Filter.css";

export default function Filter({projects, setFilter}) {

    const [openMenu, setOpenMenu] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);
    const dropdownRef = useRef(null); //useRef é usado para referenciar o elemento do dropdown, assim podemos verificar cliques fora dele (usado posteriormente)

    const newFilters = [
        {
            nome: "Ano",
            valores: [...new Set(projects.map((p) => p.ano))].sort((a, b) => b - a)
        },
        {
            nome: "Disciplina",
            valores: [...new Set(projects.flatMap((p) => p.disciplina))].sort()
        },
        {
            nome: "Categoria",
            valores: [...new Set(projects.flatMap((p) => p.tags))].sort()
        },
        {
            nome: "Autor",
            valores: [...new Set(projects.flatMap((p) => p.autor))].sort()
        }
    ];

    useEffect(() => {
        function clickOut(e) {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenMenu(false);
                setSelectedCategory(null);
            }
        }

        document.addEventListener("mousedown", clickOut);
        return () => {
            document.removeEventListener("mousedown", clickOut);
        }
    }, []);
    
    const clearFilter = () => {
        setFilter(null);
        setSelectedValue(null);
        setSelectedCategory(null);
    };

    return(
        <div className="filter-container" ref={dropdownRef}>
            <h3 className="filter-title"> Filtrar por: </h3>
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
                                {newFilters.map((filter) => (
                                    <div key={filter.nome} onClick={() => setSelectedCategory(filter.nome)} className={`filter-item ${selectedCategory === filter.nome ? "ativo" : ""}`}>
                                        {filter.nome}
                                    </div>
                                ))}
                            </div>

                            <div className="right-column">
                                {selectedCategory && newFilters.find((f) => f.nome === selectedCategory)?.valores.map((value) => (
                                    <div key={value} onClick={() => {
                                        setFilter({
                                            tipo: selectedCategory,
                                            value: value
                                        });
                                        setSelectedValue(value);
                                        setOpenMenu(false);
                                        setSelectedCategory(null);
                                    }} className="value-item">
                                        {value}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                    <button className="clear-button" onClick={clearFilter}> Limpar </button>
            </div>
        </div>
    );
}