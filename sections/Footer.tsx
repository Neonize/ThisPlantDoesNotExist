import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 py-6 mt-24">
      <div className="text-center text-sm text-gray-500">
        <span className="font-bold text-lg mr-2">
          This plant does not exist
        </span>
        &copy; {new Date().getFullYear()} All Rights Reserved |{" "}
        <Link href="https://vmartens.de" className="underline">
          VMartens
        </Link>
      </div>
    </footer>
  );
}
