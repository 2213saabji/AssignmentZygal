import { useState } from 'react'
import Carousel from './reusableComp/Carsoul'
import Login from './reusableComp/login';
import Scrollbar from './reusableComp/scrollbar';

function App() {
  const [pagination, setPagination] = useState(0)

  function setpaginate(page) {
    setPagination(page);
  }
  return (
    <div>
      {pagination == 0 &&
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="relative flex justify-center items-center">
            <Carousel />
          </div>
          <button
            onClick={() => setpaginate(1)}
            className="mt-4 px-4 py-2 w-[330px] bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      }
      {pagination == 1 &&
        <Login setpaginate={setpaginate} />
      }
      {pagination == 2 &&
        <Scrollbar setpaginate={setpaginate} />
      }

    </div>
  )
}

export default App
