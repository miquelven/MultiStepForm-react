import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Step1 from './Components/Step1'
import Step2 from './Components/Step2'
import Step3 from './Components/Step3'

export const RoutePages = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Step1 />} />
                <Route path='/step2' element={<Step2 />} />
                <Route path='/step3' element={<Step3 />} />
            </Routes>
        </BrowserRouter>

    )
}
