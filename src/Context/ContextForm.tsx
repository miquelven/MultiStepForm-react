import { createContext, useReducer, useContext } from 'react'

interface State {
    currentStep: number
    name: string
    level: 1 | 0
    email: string
    github: string
}

interface ActionType {
    type: string
    payload: any
}

interface ContextType {
    state: State
    dispatch: (action: ActionType) => void
}

const initialState: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}

const Context = createContext<ContextType | undefined>(undefined);

const formReducer = (state: State, action: ActionType) =>{
    switch(action.type){
        case 'setCurrentStep':
            return {...state, currentStep: action.payload};

        case 'setName':
            return {...state, name: action.payload};

        case 'setLevel':
            return {...state, level: action.payload};

        case 'setEmail':
            return {...state, email: action.payload};

        case 'setGitHub':
            return {...state, github: action.payload};

        default:
            return state;
    }

}

export const ContextProvider = ( {children}: React.PropsWithChildren ) => {

    const [state, dispatch] = useReducer(formReducer, initialState)

    const value = {
        state,
        dispatch
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export const useForm = () => {
    const value = useContext(Context);
    if(value === undefined){
        throw new Error("useForm precisa ser usado dentro do FormProvider")
    }

    return value
}