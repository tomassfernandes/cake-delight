export default function InfoItem() {
  const data = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z" />
        </svg>
      ),
      title: "Fast Delivery",
      text: "No more waiting, just instant joy!",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z" />
        </svg>
      ),
      title: "Exceptional Quality",
      text: "Crafted with precision, using only the finest ingredients",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M760-640v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM120-80q-17 0-28.5-11.5T80-120v-200q0-33 23.5-56.5T160-400v-160q0-33 23.5-56.5T240-640h160v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l56-56 56 56q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h160q33 0 56.5 23.5T720-560v160q33 0 56.5 23.5T800-320v200q0 17-11.5 28.5T760-80H120Zm120-320h400v-160H240v160Zm-80 240h560v-160H160v160Zm80-240h400-400Zm-80 240h560-560Zm560-240H160h560Z" />
        </svg>
      ),
      title: "Customization",
      text: "Customize your cake into a personalized masterpiece",
    },
  ];

  return data.map((item) => (
    <div className="info-div">
      <div className="info-icon-div">{item.svg}</div>
      <p className="info-title">{item.title}</p>
      <p className="info-p">{item.text}</p>
    </div>
  ));
}
