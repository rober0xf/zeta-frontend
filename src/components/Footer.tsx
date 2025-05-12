function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-gray-50 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Gamma
          Labs
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
