import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "app/providers/ThemeProvider";
import App from "app/App";

render(
    <BrowserRouter>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    </BrowserRouter>,
    document.getElementById('root')
)