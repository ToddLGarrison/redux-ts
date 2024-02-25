import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('')
    const dispatch = useDispatch();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(actionCreators.searchRepositories(term) as any)
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={event => setTerm(event.target.value)} />
                <button>Search</button>
            </form>
        </div>
    )    
}

export default RepositoriesList