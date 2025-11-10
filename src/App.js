import index from './index.css'
import PostLists from "./components/PostLists";
import AddPostForm from './components/AddPostForm';

function App() {
  return (
    <div>
      <AddPostForm/>
      <PostLists/>
    </div>
  );
}

export default App;
