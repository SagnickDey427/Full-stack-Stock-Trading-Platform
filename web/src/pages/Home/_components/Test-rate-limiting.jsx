import apiClient from "../../../utils/apiClient.js";// Import your new mailroom!

const TestComponent = () => {
  const triggerApi = async () => {
    try {
      // Hit any valid GET route on your backend
      const response = await apiClient.get('/portfolio');
      console.log("Success:", response.data);
    } catch (error) {
      // We don't need to write toast() here because the interceptor handles it!
      console.log("Request failed, but interceptor should show the toast : ",error.message);
    }
  };

  return (
    <div style={{ padding: '50px' }}>
      <h2>Rate Limit Test</h2>
      <button onClick={triggerApi} className="cursor-pointer py-3 px-5 bg-blue-500 text-white rounded-2xl">
        Spam This Button!
      </button>
    </div>
  );
};

export default TestComponent;