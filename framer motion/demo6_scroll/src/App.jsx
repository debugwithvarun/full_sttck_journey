import React from "react";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Exapmle3 from "./components/Exapmle3";

const App = () => {
  return (
    <div
      className="w-screen min-h-screen flex flex-col bg-[#1c1c1c] justify-center
 items-center relative mt-0 overflow-hidden"
    >
      {/* <p className='h-[400px] font-extrabold text-white flex justify-center text-4xl mt-[200px]'>Hello</p> */}
      {/* <Example1/> */}
      {/* <Example2/> */}

      <Exapmle3/>
      <p className=' w-screen font-extrabold text-white flex justify-center p-10 m-10 '>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ad ea, vel alias corrupti harum ipsa cupiditate! Illo, porro magnam. Fugiat ad labore reiciendis voluptate dignissimos, animi reprehenderit rerum quaerat.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis at labore temporibus. Nostrum accusantium dolorum necessitatibus vitae porro ullam officia labore dolor cum sint? Voluptatibus nulla aut placeat amet reprehenderit!
        Voluptatem rerum voluptatibus quae ut iusto? Officia perferendis expedita molestiae, enim eligendi autem, repellat ullam magnam, dignissimos architecto pariatur nulla? Vero quae consectetur aspernatur aut hic qui error omnis natus.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ad ea, vel alias corrupti harum ipsa cupiditate! Illo, porro magnam. Fugiat ad labore reiciendis voluptate dignissimos, animi reprehenderit rerum quaerat.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis at labore temporibus. Nostrum accusantium dolorum necessitatibus vitae porro ullam officia labore dolor cum sint? Voluptatibus nulla aut placeat amet reprehenderit!
        Voluptatem rerum voluptatibus quae ut iusto? Officia perferendis expedita molestiae, enim eligendi autem, repellat ullam magnam, dignissimos architecto pariatur nulla? Vero quae consectetur aspernatur aut hic qui error omnis natus.
      </p>
    </div>
  );
};

export default App;
