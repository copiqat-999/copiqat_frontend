import { useNavigate } from "react-router-dom";

const OverlayRouteModal = ({ children }) => {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate(-1); // Go back to the previous location
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-gray-200/30 backdrop-blur-xl flex items-start justify-start z-50"
      onClick={closeModal}
    >
      <div
        className="bg-transparent p-6  w-full "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default OverlayRouteModal;
