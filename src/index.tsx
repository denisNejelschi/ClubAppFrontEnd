import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Page from "./components/page/Page.tsx";




createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <main>
            <Page />
        </main>
    </StrictMode>,
)
