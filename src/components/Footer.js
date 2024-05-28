export default function Footer() {
  return (
    <footer className="footer mt-4 flex items-center justify-around">
      <div className="flex flex-col ">
        <b>Our Company</b>
        <p className="text-xs my-1">Business Solutions</p>
        <p className="text-xs my-1"> Impressum</p>
        <p className="text-xs my-1"> Terms & Conditions</p>
        <p className="text-xs my-1"> User Privacy Policy</p>
        <p className="text-xs my-1"> Business User Privacy Policy</p>
        <p className="text-xs my-1"> Data Protection Data Request</p>
      </div>
      <div>
        <img
          src="https://hye.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-no-bg-new.917dcf43.png&w=640&q=75"
          alt="logo"
          style={{ width: "200px", filter: "opacity(0.8)" }}
        />
      </div>
    </footer>
  );
}
