export default function About() {
  return (
    <>
      <a href="https://vmartens.de">
        <div className="container max-w-screen-md p-8 py-4 mx-auto items-center flex flex-col">
          <h2 className="font-medium text-3xl">
            Hi i am Vincent, aka Neonize 👋
          </h2>
          <ul>
            <li className="flex p-2">
              👀 I’m interested in cloud development, automation and devops
            </li>
            <li className="flex p-2">
              🌱 I’m currently learning typescript, go and for my AWS SysOps
              Administrator Certificate
            </li>
            <li className="flex p-2">
              💞️ I’m looking to collaborate on open source projects in the
              future
            </li>
            <li className="flex p-2">
              📫 How to reach me? Per mail, message or whatever you find about
              me.
            </li>
          </ul>
          <p className="flex p-2 underline">More Info on my webpage</p>
        </div>
      </a>
    </>
  );
}
