import React, { useState } from "react";
import "./App.css";

function App() {
  const [isGreen, setIsGreen] = useState(false);

  const handleButtonClick = () => {
    setIsGreen(!isGreen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          className="gumballMachine"
          src={
            isGreen
              ? https://www.istockphoto.com/vector/cartoon-gumball-machine-with-thought-bubble-in-comic-book-style-gm1463932250-496785752?irgwc=1&cid=IS&utm_medium=affiliate_SP&utm_source=FreeImages&clickid=34bQV6XhsxyNW7bVQk0Q4XRxUkAQ9%3AQIrxFrWY0&utm_term=cartoon%2520gumball%2520machine&utm_campaign=srp_free_inline-popup&utm_content=270498&irpid=246195.png
              : https://www.google.com/search?sxsrf=APwXEdcaJHA4OLHDb_Ob43VxKEsMG0Jg8g:1682533987627&q=cartoon+gumball+machine+free+green&tbm=isch&source=univ&fir=GYtsy5syMAffdM%252CCFYCt-XFut5U-M%252C_%253BPaRJZmz3qxKyJM%252Cy_kh0070yFVtiM%252C_%253BFLzDKdB5qd6vMM%252CtnqJ1MHrFMfrgM%252C_%253BKCsm8DRZtkGNwM%252Cq5AQlp-8Sk5v9M%252C_%253B3Td7zD-QYZX5_M%252CPEc3cFYoYIE8nM%252C_%253BoKnpeoRyDV7B_M%252Cc0Px8YavZ1piRM%252C_%253BKPCxQZai-TP3IM%252CJxnpBHhGPGeLPM%252C_%253BVlKiY31x14lfyM%252CwiGMRSpHBitjCM%252C_%253BggNDIZtGSfISlM%252CeKDtX1NsKBTvhM%252C_%253BqqAUb2wiTAOf7M%252CqPLsJ7ZJ8PUDaM%252C_&usg=AI4_-kS1_4dB-dgszVFeNd5v13vFxRoy0w&sa=X&ved=2ahUKEwjNp57Fl8j-AhUJkokEHUJNBkMQ420oAHoECAgQQA&biw=1245&bih=726&dpr=2#imgrc=2RZGflTXQTKLjM.png
          }
          alt="Gumball Machine"
        />
        {isGreen ? (
          <p>You like 449!</p>
        ) : (
          <p>You like EB and BBC!</p>
        )}
        <button onClick={handleButtonClick}>
          Click to Change Gumball Machine
        </button>
      </header>
    </div>
  );
}

export default App;