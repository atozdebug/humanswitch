const Modal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          Are you enjoying our services?
        </h2>
        <p>To continue further, you will need to register</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="mt-4 bg-gradient1 text-white py-2 px-4 rounded"
          >
            Close
          </button>
          <a href="/signuphr">
            <button
              onClick={onClose}
              className="mt-4 bg-gradient1 text-white py-2 px-4 rounded"
            >
              Register
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
