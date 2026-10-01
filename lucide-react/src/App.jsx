import { Home, Search, User } from "lucide-react";

function App() {
  return (
    <div>
      <h1>Lucide React Example</h1>

     <Home size={40} color="blue" />
<Search size={30} color="gray" />
<User size={30} color="green" />

<button>
      <Search size={18} />
      Search
    </button>
    </div>
  );
}

export default App;