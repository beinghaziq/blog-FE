export const Error500 = () => {
  return (
    <div id="content" className="main-container error-500-page">
      <div class="container">
        <div className="text-center">
          <img
            className="error-500"
            src="https://kmp-assets.s3.amazonaws.com/500.gif"
            alt="500 error"
          />
          <h1>It's out fault</h1>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
