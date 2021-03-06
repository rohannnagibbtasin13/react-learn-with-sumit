import { useEffect, useReducer } from 'react';

const initialState = {
    loading: true,
    error: '',
    post: {},
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                post: action.result,
                error: '',
            };
        case 'ERROR':
            return {
                loading: false,
                post: {},
                error: 'There was a problem',
            };
        default:
            return state;
    }
};

export default function GetPost2() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((respone) => respone.json())
            .then((data) => {
                dispatch({ type: 'SUCCESS', result: data });
            })
            .catch(() => {
                dispatch({ type: 'ERROR' });
            });
    }, []);
    return (
        <div>
            {state.loading ? 'Loading....' : state.post.title}
            {state.error || null}
        </div>
    );
}
