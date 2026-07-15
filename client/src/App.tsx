import {Layout} from "./components/layout/Layout.tsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from "./components/pages/Home.tsx";
import {ProductDetails} from "./components/pages/ProductDetails.tsx";
import {Cart} from "./components/pages/Cart.tsx";


function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/product/:id" element={<ProductDetails/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </Layout>
        </Router>

    )
}

export default App;