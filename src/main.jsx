import { createRoot } from 'react-dom/client'
import './index.css'
import Shared1 from './Shared1.jsx'
import Shared2 from './Shared2.jsx'
import { TodoProvider } from './context/TodoContext.jsx'
import GetTodos from './GetTodos.jsx'
createRoot(document.getElementById('root')).render(
    <TodoProvider>
        <GetTodos/>
    </TodoProvider>
)
